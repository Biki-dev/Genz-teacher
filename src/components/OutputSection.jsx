"use client";
import "./OutputSection.css"
import {
  useState
} from "react";
import {
  generateSpeech
} from "../api.js"; // adjust path if needed

function OutputSection( {
  explanation
}) {
  const [isPlaying,
    setIsPlaying] = useState(false);
  const [audio,
    setAudio] = useState(null);

  const toggleAudio = async () => {
    if (isPlaying && audio) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    try {
      const audioUrl = await generateSpeech(explanation);
      if (!audioUrl) throw new Error("Failed to generate audio.");

      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);
      newAudio.play();

      newAudio.onended = () => {
        setIsPlaying(false);
        setAudio(null);
      };
    } catch (error) {
      //console.error("Audio error:", error);
      setIsPlaying(false);
    }
  };

  return (
    





    <div className="output-section">
      <div className="output-card">
        <div className="card-header">
          <h2 className="card-title">🔥 Your Gen-Z Explanation</h2>
        </div>
        <div className="card-content">
          <div className="explanation-text">
            {explanation}
          </div>
                <p className="header-subtitle"># Audio will play within 30s after tapping</p>

          {/* Audio Player */}
          <div className="audio-section">
          <button className={`audio-button ${isPlaying ? "playing": ""}`} onClick={toggleAudio}>

              {isPlaying ? "🔊 Playing...": "🔈 Play Audio"}
            </button>

            {isPlaying && (
              <div className="sound-waves">
                <div className="waves-container">
                  <div className="wave-bar animate-sound-wave"></div>
                  <div className="wave-bar animate-sound-wave"></div>
                  <div className="wave-bar animate-sound-wave"></div>
                  <div className="wave-bar animate-sound-wave"></div>
                  <div className="wave-bar animate-sound-wave"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default OutputSection;