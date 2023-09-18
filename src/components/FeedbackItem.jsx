import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
// import { PropTypes } from 'react'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteHandler } = useContext(FeedbackContext)
  const { editHandler } = useContext(FeedbackContext)

  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>

      <button className="close" onClick={() => deleteHandler(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editHandler(item)}>
        <FaEdit color="purple"></FaEdit>
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  )
}
// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// }
export default FeedbackItem
