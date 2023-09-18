import { createContext, useState, useEffect } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
// import feedbackData from '../data/feedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch data
  const fetchFeedback = async () => {
    const res = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    )
    const data = await res.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // update feedback
  const updateHandler = (id, newItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...newItem } : item))
    )
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }
  // delete feedback
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // add feedback
  const addHandler = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  // set item to be updated
  const editHandler = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        feedbackEdit,
        deleteHandler,
        addHandler,
        editHandler,
        updateHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext
