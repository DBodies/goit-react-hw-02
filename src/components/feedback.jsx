export default function Feedback({good, normal, bad}) {
    const total = good + normal + bad
    const totalPositivePerc = total ? ((good / total) * 100) : 0
    
    return (
        <ul>
            <li>Good: { good}</li>
            <li>Normal: {normal}</li>
            <li>Bad:  {bad}</li>
            <li>Total: {total}</li>
            <li>Positive:: {totalPositivePerc}</li>
        </ul>
    )
}