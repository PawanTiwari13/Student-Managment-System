import classes from "./styles/RegistrationForm.module.css";
import React, {useEffect, useState} from "react";
import illustration from "./images/illustration.png"
import Qr from "./images/Qr.jpg";
import AddressForm from "./AddressForm";
import {Link, useNavigate} from "react-router-dom";

function RegistrationForm() {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const [dropdown1Value, setDropdown1Value] = useState('');
    const [dropdown2Value, setDropdown2Value] = useState('');
    const [dropdown3Value, setDropdown3Value] = useState('');

    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');

    const [termsAgreed1, setTermsAgreed1] = useState(false);
    const [termsAgreed2, setTermsAgreed2] = useState(false);
    const [showError, setShowError] = useState(false);

    const [formInfo, setFormInfo] = useState({
        firstName: '', lastName: '',
        addressC1: '', addressC2: '',
        addressP1: '', addressP2: '',
        cityC: '', stateC: '', regionC: '',
        cityP: '', stateP: '', regionP: '',
        lastEducation: '',
        passingYear: '', cgpa: '',
        email: '', phone: '',
        age: '', gender: '',
        fees: '',
        referBy: '',
        checkTerm: '',
        whatsAppNo: '', phoneNumber: '',
        dob: '',
        registrationDate: ''
    })

    useEffect(()=>{
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },[])

    const validateForm = () => {
        if (!termsAgreed1 || !termsAgreed2) {
            setShowError(true);
            return false;
        }
        return true;
    };

    const onChangeHandler = (fom) => {
        setFormInfo(() => ({
            ...formInfo,
            [fom.target.name]: fom.target.value
        }))
    }

    const handleValidation = () => {
        let hasError = false;

        if (!dropdown1Value) {
            setError1('Please select an option for Latest Education.');
            hasError = true;
        } else {
            setError1('');
        }

        if (!dropdown2Value) {
            setError2('Please select an option for Current Status.');
            hasError = true;
        } else {
            setError2('');
        }

        if (!dropdown3Value) {
            setError3('Please select an option for Referred by whom.');
            hasError = true;
        } else {
            setError3('');
        }

        return hasError;
    };

    const submitHandler = (fom) => {
        fom.preventDefault();
        console.log(formInfo);
        alert("Submitted Successfully");
        // const isValid = validateForm(); //checkbox validation
        //
        // const hasError = handleValidation(); //dropdown validation
        //
        // setErrors(validation(formInfo)); //Input Field Validation
        // navigate("/paymentForm");
    }

    const validation = (formInfo) => {

        let errors = {};

        if (!formInfo.firstName || !formInfo.lastName) {
            errors.firstName = "First Name and Last Name is required*"
        }if(!formInfo.email){
            errors.email = "Email address is required*"
        } else if(!/\S+@\S+\.\S+/.test(formInfo.email)){
            errors.email="Email is invalid"
        }if(!formInfo.phone){
            errors.phone="Mobile number is required*"
        } else if(formInfo.phone.length !== 10){
            errors.phone="Phone number is invalid"
        }if(!formInfo.whatsAppNo){
            errors.whatsNum="Whatsapp number is required*"
        } else if(formInfo.whatsNum.length !== 10){
            errors.whatsNum="Whatsapp number is invalid"
        }if (!formInfo.dob) {
            errors.dob = "Date of Birth is required*"
        }if (!formInfo.registrationDate) {
            errors.registrationDate = "Reg Date is required*"
        }
        //if (!formInfo.addressC1) {
        //     errors.addressC1 = "Street Name is required*"
        // }if (!formInfo.age) {
        //     errors.age = "Street Name is required*"
        // }if (!formInfo.cityC || !formInfo.pinCodeC) {
        //     errors.cityC = "City and Zip Code is required*"
        // }if (!formInfo.regionC) {
        //     errors.regionC = "Region is required*"
        // }if (!formInfo.stateC) {
        //     errors.stateC = "State is required*"
        // }if (!formInfo.countryC) {
        //     errors.countryC = "Country is required*"
        // }if (!formInfo.addressP1) {
        //     errors.addressP1 = "Street Name is required*"
        // }if (!formInfo.cityP) {
        //     errors.cityP = "City is required*"
        // }if (!formInfo.regionP) {
        //     errors.regionP = "Region is required*"
        // }if (!formInfo.pinCodeP) {
        //     errors.pinCodeP = "Zip Code is required*"
        // }if (!formInfo.stateP) {
        //     errors.stateP = "State is required*"
        // }if (!formInfo.countryP) {
        //     errors.countryP = "Country is required*"
        //}
        if (!formInfo.passingYear) {
            errors.passingYear = "Passing year is required*"
        }if (!formInfo.cgpa) {
            errors.cgpa = "CGPA is required*"
        }

        return errors;
    };


    return (
        <div className={classes.page}>

            <div className={classes.boxOne}>
                <h1 className={classes.boxOneTitle}>Boost your Coding Performance with us.</h1>
                <p className={classes.boxOneDesc}>
                    Get the best I.T Courses<br></br>
                    from Nagpur I.T Training<br></br>
                    Institute to kickstart<br></br>
                    your Career.
                </p>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <img src={illustration} className={classes.boxOneImage} alt="logo4"/>
                </div>
            </div>

            <div className={classes.columnTwo}>

                <div className={classes.Card}>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <div className={classes.header}>
                            <span className={classes.headerText}>REGISTRATION FORM</span>
                        </div>
                    </div>
                    <form
                        onSubmit={submitHandler}>

                        <div className={classes.fieldBox}>
                            <label>Name </label> <br></br>
                            <input type='text' value={formInfo.firstName} name="firstName" className={classes.twoInputs} required
                                   placeholder='First Name' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            <input type='text' value={formInfo.lastName} name="lastName" className={classes.twoInputs} required
                                   placeholder='Last Name' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            <br></br>
                            {errors.firstName && <div className={classes.errorText}>{errors.firstName}</div>}
                        </div>

                        <div className={classes.fieldBox}>
                            <label>Contact Details </label><br></br>
                            <input type='tel' name="phone" value={formInfo.phone} className={classes.twoInputs} required
                                   placeholder='phoneNumber' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            <input type='text' name="whatsAppNo" value={formInfo.whatsAppNo} className={classes.twoInputs} required
                                   placeholder='Whats App Number' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            {errors.phone && <div className={classes.errorText}>{errors.phone}</div>}
                            {errors.whatsAppNo && <div className={classes.errorText}>{errors.whatsAppNo}</div>}
                        </div>
                        <div className={classes.twoDates}>
                            <div className={classes.twoDates2}>
                                <label> D.O.B </label>
                                <input type='date' name="dob" value={formInfo.dob} className={classes.inputDates} required
                                       onChange={(fom) => {
                                           onChangeHandler(fom)}}/>
                                {errors.dob && <div className={classes.errorText}>{errors.dob}</div>}
                            </div>
                            <div className={classes.twoDates2}>
                                <label> Registration Date </label>
                                <input type='date' name="registrationDate" className={classes.inputDates} required
                                       onChange={(fom) => {
                                           onChangeHandler(fom)}}/>
                                {errors.registrationDate && <div className={classes.errorText}>{errors.registrationDate}</div>}

                            </div>
                        </div>

                        <div>
                            <AddressForm/>
                        </div>

                        <div className={classes.fieldBox}>
                            <label>Education details: </label> <br></br>
                            <select name="lastEducation" className={classes.cityPincode} required
                                    placeholder='Last Education' onChange={(fom) => {
                                onChangeHandler(fom) }}>
                                <option disabled selected>-Please Select-</option>
                                <option value="twelve">HSC</option>
                                <option value="BeBtech">BE/BTech</option>
                                <option value="bca">BCA</option>
                                <option value="Mca">MCA</option>
                                <option value="bsc">BSc</option>
                                <option value="mcs">MSC</option>
                                <option value="bcom">BCom</option>
                            </select>
                            <select name="currentStatus" className={classes.cityPincode} required
                                    placeholder='CurrentStatus' onChange={(fom) => {
                                onChangeHandler(fom)}}>
                                <option disabled selected>-Please Select-</option>
                                <option value="student">Student</option>
                                <option value="employed">Employed</option>
                                <option value="Unemployed">Unemployed</option>
                            </select>
                            <br/>
                            {error1 && <div className={classes.errorText}>{error1}</div>}
                            {error2 && <div className={classes.errorText}>{error2}</div>}
                            <input type='number' name="passingYear" value={formInfo.passingYear} className={classes.input} required
                                   placeholder='Passing year' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            {errors.passingYear && <div className={classes.errorText}>{errors.passingYear}</div>}
                            <input type='number' name="cgpa" value={formInfo.cgpa} className={classes.input} required
                                   placeholder='CGPA' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <br></br>
                        </div>

                        <div className={classes.fieldBox}>
                            <label>Referred By: </label><br></br>
                            <select id="dropdown3" value={dropdown3Value}
                                    name="referBy" className={classes.input}
                                    onChange={(e) => {
                                        setDropdown3Value(e.target.value);
                                        setError3('');
                                    }}
                            >
                                <option value=" Please select"></option>
                                <option value="Ashish">Ashish Sir</option>
                                <option value="Priyanka">Priyanka Ma'am</option>
                                <option value="Pooja">Pooja Ma'am</option>
                                <option value="Amit">Amit Sir</option>
                            </select>
                            {error3 && <div className={classes.errorText}>{error3}</div>}
                        </div>

                        <div className={classes.fieldBox}>
                            <label>Payment </label> <br></br>
                            <img src={Qr} className={classes.qrImage} alt="logo2"/>
                        </div>
                        <div className={classes.fieldBox}>
                            <h4>Please Read carefully and mark the check box.
                            </h4>
                            <input type="checkbox" value="term1" name="checkTerm1" onChange={(fom) => {
                                onChangeHandler(fom)
                            }} required/>
                            <span>I hereby declare that all the statements made in my
                                application and the attached application form are true,
                                complete and correct to the best of my knowledge and belief.
                                In the event of any information being found false or
                                incorrect at any stage, my application is liable to be
                                rejected and if already appointed, my course are liable to
                                be terminated without notice.
                            </span>
                        </div>
                        <div className={classes.fieldBox}>
                            <input type="checkbox"
                                   name="termsAgreed2" checked={termsAgreed2}
                                   onChange={() => {
                                       setTermsAgreed2(!termsAgreed2);
                                       setShowError(false);}}/>
                            <span>I agree to pay the course fee mentioned in the given form
                                above. I know that once fee is paid it is not refundable.
                            </span>
                        </div>
                        {showError && <p className={classes.errorText}>Please agree to both terms and conditions.</p>}
                        <div className='regBtns'>
                            <button type='Submit' className={classes.submitButton} onClick={submitHandler}>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
