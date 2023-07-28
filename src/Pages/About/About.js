import React from 'react';
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
import './About.css'
import { Container, Grid, Typography } from "@mui/material";
import Header from '../Home/Header/Header';
import Footer from '../Shared/Footer/Footer';
const About = () => {
    return (
      <div>
        <Header></Header>
        <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#3B4757" }}
            variant="body1"
            gutterBottom
          >
            Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine.
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
            variant="h4"
            gutterBottom
            component="div"
          >
          A good doctor is also one who is attentive, analytical,  {" "}
            <span style={{ color: "#46AADC" }}>decisive, energetic, ethical, friendly</span>
          </Typography>
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >


What is the doctor role?
The primary duty of all doctors is for the care and safety of patients. Whatever their role, doctors must do the following. Engage with maintain and improve the safety and quality of patient care. Contribute to discussions and decisions about improving
          </Typography>


          <br />
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >
          
Write in the third person, as if someone else was talking about you. Keep it brief. Write in short paragraphs
          </Typography>
        </Grid>
        <Grid
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <img height="370px" width="450px" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        </Grid>
      </Grid>
    </Container>
        <Footer></Footer>
      </div>
    );
};

export default About;