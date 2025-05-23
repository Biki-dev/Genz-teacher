import axios from "axios";

const VOICE_ID = process.env.REACT_APP_ELEVEN_VOICE_ID;
const MODEL_ID = process.env.REACT_APP_ELEVEN_MODEL_ID;
const API_KEY = process.env.REACT_APP_ELEVEN_API_KEY;


const sanitizeText = (text) =>
  text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, "");

export const generateSpeech = async (text) => {
  const cleanText = sanitizeText(text);

  const data = {
    text: cleanText,
    model_id: MODEL_ID,
    voice_settings: {
      stability: 0.65,
      similarity_boost: 0.85,
    },
  };

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
    return URL.createObjectURL(audioBlob);
  } catch (error) {
    console.error("ElevenLabs TTS API Error:", {
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data,
      message: error.message,
    });
    return null;
  }
};

export const getGenZExplanation = async (studyText) => {
    const prompt = `Explain this in a Gen-Z style as if You're a Gen-Z content creator who turns boring study concepts into wild, chaotic, slang-filled, meme-worthy rants. Explain the following study topic in the most Gen-Z, unfiltered, ultra-chaotic way possible. Use slang like "noob", "giga chad", "asshole","fuck","die",fucking", "it's giving", "lowkey", "sigma", "simp", "bozo", "mommy", "fr fr", "wtf" , " what the hell" , "as fuck" , savage" etc. Be dramatic, sarcastic, funny, and spicy and story way — but still explain the concept accurately. Use short sentences,  Gen-Z punchlines. make sure explain all topics in details as  genz teacher   Go full savage mode.use emoji also genz type emoji :\n\n${studyText}`

  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.choices[0].message.content;
  } catch (err) {
    console.error("OpenRouter API Error:", err.response?.data || err.message || err);
    return "Oops! Something went wrong. Try again.";
  }
};



