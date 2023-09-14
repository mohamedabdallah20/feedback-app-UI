import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'
function FeedbackForm({ addHandler }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState('10')
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('')

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
        // id: Math.random().toString(),
        text,
        rating: Number(rating),
      }

      addHandler(newFeedback)
      //   setText('')
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
