

export default function Options({ leaveFeedback, reset }) {

    return (
        <>
        <button onClick={() => leaveFeedback("good")}>Good</button>
        <button onClick={() => leaveFeedback("normal")}>Normal</button>
            <button onClick={() => leaveFeedback("bad")}>Bad</button>
            <button onClick={(reset)}>Reset</button>
        </>
    )
}