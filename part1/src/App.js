/*
import React from 'react'
import {Course, Header, Content, Total} from "./Components"
import ReactDOM from "react-dom";

const App = () => {

    const course = [
        {
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ];

    const courseLoop = () => {
        course.map(loop => {
            console.log(loop);
            return <Course course={loop}/>

        })
    };

    return (
        <div>
{/!*
            <Course course={course}/>{console.log(courseLoop(course))}
*!/}

            {courseLoop()}

        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))*/
