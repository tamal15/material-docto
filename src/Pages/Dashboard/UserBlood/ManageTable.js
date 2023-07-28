import React, { useState } from 'react';

const ManageTable = (props) => {
    
    const { name, phone, status, bloodGroup, _id ,index,email} = props.data

    

    const [statu, setStatu] = useState('')
    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatu(statusData)
    }



    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/bloodStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ statu}),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    return (
        <>
      
            {/* <tbody key={_id}> */}
                 <tr role="row" style={{ question: "2px solid gray" }} >
                            {/* <th scope="row">{index + 1}</th> */}
                            <td className='text-black'>{name}</td>
                            <td className='text-black'>{email}</td>
                            <td className='text-black'>{bloodGroup}</td>
                            <td className='text-black'>{phone}</td>
                            
                          

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={status}>{status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(_id)}>update</button>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => props.deletes(_id)}>delete</button>
                            </td>
                        </tr> 
            
                      
                      {/* </tbody> */}
             </>
       
    );
};

export default ManageTable;