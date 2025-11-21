import classes from'./App.css';
import Image from "./components/Image";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Payment from "./components/Payment";
import RegistrationForm from "./components/RegistrationForm";
import Documents from "./components/Document";
import EnquiryForm from "./components/EnquiryForm";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
    const [image ,setImage] = useState(true);
    useEffect(()=>{
        setTimeout(function(){
            setImage(false);},1000);
    },[])

    return (
        <>
            <Header/>
            {image && <div className="logo11">
                <Image/>
            </div>}
            {!image &&
                <BrowserRouter >
                    <Routes className={classes.navTra}>
                        <Route path="/" element={<Navigation/>}/>
                        <Route path="/registrationForm" element={<RegistrationForm/>}/>
                        <Route path="/paymentForm" element={<Payment/>}/>
                        <Route path="/enquiryForm" element={<EnquiryForm/>}/>
                        <Route path="/Documents" element={<Documents/>}/>
                    </Routes>
                </BrowserRouter>
            }
            <Footer/>
            </>
    );
}

export default App;
