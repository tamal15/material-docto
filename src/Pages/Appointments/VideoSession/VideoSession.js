import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './VideoSession.css'
import Header from '../../Home/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const VideoSession = () => {

    const [roomcode,setRoomcode]=useState("");
    const history=useHistory();

    const handleFormsubmit=(e)=>{
        e.preventDefault();
        history.replace(`/room/${roomcode}`)
    }
    return (
        <div className='videosession' style={{background:""}}>
      <Header></Header>


   <div className="container">
   <div className='row'>
        <div className="col-md-7 mt-5">
        <img height="350" width="450" src="https://i.ibb.co/fxXGFNF/12.png"/>
        </div>
        <div className="col-md-5 new-video">
        <form
            onSubmit={handleFormsubmit}
             className='sessions'>
                <div className='mt-5'>
                    <label className='rooms mb-4'>Enter room code</label>
                    <input
                    value={roomcode}
                    onChange={(e)=> setRoomcode(e.target.value)}
                     type="text" required placeholder="Enter room code"/>
                </div>

                <button className='mt-3 btn-submit' type='submit'>Enter Room</button>
            </form>
        </div>
      </div>
   </div>
    
          
            <Footer></Footer>
        </div>
    );
};

export default VideoSession;