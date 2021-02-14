import React, { useState } from 'react'
import HomeScreen from "../HomeScreen"
import TutorialScreen from "../TutorialScreen"
import QuizScreen from "../QuizScreen"
import ResultScreen from "../ResultScreen"

function RouterScreen() {

  const [answers, setAnswers] = useState([])
  const [currentScreen, setCurrentScreen] = useState("Home")
  return (
      <>
      {currentScreen === "Home"     && <HomeScreen     setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "Tutorial" && <TutorialScreen setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "Quiz"     && <QuizScreen     setAnswers={setAnswers} setCurrentScreen={setCurrentScreen} />}
      {currentScreen === "Result"   && <ResultScreen answers={answers} setAnswers={setAnswers} setCurrentScreen={setCurrentScreen} />}
      </>
  )
}

export default RouterScreen
