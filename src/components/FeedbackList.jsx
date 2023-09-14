import React from 'react'
import FeedbackItem from './FeedbackItem'
import { PropTypes } from 'react'

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>there is no feedback</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}
FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
}
export default FeedbackList
