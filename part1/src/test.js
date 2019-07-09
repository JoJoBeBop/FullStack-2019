/*
import React from 'react'
/!*
import Course from './components/Course'
*!/


const Header = ({course}) => {
    console.log(course)

    return (
        <h1>{course.name}</h1>
    )
}


const Content = ({course}) => {
    return course.parts.map(note => {
            console.log(note.name);
            return (
                <div key={note.id}>
                    <p>{note.name} {note.exercises}</p>
                </div>
            )
        }
    )
}

const Total = ({course}) => {
    console.log(course);
    const sum = course.reduce((prev, cur) => prev + cur.exercises, 0);
    return (
        <div>
            <h4>Total amount of exercises: {sum}</h4>
        </div>
    )
}


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

    const Course = () => {
        return (
            <div>
                <Header course={course}/>
                <Content course={course}/>
                <Total course={course.parts}/>

            </div>

        )
    }



    return (
        <div>
            <Course course={course}/>
        </div>
    )
};


export default App*/
