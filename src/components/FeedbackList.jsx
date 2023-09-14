import React from 'react'
// import {} from 'react-icons'
import FeedbackItem from './FeedbackItem'
import { PropTypes } from 'react'

function FeedbackList({ feedback, deleteHandler }) {
  if (!feedback || feedback.length === 0) {
    return <p>there is no feedback</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} />
      ))}
    </div>
  )
}
// FeedbackList.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }
export default FeedbackList
