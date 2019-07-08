import React from 'react'
/*
import Course from './components/Course'
*/


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
            </div>

        )
    }


    /*    const Course = () =>

            course.parts.map(note => {
                    console.log(note);
                    return (
                        <div>
                            <Content
                                key={note.id}
                                note={note}/>
                        </div>

                    )
                }
            )*/


    /*        course.parts.map(headerData =>
            <Header headerData={headerData}/>*/


    return (
        <div>
            <Course course={course}/>
        </div>
    )
};


export default App
