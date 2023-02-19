import React from "react";
import '../styles/StudentDetail.scss'

const StudentDetail = ({ 
    state, 
    setState,
    student
 }) => {

    const isActive = student.active? 'active' : 'false';

    /* const validador = estudiantes.find(item => item.id === id); */
    const color = (grades) => {
        let color;
        if (grades >= 4) {
            color = "#00ff00";
        }
        if (grades >= 3 && grades < 4) {
            color = "#ffff00";
        }
        if (grades < 3) {
            color = "#ff0000"
        }
        return color
    };

    const OnCancel = () => {
        setState(!state)
    };

    return (
        <>
                <div className="modal-background">
                    <div className="modal-container">
                        <div className="modal-container">
                            <h2>{student?.Name}</h2>
                            <p>{student?.ID}</p>
                            <p>Estado: {isActive}</p>
                            <p style={{color: color(student.grades) }}>Grades: {student?.grades}</p>
                            <button className="cancel-btn" onClick={OnCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
        </>
    );
};

export { StudentDetail };