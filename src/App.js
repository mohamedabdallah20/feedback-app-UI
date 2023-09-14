import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}
export default App
