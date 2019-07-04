import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);

    const random = () => {
        const rand = Math.floor(Math.random() * anecdotes.length);
        console.log(rand);
        setSelected(rand)
    };

    return (
        <div>
            <div>
                {props.anecdotes1[selected].text}

            </div>
            <div>
                <button onClick={random}>New Anecdote</button>
            </div>
        </div>

    )
};


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

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