import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Paper,
    InputAdornment,
    Rating,
    TextField,
    Typography,
    Stack
  } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
//   import { Col, Row, Container,Form } from 'react-bootstrap';
  import { useParams } from "react-router";
  
import { useForm } from "react-hook-form";
// import { NavLink } from 'react-router-dom';
 
 
  import BorderColorIcon from "@mui/icons-material/BorderColor";
  import PublishIcon from "@mui/icons-material/Publish";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Home/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { CartContext } from "../../../Contextcart/CartContext";

  
 
  
  
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const ShowView = () => {
    const [description, setDescription] = useState("");
    const [reviews, setReviews] = useState([]);
    // const { user } = useAuth();
    const [book, setBook] = useState([]);
    // const [cart, setCart] = useContext(CartContext);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(-1);
    const { id } = useParams();
    const [cart, setCart] = useContext(CartContext);
    const [number, setNumber] = useState(1);
    const [isFetched, setIsFetched] = useState(0);
  
    useEffect(() => {
      fetch(`http://localhost:5000/branch/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setBook(data.services)
            console.log(data.services)
        });
    }, [id]);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleAddToCart = (product) => {

        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product]

        }
        localStorage.setItem("productCart", JSON.stringify(newCart));
        setCart(() => newCart);
        alert('Add to Cart Successfully');
    };
   
    // const handleAddToCart = (book) => {
    //   const exists = cart.find((pd) => pd._id === book._id);
    //   let newCart = [];
    //   if (exists) {
    //     const rest = cart.filter((pd) => pd._id !== book._id);
    //     exists.quantity = exists.quantity + 1;
    //     newCart = [...rest, book];
    //   } else {
    //     book.quantity = 1;
    //     newCart = [...cart, book];
    //   }
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    //   setCart(() => newCart);
    //   alert("success", "Success", "Add to Cart Successfully");
    // };


    // user buy the shisu and police verify 
    const { user } = useAuth()
    // const {admin}=useAuth()
    // const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName

        data.email = user.email
        data.userName=user.displayName
        data.status="pending"
     

        fetch("https://cryptic-lowlands-50640.herokuapp.com/userCollected", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                    alert('added successfully');
                    reset()
                }
                
            });
    };


    const iconStyle = { display: "flex", alignItems: "center" };
  
    const fetchReviews = () => {
      fetch(`/reviews`)
        .then((res) => res.json())
        .then((data) => {
          const allReviews = data?.data.data
            .filter((review) => review.review_type === "book")
            .filter((review) => review.book === id);
  
          const reviewsChunk = allReviews.slice(0, number * 2);
          setIsFetched(Math.ceil(allReviews.length / 2) === number);
          setReviews(reviewsChunk);
        });
    };
    useEffect(() => {
      fetchReviews();
    }, [number]);
  
   
    return (
      <>
        <Header></Header>
        <Container>
       
       <Grid
         container
         spacing={2}
         sx={{ mt: 6 }}
         columns={{ xs: 4, sm: 8, md: 12 }}
       >
         {book?.map((single) => (
           <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={3}>
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
                  <div className='photo'>
                   <div className='photoShops'>
                     <img height="230" width="250" style={{borderRadius:"15px"}} src={single?.img}></img>
                  
                   </div>
                  </div>
                  
                  
                 </Grid>

                 <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                   <Box style={{textAlign:"left"}}>
                     <h5 style={{fontWeight:"700"}}>DriverName : {single?.driver}</h5>
                     {/* <h5 style={{fontWeight:"700"}}>Name : {single?.branchid}</h5> */}

                    

                     {/* <ThumbUpIcon></ThumbUpIcon> */}
                      {/* <br></br> */}
                      {/* <h4>{single?.length}</h4> */}
                     <Typography variant="body">
                       <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5>
                       <h5 style={{ fontWeight: 700 }}> Division : {single?.division}</h5>
                       <h5 style={{ fontWeight: 700 }}> Branch : {single?.branch}</h5>
                       <h5 style={{ fontWeight: 700 }}> Contact : {single?.contact}</h5>
                       
                     </Typography>
                   
                     <Rating
                       name="half-rating-read"
                       style={{color:"#D0425C"}}
                       defaultValue={single?.rating}
                       precision={0.5}
                       readOnly
                     />

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
               <Box sx={{ display: 'flex', justifyContent: '' }}>
                 {/* <NavLink
                   to={`/payment`}
                   style={{ textDecoration: "none",textAlign:"left" }}
                 >
                   <Button
                    className='btn-style download-btn '
                    style={{textAlign:"left"}}
                   size="small">
                     Check
                   </Button>
                 </NavLink> */}
                 {/* <NavLink
                  //  to={`/singlepageDetails/${single.branchid}`}
                   className="details-show"
                   style={{ textDecoration: "none", marginRight: "4px" }}
                 >
                   <Button
                    className='btn-style download-btn details-show'
                    style={{padding:"5px"}}
                   size="small">
                     Details
                   </Button>
                 </NavLink> */}
                 <Button
                 className='btn-style download-btn'
                   size="small"
                   // sx={ButtonStyle}
                   style={{textAlign:"left"}}
                   onClick={() => handleAddToCart(single)}
                 >
                   Add cart
                 </Button>
               </Box>
             </Paper>
           </Grid>
         ))}
       </Grid>
       <Stack spacing={2}>

         
       </Stack>

       <a href='/manyProducts' className='viewmore mt-5'>View more</a>
     </Container>
  
        <Footer />
      </>
    );
  };
  
  export default ShowView;