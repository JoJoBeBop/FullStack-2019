import React from 'react'
/*
import Course from './components/Course'
*/


const Header = ({course}) => {
    return course.map(headerData => {
        return (
            <h1 key={headerData.id}>{headerData.name}</h1>
        )
    })
};


const Content = ({course}) => {
    return course.map(note => {
            return note.parts.map(notes => {
                    console.log(notes.name);

                    return (
                        <div key={notes.id}>
                            <p>{notes.name} {notes.exercises}</p>
                        </div>
                    )

                }
            )
        }
    )
}

const Total = ({course}) => {

    return course.map(sumData => {
            const sum = sumData.parts.reduce((prev, cur) => prev + cur.exercises, 0);
            console.log(sumData.parts)
            return (
                <div key={sumData.parts.id}>
                    <h4>Total amount of exercises: {sum}</h4>
                </div>
            )
        }
    )
}

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

    const Course = () => {
        return (
            <div>
                <Header course={course}/>
                <Content course={course}/>
                <Total course={course}/>
            </div>
        )
    };


    return (
        <div>
            <Course course={course}/>
        </div>
    )
};

export default App
