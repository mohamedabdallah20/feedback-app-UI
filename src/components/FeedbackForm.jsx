import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './Button'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState('10')
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('')

  const { addHandler, feedbackEdit, updateHandler } = useContext(
    FeedbackContext
  )
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisable(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisable(true)
    } else {
      setMessage(null)
      setBtnDisable(false)
    }
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating: Number(rating),
      }
      if (feedbackEdit.edit === true) {
        updateHandler(feedbackEdit.item.id, newFeedback)
        setText('')
      } else {
        addHandler(newFeedback)
        setText('')
      }
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate us</h2>
        <RatingSelect select={(r) => setRating(r)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  )
}

export default FeedbackForm
