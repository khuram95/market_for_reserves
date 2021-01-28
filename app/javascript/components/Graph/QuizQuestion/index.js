import React from 'react'
import BreakingNews from './BreakingNews'
import QuizAnswer from './QuizAnswer'

const QuizQuestion = (props) => {

  const {
    answeredCorrectly,
    questionAnswer,
    moved,
  } = props

  if (answeredCorrectly === null)
    return (
      <BreakingNews
        questionAnswer={questionAnswer}
      />
    )

  return (
    <QuizAnswer
      questionAnswer={questionAnswer}
      moved={moved}
      showBriefness={answeredCorrectly ? false : true}
    />
  )
}

export default QuizQuestion
