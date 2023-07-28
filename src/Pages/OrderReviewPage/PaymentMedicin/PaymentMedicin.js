import { Container, Grid, Toolbar } from '@mui/material';
import React from 'react';
import Cart from '../../../CardComponent/Cart';
import Header from '../../Home/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import PaymentFrom from './PaymentForm/PaymentForm';
// import Cart from '../Shared/Cart/Cart';
// import Cart from '../../Components/Cart'
// import Footer from '../../Shared/Footer/Footer';
// import Header from '../../Shared/Header/Header';
// import Footer from '../Shared/Footer/Footer';
// import NavigationBar from '../Shared/NavigationBar/NavigationBar';
// import PaymentFrom from './PaymentForm';


const PaymentMedicin = () => {
    return (
        <>
        <Header></Header>
            {/* <NavigationBar /> */}
            <Toolbar/>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={5} md={8} >
                        <PaymentFrom />
                    </Grid>

                    <Grid item xs={4} sm={3} md={4} >
                        <Cart>

                        </Cart>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default PaymentMedicin;