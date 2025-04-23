export default function Feedback({good, neutral, bad,positivePerc,total}) {
    return (
        <ul>
            <li>Good: { good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad:  {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positivePerc}%</li>
        </ul>
    )
}