import React from "react";
import classes from "./styles/navigation.module.css"
import {useNavigate} from "react-router-dom";
import HomScrenImg from "./images/HomScrenImg.png";
import BanrImg2 from "./images/BanrImg2.png";

const Navigation = () => {

    const navigate = useNavigate();

    const goToEnquiryForm = () => {
        navigate("/enquiryForm");
    };

    const goToPaymentForm = () => {
        navigate("/paymentForm");
    };

    const goToRegistrationForm = () => {
        navigate("/registrationForm");
    };

    const goToDocumentUpload = () => {
        navigate("/Documents");
    };


    return (
        <div className={classes.homPage}>
            <div className={classes.homBanner}>
                <div className={classes.HBsub1}>
                    <img src={HomScrenImg} className={classes.banrImg} alt="homBanner"/>
                </div>
                <div className={classes.HBsub2}>
                    <span className={classes.LTCWTxt}>LEARN TO CODE WITH</span>
                    <img src={BanrImg2} className={classes.banrImg2} alt="homBanner"/>
                </div>
            </div>
            <div>
                <div className={classes.navBtnsGrp}>
                        <div className={classes.navBtn1} onClick={() => goToEnquiryForm()}>
                            <button className={classes.tabButn} onClick={() => goToEnquiryForm()}>ENQUIRY</button>
                        </div>
                        <div className={classes.navBtn2} onClick={() => goToRegistrationForm()}>
                            <button className={classes.tabButn} onClick={() => goToEnquiryForm()}>REGISTRATION</button>
                        </div>
                        <div className={classes.navBtn4} onClick={() => goToDocumentUpload()}>
                            <button className={classes.tabButn} onClick={() => goToEnquiryForm()}>DOCUMENT</button>
                        </div>
                </div>
                <div className={classes.navPayBtn} onClick={() => goToPaymentForm()}>
                    <button className={classes.tabPayBtn} onClick={() => goToEnquiryForm()}>PAYMENT</button>
                    *for official use only
                </div>
            </div>
        </div>
    );
}

export default Navigation;