import React from 'react'
/*
import Course from './components/Course'
*/


const App = () => {

    const course = {
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
            }
        ]
    };

    const Course = () =>
        course.parts.map(note =>
            <div key={note.id}>

                <p>
                    {note.name} {note.exercises}
                </p>
            </div>
        );

    console.log();

    return (
        <div>

            <h1> {course.name} </h1>

            {Course()}
        </div>
    )
};

export default App
