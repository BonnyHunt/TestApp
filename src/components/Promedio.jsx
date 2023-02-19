import React from "react";
import { average, color } from "../utils/utils";
import '../styles/Average.scss'


const Average = ({students}) => {
    
    const grades = students.map((student) => student.grades);
    const studentsAverage = average(grades, grades.length);
    const averageColor = color(studentsAverage);

    return (
        <>
            <article className="average-detail--card">
                <span className="icon-card"></span>
                <p className="average--card-title" style={{color: averageColor}} >Promedio: {studentsAverage} </p>
            </article >
        </>
    );
};

export { Average };