import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    /*
        console.log(props);
    */
    if (props.all === 0) {
        return (
            <h3>No Feedback Given Yet!</h3>
        )
    }

    return (
        <table>
            <Statistic text="Good" value={props.go}/>
            <Statistic text="Neutral" value={props.neu}/>
            <Statistic text="Bad" value={props.ba}/>
            <Statistic text="Total" value={props.all}/>
            <Statistic text="Average" value={props.ave}/>
            <Statistic text="Positive" value={props.pos}/>
        </table>
    )
};

const Statistic = (props) => {

    return (
        <tbody>
        <tr>
            <td>{props.text}:{props.value}</td>
        </tr>
        </tbody>


    )
};


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [allClicks, setAll] = useState([])

    const setToGood = newValue => {
        setGood(newValue);
        setAll(allClicks.concat(1));
    };

    const setToNeutral = newValue => {
        setNeutral(newValue);
        setAll(allClicks.concat(0));
    };

    const setToBad = newValue => {
        setBad(newValue);
        setAll(allClicks.concat(-1));
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
            <div>
                <h3>Give Feedback!</h3>

                <button onClick={() => setToGood(good + 1)}>Good</button>
                <button onClick={() => setToNeutral(neutral + 1)}>Neutral</button>
                <button onClick={() => setToBad(bad + 1)}>Bad</button>

                <h3>Statistics</h3>
            </div>
            {/*            <Statistic>Good: {good}</Statistic>
            <Statistic>Neutral: {neutral}</Statistic>
            <Statistic>Bad: {bad}</Statistic>
            <hr/>*/}

            <Statistics all={allVotes} ave={average} pos={positive} go={good} ba={bad} neu={neutral}/>


        </div>


    )
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);