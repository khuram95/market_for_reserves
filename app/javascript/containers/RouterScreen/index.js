import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import HomeScreen from "../HomeScreen"
import TutorialScreen from "../TutorialScreen"
import QuizScreen from "../QuizScreen"
import ResultScreen from "../ResultScreen"

function RouterScreen() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/tutorial">
          <TutorialScreen />
        </Route>
        <Route exact path="/quiz">
          <QuizScreen />
        </Route>
        <Route exact path="/result">
          <ResultScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterScreen
