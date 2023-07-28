import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const DoctorUpdateVideo = () => {
    const [order,setOrder]=useState([])
    const { register, handleSubmit } = useForm();
    const [orderId,setOrderId]=useState('')


    const [statu, setStatu] = useState('')
    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        console.log(statusData)
        setStatu(statusData)
    }
    // const handleSelectTime = (e) => {
    //     const statusData = (e.target.value).toLowerCase()
    //     console.log(statusData)
    //     setStatu(statusData)
    // }

    useEffect(()=>{
        fetch('http://localhost:5000/applycall')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[])

    const handleUpdate = (id) => {
      fetch(`http://localhost:5000/buyerStatusUpdatess/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ statu}),
      })
          .then((res) => res.json())
          .then((result) => console.log(result));
          Swal.fire(
            'Success !',
            
        )
  }
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
      };

      const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
            fetch(`https://krishi.onrender.com/deleteManage/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete');
                    const remaining=order.filter(product=>product._id !==id)
                    setOrder(remaining)
                }
            })

        }

    }
    return (
        <div className="container"> 
             <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            {/* <th>Image Link</th> */}
            <th>Code</th>
            <th>Email</th>
            <th>Disease</th>
            <th>Delete</th>
          </tr>
        </thead>
        {order?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.phone}</td>
              {/* <td>{pd?.img}</td> */}

              <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={pd?.code}>{pd?.code}</option>
                                      
                    <option defaultValue="code: 4Bda, time: 9PM">code: 4Bda, time: 9PM</option>
                    <option defaultValue="code: 9Bda, time: 6PM">code: 9Bda, time: 6PM</option>
                    <option defaultValue="code: 3Bda, time: 3PM">code: 3Bda, time: 3PM</option>
                    <option defaultValue="code: 2Bda, time: 11PM">code: 2Bda, time: 11PM</option>
                    <option defaultValue="code: 1Bda, time: 9PM">code: 1Bda, time: 9PM</option>
                    <option defaultValue="code: 0Bda, time: 10PM">code: 0Bda, time: 10PM</option>
                    <option defaultValue="code: 40da, time: 9PM">code: 40da, time: 9PM</option>
                    
                                    </select>
                                </div>
                                <button className="btn-style" onClick={() => handleUpdate(pd._id)}>update</button>
                            </td>
                            {/* <td>
                                <button className="btn-style" onClick={() => handleUpdate(pd._id)}>update</button>
                            </td> */}



           
<td>{pd.usersEmail}</td>
           

              <td>{pd.Disease}</td>
    {/* border:2px solid #032831 !important; */}
              <button style={{background:"#032831",color:"white",padding:"12px 18px", fontSize:"20px",borderRadius:"6px"}} className=" p-2 mt-3"  onClick={()=>handleDelete(pd?._id)}>Delete</button>
           
            </tr>
          </tbody>
        ))}
      </Table>
            
        </div>
    );
};

export default DoctorUpdateVideo;