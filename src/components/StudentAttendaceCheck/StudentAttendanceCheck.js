import React from 'react';

const StudentAttendanceCheck = (props) => {
        const {stuId,stulist}=props;
        console.log(stulist)
        const {student_ID}=stulist;
    
    return (
        <div>
            {stuId==student_ID && <div className='text-cyan-700'><i class="fa-solid fa-user-tie mr-2"></i>Present</div>}
        </div>
    );
};

export default StudentAttendanceCheck;