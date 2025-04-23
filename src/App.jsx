import { useState, useEffect } from "react"
import Description from "./components/description"
import Options from "./components/optionsx"
import Notification from "./components/notification"
import Feedback from "./components/feedback"

export default function App() {
  const [feedBack, setFeedback] = useState(() => {
    const saved = localStorage.getItem("saved-reviews")
    if(saved) {
      return JSON.parse(saved)
    }
    return {
    good: 0,
    normal: 0,
      bad: 0
    }
  })

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(feedBack))
  },[feedBack])
  

  const handleFeedback = (type) => {
    setFeedback((previous) => ({
    ...previous,
    [type]: previous[type] + 1
  }))
}

  const reset = () => {
    setFeedback({good:0, normal:0, bad:0})
  }
  
  const total = feedBack.good + feedBack.normal + feedBack.bad
  
  return (
    <>
      <h1>Sip Happens Café</h1>
      <Description />
      <Options leaveFeedback={handleFeedback} reset={reset} />
      {total > 0 ? (
        <Feedback good={feedBack.good} normal={feedBack.normal} bad={feedBack.bad} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  )
}