import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Header from '../../../Home/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
// import Footer from '../../../Shared/Footer/Footer';
const RoomPage = () => {

    const {roomId}=useParams();


    const myMeeting=async (element) =>{
        const appID = 652743368 ;
        const serverSecret = "2766dc184603888f1d03771fb6269aa8";
        const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "tamal"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
        })
    }
    return (
       <div style={{background:"honeydew"}}>
        <Header></Header>
         <h3 className='mt-5 mb-5' style={{color:"black", fontSize:"25px"}}>This is the video call Session</h3>
        <div>
            <div ref={myMeeting} />
        </div>

        <Footer></Footer>
       </div>
    );
};

export default RoomPage;