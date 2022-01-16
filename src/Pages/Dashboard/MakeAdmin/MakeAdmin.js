import { Button, TextField,Alert } from '@mui/material';
import React, { useState } from 'react';
// import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth'

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success, setSuccess]=useState(false)
    const {token}=useAuth()
    const handleForm= e =>{
       const user={email}

       fetch('https://enigmatic-citadel-27942.herokuapp.com/register/admin',{
           method:'PUT',
           headers:{
               'authorization':`Bearer ${token}`,
               'content-type':'application/json'
           },
           body:JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.modifiedCount){
            console.log(data)
            setSuccess(true)
            // swal("Good job!", "Admin add successfully !", "success");
           }
       })
        e.preventDefault()
    }

    const handleonBlur=e=>{
        const value=(e.target.value)
        console.log(value)
        setEmail(value)
    }
    return (
        <div>
            <h1>make admin user</h1>
         
         <form onSubmit={handleForm}>
         <TextField  
         label="email" 
         type="email"
         sx={{width:'50%'}}
         onBlur={handleonBlur}
         variant="standard" />
         <Button type="submit" variant="contained">Add Admin</Button>
         </form>
         {
             success && 
             <Alert severity="success">Made admin Successfully!!!</Alert>
         }

        </div>
    );
};

export default MakeAdmin;