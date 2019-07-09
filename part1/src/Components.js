import React from "react"

const Course = ({course}) => {
    console.log(course);

    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        <hr/>
        </div>
    )
};


const Header = ({course}) => {
    return (
        <h3 key={course.id}>{course.name}</h3>
    )
};


const Content = ({course}) => {
    console.log(course);

    return course.parts.map(note => {
            return (
                <div key={note.id}>
                    <p>{note.name} {note.exercises}</p>
                </div>
            )
        }
    )
};

const Total = ({course}) => {
    const sum = course.parts.reduce((prev, cur) => prev + cur.exercises, 0);
    console.log(sum);
    return (
        <div key={course.parts.id}>
            <h4>Total amount of exercises: {sum}</h4>
        </div>
    )
};

export default Course