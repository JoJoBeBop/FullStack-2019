import React from 'react'

/*const Course = ({ note }) => {
    return (
        <li>{note.content}</li>
    )
}*/

const Course = ({course}) => {

    console.log(course.parts);

    course.parts.map(note => <p>{note.name}</p>)



    /*
            course.parts.map(course => <p>{course.parts.name}</p>)
    */

};

export default Course