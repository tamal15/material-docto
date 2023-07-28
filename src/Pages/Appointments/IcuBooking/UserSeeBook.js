import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './VerifyData.css'
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Pagination,
    Paper,
    Rating,
    Stack,
    Typography,
  } from "@mui/material";
// import { CartContext } from '../../../Context/CartContext';
// import useAuth from '../../../Hooks/useAuth';
import { BorderVertical } from '@mui/icons-material';
// import useAuth from '../../../Hook/useAuth';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'
// import useAuth from '../../../../../Hooks/useAuth';
// import useAuth from '../../../Hooks/useAuth';
const UserSeeBook = () => {
    const [work, setWork] = useState([])

    // const [cart, setCart] = useContext(CartContext);
    const {user}=useAuth();
    const { register, handleSubmit } = useForm();
    const userData = { email: user.email, name: user.displayName };

  

    //     useEffect(()=>{
    //         Aos.init({duration:2000});
    //   },[])

    const fetchData = () => {
      fetch(`http://localhost:5000/applyicu/${user?.email}`)
        .then(res => res.json())
        // .then(data => setWork(data))
        .then(data => {
        //   const sliceData = data.slice(0, 8);
  
          setWork(data)
  
        })
    }
    useEffect(() => {
      fetchData()
    }, [user?.email])

    const [status, setStatus] = useState('')
    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }
    // update status 
    const handleUpdate = (id) => {
        fetch(`https://cryptic-lowlands-50640.herokuapp.com/updateBook/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status}),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }
    
      



    const handleLike = (id) => {
      fetch(`https://sarong-site.onrender.com/like/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      }).then(res => {
        console.log(res)
        if (res.status === 200) {
          fetchData()
          alert("Liked");
        } else if (res.status === 400) {
          alert("Already Liked");
        } else {
          alert("server error");
        }
      }).catch(err => console.log(err));
  
  
    }
    
  

  //   const like=[
  //     {type:ObjectId,ref:"user"}
  //  ]
    return (
        <Container>
       
        <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {work?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={4}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 50%)"
                }}
              >
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                  <Grid item xs={12} sm={12} md={12}>
                   
                   
                   
                  </Grid>

                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                      <h5 style={{fontWeight:"700"}}>patientName : {single?.patientName}</h5>

                     

                      {/* <ThumbUpIcon></ThumbUpIcon> */}
                       {/* <br></br> */}
                       {/* <h4>{single?.length}</h4> */}
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> userEmail : {single?.email}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> HospitalName : {single?.HospitalName}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> DriverName : {single?.DriverName}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> AmbulanceNumber : {single?.AmbulanceNumber}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> Address : {single?.Address}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> DriverName : {single?.DriverName}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> status : {single?.status}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> date : {single?.date}</h5>
                        
                      </Typography>
                     
                     
                    
                     

                   
                     

                      <br></br>

                       {/* like handler ================== */}
                      {/* <Box style={{display:"flex"}}>
                      <Typography  style={{color:"#D0425C",fontWeight:"700"}}>
                       <ThumbUpIcon className='likedesign' onClick={() => handleLike(single?._id)}></ThumbUpIcon>{single?.likes?.length}
                       </Typography>
                     
                      <Typography> <ThumbDownIcon  className='ms-3 likedesign' onClick={() => handleUnLike(single?._id)}></ThumbDownIcon></Typography>
                      </Box> */}
                   


                    {/* <Typography>LikeCount: {single?.likes?.length}</Typography> */}
                    {/* Unlike handler ================== */}
                    </Box>
                  </Grid>
                </Grid>
              
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2}>

          
        </Stack>

        {/* <a href='/buyerAllproduct' className='viewmore mt-5'>View more</a> */}

        {/* <Box>
        {
  work.map(booking=> <OrderReviewPage
    key={booking.id}
    booking={booking}>

  </OrderReviewPage>)
}
        </Box> */}
      </Container>
    


    );
};

export default UserSeeBook;