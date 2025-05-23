"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import InputSection from "./components/InputSection"
import OutputSection from "./components/OutputSection"
import Footer from "./components/Footer"
import { getGenZExplanation } from "./api.js"




function App() {
  const [studyText, setStudyText] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showOutput, setShowOutput] = useState(false)

  const handleGenerateExplanation = async () => {
    if (studyText.trim() === "") return

    setIsLoading(true)
    setShowOutput(false)

    const response = await getGenZExplanation(studyText)
    setExplanation(response)
    setShowOutput(true)
    setIsLoading(false)
  }

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <InputSection
          studyText={studyText}
          setStudyText={setStudyText}
          handleGenerateExplanation={handleGenerateExplanation}
          isLoading={isLoading}
        />

        {showOutput && <OutputSection explanation={explanation} />}
      </main>

      <Footer />
    </div>
  )
}

export default App