"use client"
import {
  useState
} from "react"
import "./InputSection.css"

export default function InputSection( {
  studyText, setStudyText, handleGenerateExplanation, onSubmit, isLoading
}) {
  const [activeTab,
    setActiveTab] = useState("text")

  return (
    <div className="input-section">
      <div className="tabs-container">
        <form onSubmit={onSubmit} className="form-container">
            <div className="input-group">
              <label htmlFor="study-material" className="input-label">
                <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
                Upload Your Study Material
              </label>
              <textarea
                value={studyText}
                id="study-material"
                onChange={(e) => setStudyText(e.target.value)}
                placeholder="Paste your study notes, textbook paragraphs, or any concept you need explained..."
                className="textarea"
                />
            </div>
          

        <div className="submit-container">
          <button
            className="submit-button"
            onClick={handleGenerateExplanation}
            disabled={studyText.trim() === "" || isLoading}
            >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                <span>Working magic...</span>
              </>
            ): (
              <>
                Generate Explanation
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
)
}