import React from "react";
import logoNGPIT from "../components/images/logoNGPIT.png";
import classes from './styles/Image.module.css';


function Image() {
    // const [next,setNext] = useState(true);
    // function onClickHandler() {
    //     setNext(!next);
    // }

    return(
        <>
            <img src={logoNGPIT} className={classes.img} alt="logo" />
            {/*{!next && <Navigation/>}*/}
            {/*{next && <div>*/}
            {/*    /!*<button onClick={onClickHandler}>Next-></button>*!/*/}
            {/*</div>}*/}
        </>
    );
}

export default Image;