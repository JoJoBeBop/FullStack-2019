import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    /*Didn't come up with a different solution*/
    const subjects = [
        {courseName: "Fundamentals of React", taskAmount: 10},
        {courseName: "Using props to pass data", taskAmount: 7},
        {courseName: "State of a component", taskAmount: 14}

    ];

    const Header = (props) => {
        return (
            <div>
                <p>Course name: {props.name}</p>
                <hr/>
            </div>
        )

    };

    const Content = (props) => {
        console.log("content");
        console.log(props);

        return (
            <div>
                <Part p={props.subjects[0]}/>
                <Part p={props.subjects[1]}/>
                <Part p={props.subjects[2]}/>
                <hr/>
            </div>
        )

    };

    const Part = (props) => {
        console.log("parts");
        console.log(props);

        return (
            <p>{props.p.courseName} {props.p.taskAmount}</p>
        )
    };

    const Total = (props) => {
        return (
            <p>Amount of Assignments: {props.total}</p>
        )

    };

    return (
        <div>
            <p>
                <Header name={course}/>
                <Content subjects={subjects}/>
                <Total total={exercises1 + exercises2 + exercises3}/>
            </p>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

