
import React,{useState} from "react";
import document from "./styles/Document.module.css";
import illustration from "./images/illustration.png";

function Documents() {

    const [formInfo, setFormInfo] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:""
    })

    const [errors,setErrors] = useState({})

    const validation = (formInfo) => {

        let errors={};

        if(!formInfo.firstName || !formInfo.lastName){
            errors.firstName="Full Name is required**"
        }if(!formInfo.email) {
            errors.email = "Email address is required*"
        } else if(!/\S+@\S+\.\S+/.test(formInfo.email)){
            errors.email="Email is invalid"
        }if(!formInfo.phone){
            errors.phone="Mobile number is required*"
        } else if(formInfo.phone.length !== 10){
            errors.phone="Phone number is invalid"
        }

        return errors;
    };

    const onChangeHandler = (fom) => {
        setFormInfo(() => ({
            ...formInfo,
            [fom.target.name]: fom.target.value
        }))
    }

    const submitHandler = (fom) => {
        fom.preventDefault();
        console.log(formInfo);
        setErrors(validation(formInfo));
        // alert("Successfully Submitted!!");
    }

    return (
        <div className={document.page}>
            <div className={document.columnOne}>
                <h1 className={document.boxOneTitle}>Boost your Coding Performance with us.</h1>
                <p className={document.boxOneDesc}>
                    Get the best I.T Courses<br/>
                    from Nagpur I.T Training<br/>
                    Institute to kickstart<br/>
                    your Career.
                </p>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <img src={illustration} className={document.boxOneImage} alt="logo4"/>
                </div>
            </div>

            <div className={document.columnTwo}>

                <div className={document.Card}>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <div className={document.header}>
                            <span className={document.headerText}>DOCUMENT FORM</span>
                        </div>
                    </div>
                    <form
                        onSubmit={submitHandler}>
                        <div className={document.form}>
                            <label className={document.docLabel}>Name </label> <br/>
                            <input type='text' name="firstName" className={document.twoInputs} required
                                   placeholder='First Name' value={formInfo.firstName} onChange={(fom) => {
                                onChangeHandler(fom)}} autoFocus />
                            <input type='text' name="lastName" className={document.twoInputs} required
                                   placeholder='Last Name' value={formInfo.lastName} onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <br/>
                            <span className={document.errorText}>{errors.firstName}</span>
                        </div>

                        <div className={document.form}>
                            <label className={document.docLabel}>Contact Details </label> <br/>
                            <input type='tel' name="phone" id="phone" className={document.twoInputs} required
                                   placeholder='Phone No.' value={formInfo.phone} onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <input type='text' name="email" className={document.twoInputs} required
                                   placeholder='Email Address' value={formInfo.email} onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <br/>
                            <span className={document.errorText}>{errors.phone}</span><br/>
                            <span className={document.errorText}>{errors.email}</span>
                        </div>

                        <div className={document.form}>
                            <label className={document.docLabel}> Class 10th Marksheet </label><br/>
                            <input type="file" id="myFile" name="filename"/>
                            <br/>
                        </div>
                        <div className={document.form}>
                            <label className={document.docLabel}> Class 12th Marksheet </label><br/>
                            <input type="file" id="myFile" name="filename"/>
                            <br/>
                        </div>
                        <div className={document.form}>
                            <label className={document.docLabel}> Passport Size Photo </label><br/>
                            <input type="file" id="myFile" name="filename"/>
                            <br/>
                        </div>
                        <div className={document.form}>
                            <label className={document.docLabel}> Aadhaar Card </label><br/>
                            <input type="file" id="myFile" name="filename"/>
                            <br/>
                        </div>
                        <div className={document.form}>
                            <label className={document.docLabel}> PAN Card </label><br/>
                            <input type="file" id="myFile" name="filename"/>
                            <br/>
                        </div>
                        <div className={document.form}>
                            <label className={document.docLabel}> Passport </label><br/>
                            <input type="file" id="myFile" name="filename"/>
                            <br/>
                        </div>

                        <div className='btns'>
                            <button type='Submit' className={document.submitButton} onClick={submitHandler} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Documents;
