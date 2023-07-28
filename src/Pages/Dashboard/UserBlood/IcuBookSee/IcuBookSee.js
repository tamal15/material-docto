import React, { useEffect, useState } from 'react';
// import Header from '../../Home/Header/Header';
// import Footer from '../../Shared/Footer/Footer';
// import CartBlood from './CartBlood';
import Header from '../../../Home/Header/Header';
import CartIcu from './CartIcu';
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
// import CartSyllbus from './CartSyllbus';

// import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'

const IcuBookSee = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/geticuBook')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)



    // const managePost = books?.filter(models => models?.status === 'approved' || models.role==='admin');
    // console.log(books)
    // console.log(managePost)



    return (
        <div style={{background:""}}>
            {/* <Header></Header> */}

<div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question text-bold text-black" style={{fontWeight:"700"}}>ICU <span style={{color:"#46AADC"}}>Booking</span></h1></div>
            {
                books.length === 0 ?
                    <div className=" justify-content-center w-100 d-flex">
                        {/* <img src={spinner} alt="" /> */}
                    </div>
                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {books?.map((book) => (

                            <CartIcu
                                key={book.id}
                                data={book}>

                            </CartIcu>

                        ))}
                    </div>
            }

        </div>
        {/* <Footer></Footer> */}

        </div>
      
    );
};

export default IcuBookSee;