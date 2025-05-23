# Gen-Z Teacher

**Gen-Z Teacher** is a fun and engaging web app that transforms traditional study material into a Gen-Z style explanation with audio narration — perfect for students who prefer chill and vibey learning.

---

## 🚀 Features

- Upload **text** (e.g., textbook text, handwritten notes)
- Sends to **OpenRouter API / OpenAi Model** to generate Gen-Z-style summaries
- Converts the explanation to **speech** using **ElevenLabs TTS API**
- Responsive, mobile-friendly, Gen-Z inspired design
- Built using **React + Ai**

---

## 🧠 AI Services Used

### 1. **OpenRouter API (Chatgpt Model)**
- Used to rewrite content in a Gen-Z voice
- Free, fast, and powerful model for contextual generation

### 2. **ElevenLabs Text-to-Speech**
- High-quality speech generation from the Gen-Z explanation
- Model: `"eleven_multilingual_v2"`
- Returns an MP3 audio blob to play in-browser

---

## 📁 Folder Structure

GENZ-TEACHER/
 ├── public/
 ├── src/
 │   ├── components/
 │   │   ├── Footer.css
 │   │   ├── Footer.jsx
 │   │   ├── Header.css
 │   │   ├── Header.jsx
 │   │   ├── InputSection.css
 │   │   ├── InputSection.jsx
 │   │   ├── OutputSection.css
 │   │   ├── OutputSection.jsx
 │   ├── api.js
 │   ├── App.css
 │   ├── App.js
 │   ├── App.test.js
 │   ├── index.css
 │   ├── index.js
 │   ├── logo.svg
 │   ├── reportWebVitals.js
 │   ├── setupTests.js
 ├── .env
 ├── .gitignore
 ├── package.json
 ├── package-lock.json


---

## ⚙️ Installation & Setup

1. **Clone the repo**
    ```
    git clone https://github.com/Biki-dev/Genz-teacher.git
    cd Genz-teacher
    ```

2. **Install dependencies**
    ```
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in root:

    ```
REACT_APP_OPENROUTER_API_KEY=your_openrouter_api_key

REACT_APP_ELEVEN_API_KEY=your_elevenlabs_api_key
    REACT_APP_ELEVEN_VOICE_ID=your_voice_id
    REACT_APP_ELEVEN_MODEL_ID=eleven_multilingual_v2
    ```

4. **Start the development server**
    ```
    npm start
    ```

---

## 🧩 API Integration (`src/api.js`)

We use axios to send a POST request to the ElevenLabs API:


---

## ✅ To-Do / Future Enhancements

- [ ] Add image upload with OCR via Tesseract.js
- [ ] Backend integration with API or custom LLM
- [ ] Add dark/light theme toggle
- [ ] Save explanations to local history
- [ ] Export explanation + audio

---

## 🛡️ License

MIT License — use freely, credit appreciated.

---

## ✨ Made By

**Biki Kalita**  
Gen-Z Dev | Student | Code with Vibe  
[Instagram Highlights](https://www.instagram.com/naru.tobik1)
