import React from 'react'
import { FaTimes } from 'react-icons/fa'
// import { PropTypes } from 'react'
import Card from './shared/Card'
function FeedbackItem({ item, deleteHandler }) {
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>

      <button className="close" onClick={() => deleteHandler(item.id)}>
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  )
}
// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// }
export default FeedbackItem
