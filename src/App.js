import Header from './components/Header'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import HammoPage from './Pages/HammoPage'
// import HammoLink from './components/HammoLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/hammo" element={<HammoPage />} /> */}
          </Routes>
          <AboutIconLink />
          {/* <HammoLink /> */}
        </div>
      </Router>
    </FeedbackProvider>
  )
}
export default App
