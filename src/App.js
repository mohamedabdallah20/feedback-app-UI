import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/feedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addHandler = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addHandler={addHandler} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
      </div>
    </>
  )
}
export default App
