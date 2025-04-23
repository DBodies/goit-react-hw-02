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
    neutral: 0,
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

// const total = good + neutral + bad

  const reset = () => {
    setFeedback({good:0, neutral:0, bad:0})
  }
  
  const total = feedBack.good + feedBack.neutral + feedBack.bad

  const totalPositivePerc = total
    ? Math.round((feedBack.good / total) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options leaveFeedback={handleFeedback} reset={reset} hasReviews={total > 0} />
      {total > 0 ? (
        <Feedback good={feedBack.good}
          neutral={feedBack.neutral}
          bad={feedBack.bad}
          total={total}
          positivePerc={totalPositivePerc} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  )
}