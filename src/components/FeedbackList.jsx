import React from 'react'
// import {} from 'react-icons'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { PropTypes } from 'react'

function FeedbackList({ feedback, deleteHandler }) {
  if (!feedback || feedback.length === 0) {
    return <p>there is no feedback</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.5 }}
            // className="feedback-item"
          >
            <FeedbackItem
              key={item.id}
              item={item}
              deleteHandler={deleteHandler}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} />
  //     ))}
  //   </div>
  // )
}
// FeedbackList.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }
export default FeedbackList
