import { createContext, useState, useEffect } from 'react'
import React from 'react'

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
    const res = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await res.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // update feedback
  const updateHandler = async (id, newItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })

    const data = await res.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }
  // delete feedback
  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // add feedback
  const addHandler = async (newFeedback) => {
    const res = await fetch(`/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await res.json()
    setFeedback([data, ...feedback])
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
