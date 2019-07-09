import React from 'react'
import ReactDOM from "react-dom";
import Course from "./Components"

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

    /*Key missing in CourseLoop?*/

    const courseLoop = () =>
        course.map(loop => {
            console.log(loop);
            return (<Course course={loop}/>)

        });

    return (
        <div>
            <h1><u>Curriculum</u></h1>
            <hr/>
            {courseLoop()}
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));