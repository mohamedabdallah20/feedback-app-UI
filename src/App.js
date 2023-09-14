import Header from './components/Header'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/feedbackData'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addHandler = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm addHandler={addHandler} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  deleteHandler={deleteHandler}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  )
}
export default App
