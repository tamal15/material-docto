import React from 'react';
import './Footer.css';
import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css'
const Footer = () => {
    return (
    //  <div className='footers'>
            <Box className="footer-Container footers" sx={{ flexGrow: 1, textAlign: 'center', py: 6 }}>
            <Container>
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid sx={{ mt: 10, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            Emergency Dental Care
                        </Link> <br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            Check Up
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Treatment of Personal Diseases'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Tooth Extraction'}
                        </Link>
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link>
                    </Grid>
                    <Grid sx={{ mt: 5, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Typography variant="h5" sx={{ color: 'rgb(0, 255, 195)',fontWeight:500 }}>
                            Services
                        </Typography>

                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Emergenc Dental care'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Treatment of Personal Diseases'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Tooth Extraction'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                    </Grid>
                    <Grid sx={{ mt: 5, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Typography variant="h5" sx={{ color: 'rgb(0, 255, 195)', fontWeight:500 }}>
                            Oral Health
                        </Typography>
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Emergency Dental Cate'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Tooth Extraction'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link>
                    </Grid>
                    <Grid sx={{ mt: 5, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Typography variant="h5" sx={{ color: 'rgb(0, 255, 195)',fontWeight:500 }}>
                            Our Address
                        </Typography>
                        <Typography>
                            Dhaka Bangladesh
                        </Typography>
                        <Typography>
                            
                        </Typography>
                        <Box sx={{ my: 2 }}>
                            <FacebookOutlinedIcon
                                sx={{
                                    p: 1, border: '2px solid #00FFC3',
                                    borderRadius: 50,
                                    color: '#fff',
                                    backgroundColor: '#12D0D8',

                                }}>

                            </FacebookOutlinedIcon>
                            <GoogleIcon
                                sx={{
                                    p: 1, border: '2px solid #00FFC3',
                                    borderRadius: 50,
                                    color: '#12D0D8',
                                    mx: 5
                                }}>


                            </GoogleIcon>
                            <TwitterIcon
                                sx={{
                                    p: 1, border: '2px solid #00FFC3',
                                    borderRadius: 50,
                                    color: '#12D0D8'
                                }}>


                            </TwitterIcon>
                        </Box>
                        <Box>
                            <Typography>
                                Call Now
                            </Typography>
                           <Box>
                           <button className="buttons">+8801746445559</button>
                           </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Typography sx={{ fontSize: 15, py: 10 }} variant="h6">
                        MD.Tamal Sarkar @ 2022
                    </Typography>
                </Box>
            </Container>
        </Box>
    //  </div>
    );
};

export default Footer;