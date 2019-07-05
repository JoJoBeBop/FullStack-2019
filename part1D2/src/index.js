import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);

    const random = (props) => {
        const rand = Math.floor(Math.random() * anecdotes1.length);
        setSelected(rand)

    };

    const copy = {...anecdotes1};
    console.log(anecdotes1)

    const vote = () => {
        copy[selected].points+=1;
    };

    /*SOURCE:
    * https://stackoverflow.com/a/34087850
    * Had a lot of trouble with this one...
    * */
    let  maxPoints = anecdotes1.reduce(function (last, now) {
        return (last.points > now.points) ? last : now
    });



    return (
        <div>
            <div>
                {props.anecdotes1[selected].text}
                <br/>
                <p>Points: {props.anecdotes1[selected].points}
                </p>

            </div>
            <div>
                <button onClick={random}>New Anecdote</button>
                <button onClick={vote}>Vote</button>
            </div>
            <hr/>
            <div>
                <h3>Most Voted Anecdote</h3>
                <p>{maxPoints.text}</p>
                <p>Points: {maxPoints.points}</p>

            </div>
        </div>

    )
};

const anecdotes1 = [
    {
        text: "If it hurts, do it more often",
        points: 0
    },
    {
        text: "Adding manpower to a late software project makes it later",
        points: 0
    },
    {
        text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time",
        points: 0
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
        points: 0
    },
    {
        text: "Premature optimization is the root of all evil",
        points: 0
    },
    {
        text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it",
        points: 0
    }
];


ReactDOM.render(
    <App anecdotes1={anecdotes1}/>,
    document.getElementById('root')
);