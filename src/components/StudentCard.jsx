import React from "react";
import '../styles/StudentCard.scss';


const StudentCard = ({ name,
    id,
    setOpenModal,
    modal,
    setStudentData,
    student
}) => {

    const newState = () => {
        setOpenModal(!modal)
    };

    return (
            <article
                onClick={() => {
                    setOpenModal(!modal)
                    setStudentData(student)
                }}
                className="student-detail--card">
                <span className="icon-card"></span>
                <p
                    className="student--card-title"
                    onClick={newState}
                >Name: {name}</p>
                <p className="student--card-body"> ID: {id}</p>
            </article >
    );
};

export { StudentCard };