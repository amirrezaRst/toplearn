import React, { useState } from 'react';
import SingleTeacherCard from './SingleTeacherCard';

import TeachersHeader from "./TeachersHeader";

const Teachers = () => {
    const [teachers, setTeachers] = useState();

    const fetchTeachers = async () => {
        
    }

    return (
        <main className='teachers-page-content container'>

            <TeachersHeader />

            <div className="row" style={{ padding: "30px 0" }}>

                <SingleTeacherCard />

            </div>

        </main>
    );
}

export default Teachers;