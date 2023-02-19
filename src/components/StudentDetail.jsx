import React from "react";
import '../styles/StudentDetail.scss'
import { color } from "../utils/utils";

const StudentDetail = ({ 
    state, 
    setState,
    student
 }) => {

    const isActive = student.active? 'active' : 'false';
    const studentColor = color(student.grades);
    const OnCancel = () => {
        setState(!state)
    };

    return (
        <>
                <div className="modal-background">
                    <div className="modal-container">
                        <div className="modal-container">
                            <h2 style={{color: student.Color }} >{student?.Name}</h2>
                            <p>{student?.ID}</p>
                            <p>Estado: {isActive}</p>
                            <p style={{color: studentColor }}>Grades: {student?.grades}</p>
                            <button className="cancel-btn" onClick={OnCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
        </>
    );
};

export { StudentDetail };