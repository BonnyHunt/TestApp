import React from "react";
import { Link } from "react-router-dom";
import { estudiantes } from "./estudiantes";

const StudentLink = ({ student }) => {

    let component = null;

    if (student.active) {
        component = 
        (<li>
            <Link to={`/list/${student.id}`} >{student.Name}</Link>
        </li>)
    }
    return component;


}

const StudentsList = () => {
    return (
        <>
            <h1>students list</h1>
            <ul>
                {estudiantes.map(student => (
                    <StudentLink key={student.id} student={student} />
                ))}
            </ul>
        </>
    );
};

export { StudentsList };