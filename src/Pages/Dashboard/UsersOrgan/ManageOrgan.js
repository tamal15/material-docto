import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';

import ManageOrganTable from './ManageOrganTable';
// import useFirebase from '../../../hooks/useFirebase';

const ManageOrgan = () => {

    

    const [questions, setQuestions] = useState([])
    const { user } = useAuth()
    console.log(questions)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/addOargans`)
            .then((res) => res.json())
            .then((data) => setQuestions(data.allQuestions));
            // console.log(data)
    }, [user?.email]);
    // console.log(data)



    // delete 

    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/deleteQuestion/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete');
                    const remaining=questions.filter(product=>product._id !==id)
                    setQuestions(remaining)
                    console.log(data)
                }
            })

        }

    }

// let value=question.drivelink;

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/QuestionStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }


    const managePost = questions?.filter(question => question?.status === 'Pending');
     console.log(managePost)
    return (
        < div className="container all-question-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2 text-black">Total Blood <span style={{ color: "#1289A7" }}>{questions.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className=" text-white mb-3 p-2 mb-3" style={{ question: "1px solid red", background:"#182533"}}>

                        {/* <th >Number</th> */}
                        <th >Name</th>
                        <th >Email</th>
                        <th >Organ</th>

                        <th >Phone</th>
                        <th >Status</th>
                        <th >Update</th>
                        <th >delete</th>
                       
                    </tr>
                </thead>
                {managePost?.map((question, index) => (
                    <tbody key={question._id}>
                      <ManageOrganTable
                       deletes={handleDelete}
                        data={question}></ManageOrganTable>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default ManageOrgan;