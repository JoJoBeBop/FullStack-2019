import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [allClicks, setAll] = useState([])

    const setToGood = newValue => {
        setGood(newValue);
        setAll(allClicks.concat(1));
        console.log("G", good)
    };

    const setToNeutral = newValue => {
        setNeutral(newValue);
        setAll(allClicks.concat(0));
        console.log("N", neutral)
    };

    const setToBad = newValue => {
        setBad(newValue);
        setAll(allClicks.concat(-1));
        console.log("B", bad)
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let average = allClicks.reduce(reducer, 0) / allClicks.length;

    let allVotes = good + bad + neutral;

    let checkPositive = (pos) => {
        return pos === 1;
    };

    let positive = (allClicks.filter(checkPositive).length / allClicks.length) * 100;

    return (
        <div>
            <h3>Give Feedback!</h3>

            <button onClick={() => setToGood(good + 1)}>Good</button>
            <button onClick={() => setToNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setToBad(bad + 1)}>Bad</button>

            <h3>Statistics</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <hr/>

            <p>All: {allVotes}</p>
            <p>Average: {average}</p>
            <p>Positive: {positive}%</p>

        </div>


    )
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);