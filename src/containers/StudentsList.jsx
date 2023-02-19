import React, { useState } from "react";
import { Average, Promedio } from "../components/Promedio";
import { StudentCard } from "../components/StudentCard";
import { StudentDetail } from "../components/StudentDetail";
import { useGetStudents } from "../Hooks/useGetStudents";
import { Modal } from "../Modal/Modal";
import '../styles/StudentsList.scss';


const API = 'http://localhost:3005/api/v1/students';

const StudentsList = () => {

    const { data, error } = useGetStudents(API);

    if(error) {
        console.log(error)
    }

    const filter = data.filter((item) => {
        if(item.active){
            return item
        } else {
            return false
        }
    });

    const [studentData, setStudentData] = useState({});
    const [modal, setOpenModal] = React.useState(false);

    return (
        <section className="main-container">
            {/* main product detail */}
            <section className="main--list-detail">
                <div className="list-detail--title">
                    <h2>We create a list of people</h2>
                    <p>Reliable and easily accessible</p>
                </div>


                {/* Student card container */}
                <section className="list-cards--container">
                    <Average students={filter} />
                    {
                        filter.map((student) => {
                           return <StudentCard 
                           name={student.Name} 
                           id={student.ID} 
                           student={student}
                           setStudentData={setStudentData}
                           setOpenModal={setOpenModal}
                           key={`${student.ID + 1}`}
                             />
                        })
                    }
                </section>
            </section>
            <Modal open={modal}>
                <StudentDetail
                    state={modal}
                    setState={setOpenModal}
                    student={studentData}
                    >
                </StudentDetail>
            </Modal>
        </section>
    );
};

export { StudentsList };