import classes from "./styles/Footer.module.css";
import fbLogo from '../components/images/fblogo.png';
import twitterLogo from '../components/images/twitterLogo.png';
import googleLogo from '../components/images/googlelogo.png';
import instaLogo from '../components/images/instagramlogo.png';
import linkedInLogo from '../components/images/linkedInLogo.png';
import YouTubeLogo from '../components/images/youTubeLogo.png';
import call from "../components/images/phone-call-icon.png";
import mail from "./images/email-svgrepo-com.png";
import location from "./images/location.png";

function Footer() {
    const phoneNumber = '+91-79722-69828';
    const emailAddress = 'support@nagpurit.com';
    return (
        <>
            <footer className={classes.footerMainDivision}>
                <div className={classes.contactDivision}>
                    <h2>Contact Info</h2>

                    <div className={classes.callDivision}>
                        <div>
                            <img src={call} alt="callIcon" className={classes.callIcon}></img>
                        </div>
                        <div className={classes.callSubDivision}>
                            <span className={classes.callText}><b>Call Us</b></span>
                            <div>
                            <a href={`tel:${phoneNumber}`} className={classes.phoneNumber}>{phoneNumber}</a>
                        </div>
                        </div>
                    </div>

                    <div className={classes.mailDivision}>
                        <img alt="mail" src={mail} className={classes.mailIcon}></img>
                        <div className={classes.mailSubDivision}>
                            <span className={classes.mailText}><b>Mail</b></span>
                            <div>
                                <a href={`mailto:${emailAddress}`} className={classes.emailAddress}>{emailAddress}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.line}>
                    &nbsp;
                </div>

                <div className={classes.followDivision}>
                    <h2>Follow Us on</h2>
                    <div className={classes.socialDivision}>
                        <a href="https://www.nagpurit.com/" target="_blank" rel="noreferrer">
                            <img src={googleLogo} alt="GoogleLogo" className={classes.images}></img>
                        </a>
                        <a href="https://www.facebook.com/nagpurittraining" target="_blank" rel="noreferrer">
                            <img src={fbLogo} alt="FacebookLogo" className={classes.images}></img>
                        </a>
                        <a href="https://twitter.com/nagpurit?s=11&amp;t=6C2fteVlx1gB3oAAhyILZA" target="_blank"
                           rel="noreferrer">
                            <img src={twitterLogo} alt="TwitterLogo" className={classes.images}></img>
                        </a>
                        <a href="https://www.linkedin.com/company/nagpur-it-training-institute/" target="_blank"
                           rel="noreferrer">
                            <img src={linkedInLogo} alt="LinkdlinLogo" className={classes.images}></img>
                        </a>
                        <a href="https://instagram.com/nagpurittraining?igshid=YmMyMTA2M2Y=" target="_blank"
                           rel="noreferrer">
                            <img src={instaLogo} alt="InstagramLogo" className={classes.instagramIcon}></img>
                        </a>
                        <a href="https://www.youtube.com/@nagpurittraininginstitute3590" target="_blank"
                           rel="noreferrer">
                            <img src={YouTubeLogo} alt="YouTubeLogo" className={classes.youTubeIcon}></img>
                        </a>
                    </div>

                    <div className={classes.locationDivision}>
                        <div>
                            <img alt="location" src={location} className={classes.locationIcon}></img>
                        </div>
                        <div className={classes.locationSubDivision}>
                            <span className={classes.locationText}><b>&nbsp;Office Address</b></span>
                            <div className={classes.locationAddress}>
                                    1st floor, Plot No. 10/4,<br></br>
                                    STPI IT Park, Gayatri Nagar,<br></br>
                                    Nagpur
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;