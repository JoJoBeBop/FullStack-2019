import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    };

    const Header = (props) => {
        return (
            <div>
                <p>Course name: {course.name}</p>
                <hr/>
            </div>
        )

    };

    const Content = (props) => {
        console.log("content", props);
        return (
            <div>
                <Part p={props.parts.parts[0]}/>
                <Part p={props.parts.parts[1]}/>
                <Part p={props.parts.parts[2]}/>
                <hr/>
            </div>
        )

    };

    const Part = (props) => {
        console.log("parts", props);

        return (
            <p>{props.p.name} {props.p.exercises}</p>
        )
    };

    const Total = (props) => {
        return (
            <p>Amount of Assignments: {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
        )

    };

    return (
        <div>
            <p>
                <Header name={course}/>
                <Content parts={course}/>
                <Total total={course}/>
            </p>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));