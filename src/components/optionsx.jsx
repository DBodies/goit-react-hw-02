

export default function Options({ leaveFeedback, reset,hasReviews }) {

    return (
        <>
        <button onClick={() => leaveFeedback("good")}>Good</button>
        <button onClick={() => leaveFeedback("neutral")}>Neutral</button>
            <button onClick={() => leaveFeedback("bad")}>Bad</button>
            {hasReviews && <button onClick={reset}>Reset</button>}
        </>
    )
}