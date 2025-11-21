import classes from "./styles/header.module.css";
import logoNGPIT from "../components/images/logoNGPIT.png";

function Header(){
    return(
        <div className={classes.header}>
            <img src={logoNGPIT} className={classes.logo} alt="logo2"/>
        </div>
    );
}

export default Header;