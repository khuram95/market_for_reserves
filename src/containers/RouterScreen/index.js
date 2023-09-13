import React, { useState } from "react";
import HomeScreen from "../HomeScreen";
import QuizScreen from "../QuizScreen";
import ResultScreen from "../ResultScreen";

function RouterScreen() {
  const [answers, setAnswers] = useState([]);
  const [phase2Answers, setPhase2Answers] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [totalBalance, setTotalBalance] = useState(0);
  return (
    <>
      {currentScreen === "Home" && (
        <HomeScreen setCurrentScreen={setCurrentScreen} />
      )}
      {/* {currentScreen === "Tutorial" && (
        <TutorialScreen setCurrentScreen={setCurrentScreen} />
      )} */}
      {currentScreen === "Quiz" && (
        <QuizScreen
          setAnswers={setAnswers}
          answers={answers}
          setCurrentScreen={setCurrentScreen}
          setPhase2Answers={setPhase2Answers}
          totalBalance={totalBalance}
          setTotalBalance={setTotalBalance}
        />
      )}
      {currentScreen === "Result" && (
        <ResultScreen
          answers={answers}
          totalBalance={totalBalance}
          setTotalBalance={setTotalBalance}
          setAnswers={setAnswers}
          phase2Answers={phase2Answers}
          setPhase2Answers={setPhase2Answers}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </>
  );
}

export default RouterScreen;
