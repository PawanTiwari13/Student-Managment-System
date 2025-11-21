import React, {useState} from "react";
import enquiry from "./styles/enquiry.module.css";
// import axios from "axios";
import illustration from "./images/illustration.png";
import MERN from "./images/MERN.png";
import adLabel from "./images/adlabel.png";

function EnquiryForm() {

    const [dropdown1Value, setDropdown1Value] = useState(''); //gender
    const [dropdown2Value, setDropdown2Value] = useState(''); //course Duration
    const [dropdown3Value, setDropdown3Value] = useState(''); //type of enquiry
    const [dropdown4Value, setDropdown4Value] = useState(''); //job assist
    const [dropdown5Value, setDropdown5Value] = useState(''); //current status
    const [dropdown6Value, setDropdown6Value] = useState(''); //marital

    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');
    const [error5, setError5] = useState('');
    const [error6, setError6] = useState('');


    const [formInfo, setFormInfo] = useState({
        firstName: '', lastName: '',
        address: '', address2: '',
        email: '', phone: '',
        whatsAppNo: '',
        EnquiryDate: '',
        age: '', gender: '',
        city: '', state: '',
        expectedPackage: '', currentStatus: '',
        maritalStatus: '', jobAssist: '',
        courseDuration: '', course: '',
        enquiryType: [], hear: [],
    })

    const [errors, setErrors] = useState({})

    const handleValidation = () => {
        let hasError = false;

        if (!dropdown1Value) {
            setError1('Please select Gender.');
            hasError = true;
        } else {
            setError1('');
        }
        if (!dropdown2Value) {
            setError2('Please select Course Duration.');
            hasError = true;
        } else {
            setError2('');
        }

        if (!dropdown3Value) {
            setError3('Please select Enquiry type.');
            hasError = true;
        } else {
            setError3('');
        }

        if (!dropdown4Value) {
            setError4('Please select did you need job assistance.');
            hasError = true;
        } else {
            setError4('');
        }

        if (!dropdown5Value) {
            setError5('Please select current status.');
            hasError = true;
        } else {
            setError5('');
        }

        if (!dropdown6Value) {
            setError6('Please select marital status.');
            hasError = true;
        } else {
            setError6('');
        }

        return hasError;
    };

    const validation = (formInfo) => {

        let errors = {};
        if (!formInfo.firstName || !formInfo.lastName) {
            errors.firstName = "First Name and Last Name is required*"
        }
        if (!formInfo.email) {
            errors.email = "Email address is required*"
        } else if (!/\S+@\S+\.\S+/.test(formInfo.email)) {
            errors.email = "Email is invalid"
        }
        if (!formInfo.phone) {
            errors.phone = "Mobile number is required*"
        } else if (formInfo.phone.length !== 10) {
            errors.phone = "Phone number is invalid"
        }
        if (!formInfo.whatsAppNo) {
            errors.whatsAppNo = "Whatsapp number is required*"
        } else if (formInfo.whatsAppNo.length !== 10) {
            errors.whatsAppNo = "Whatsapp number is invalid"
        }
        if (!formInfo.dob) {
            errors.dob = "Date of Birth is required*"
        }
        if (!formInfo.enquiryDate) {
            errors.enquiryDate = "Enquiry Date is required*"
        }
        if (!formInfo.address) {
            errors.address = "Street Name is required*"
        }
        if (!formInfo.age) {
            errors.age = "Age is required*"
        }
        if (!formInfo.city) {
            errors.city = "City is required*"
        }
        if (!formInfo.region) {
            errors.region = "Region is required*"
        }
        if (!formInfo.state) {
            errors.state = "State is required*"
        }
        if (!formInfo.country) {
            errors.country = "Country is required*"
        }
        if (!formInfo.address2) {
            errors.address2 = "Street Name is required*"
        }
        if (!formInfo.expectedPackage) {
            errors.expectedPackage = " required*"
        }
        if (!formInfo.lastEducation) {
            errors.lastEducation = "Last Education is required*"
        }
        if (!formInfo.passingYear) {
            errors.passingYear = "Passing year is required*"
        }
        if (!formInfo.cgpa) {
            errors.cgpa = "CGPA is required*"
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
        alert('Saved Successfully');
        // const hasError = handleValidation();


        setErrors(validation(formInfo));
        // axios.post('https://sheet.best/api/sheets/75c25836-fbef-4062-9000-9ba39b73ca1f', formInfo).then((response) => {
        //     console.log(response);
        //     setFormInfo("");
        // })
    }

    return (
        <div className={enquiry.page}>
            <div className={enquiry.columnOne}>
                <div className={enquiry.boxOne}>
                    <h1 className={enquiry.boxOneTitle}>Boost your Coding Performance with us.</h1>
                    <p className={enquiry.boxOneDesc}>
                        Get the best I.T Courses<br></br>
                        from Nagpur I.T Training<br></br>
                        Institute to kickstart<br></br>
                        your Career.
                    </p>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <img src={illustration} className={enquiry.boxOneImage} alt="logo4"/>
                    </div>
                </div>

                <div className={enquiry.boxTwo}>
                    <h1 className={enquiry.boxOneTitle}>MERN Stack Batch.</h1>
                    <p className={enquiry.boxOneDesc}>
                        Timings :<br></br>
                        11:30 AM to 12:30 PM<br></br>
                        4:00 PM to 5:30 PM<br></br>
                        6:30 PM to 7:30 PM
                    </p>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <img src={MERN} className={enquiry.boxTwoImage} alt="logo4"/>
                    </div>
                    <img src={adLabel} className={enquiry.boxTwoLabel} alt="logo4"/>
                </div>
            </div>

            <div className={enquiry.columnTwo}>

                <div className={enquiry.Card}>

                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <div className={enquiry.header}>
                            <span className={enquiry.headerText}>ENQUIRY FORM</span>
                        </div>
                    </div>

                    <form
                        onSubmit={submitHandler}>
                        <div className={enquiry.form} >
                            <label>Name </label> <br/>
                            <input type='text' value={formInfo.firstName} name="firstName"
                                   className={enquiry.twoInputs} required
                                   placeholder='First Name' onChange={(fom) => {
                                onChangeHandler(fom)
                            }} autoFocus />
                            <input type='text' value={formInfo.lastName} name="lastName"
                                   className={enquiry.twoInputs}
                                   required
                                   placeholder='Last Name' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            <br/>
                            {errors.firstName && <div className={enquiry.errorText}>{errors.firstName}</div>}
                        </div>

                        <div className={enquiry.fieldBox}>
                            <label>Contact Details </label><br></br>
                            <input type='tel' name="phone" value={formInfo.phone} className={enquiry.twoInputs}
                                   required
                                   placeholder='Mobile number' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>


                            <input type='number' name="whatsAppNo" value={formInfo.whatsAppNo}
                                   className={enquiry.twoInputs} required
                                   placeholder='WhatsApp number' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            <div className={enquiry.errorText}>{errors.phone &&
                                <div className={enquiry.errorText}>{errors.phone}</div>}
                                &nbsp;&nbsp;{errors.whatsAppNo &&
                                    <div className={enquiry.errorText}>{errors.whatsAppNo}</div>}
                            </div>

                            <input type='text' name="email" value={formInfo.email} className={enquiry.twoInputs}
                                   required
                                   placeholder='Email address' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            {errors.email && <div className={enquiry.errorText}>{errors.email}</div>}<br/>
                        </div>

                        <div className={enquiry.fieldBox}>
                            <label> Age & Gender </label><br></br>
                            <input type='number' name="age" value={formInfo.age} className={enquiry.twoInputs}
                                   required
                                   placeholder='Age' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            <select id="dropdown1" value={dropdown1Value} name="gender"
                                    className={enquiry.genderDropdown} required placeholder='Gender'
                                    onChange={(e) => {
                                        setDropdown1Value(e.target.value);
                                        setError1('');
                                    }}>
                                <option value="">--Select Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <br></br>
                            {errors.age && <div className={enquiry.errorText}>{errors.age}</div>}
                            {error1 && <div className={enquiry.errorText}>{error1}</div>}
                        </div>

                        <div className={enquiry.twoDates}>
                            <div className={enquiry.twoDates2}>
                                <label> Birth Date </label>
                                <input type='date' name="dob" value={formInfo.dob} className={enquiry.inputDates}
                                       required
                                       onChange={(fom) => {
                                           onChangeHandler(fom)
                                       }}/>
                                {errors.dob && <div className={enquiry.errorText}>{errors.dob}</div>}
                            </div>
                            <div className={enquiry.twoDates2}>
                                <label> Enquiry Date </label>
                                <input type='date' name="enquiryDate" className={enquiry.inputDates} required
                                       onChange={(fom) => {
                                           onChangeHandler(fom)
                                       }}/>
                                {errors.enquiryDate && <div className={enquiry.errorText}>{errors.enquiryDate}</div>}
                            </div>
                        </div>

                        <div className={enquiry.fieldBox}>
                            <label>Address </label><br></br>
                            <input type='text' name="address" value={formInfo.address} className={enquiry.input}
                                   required
                                   placeholder='Street address I' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            {errors.address && <div className={enquiry.errorText}>{errors.address}</div>}
                            <input type='text' name="address2" value={formInfo.address2}
                                   className={enquiry.input}
                                   required
                                   placeholder='Street address II' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            {errors.address2 && <div className={enquiry.errorText}>{errors.address2}</div>}

                            <input type='text' name="city" value={formInfo.city} className={enquiry.input}
                                   required
                                   placeholder='City' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            {errors.city && <div className={enquiry.errorText}>{errors.city}</div>}
                            <input type='text' name="state" value={formInfo.state} className={enquiry.input}
                                   required
                                   placeholder='State' onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>
                            {errors.state && <div className={enquiry.errorText}>{errors.state}</div>}
                        </div>


                        <div className={enquiry.fieldBox}>
                            <label>Which course are you looking for?</label><br></br>
                            <input type="checkbox" value="fullStack" name="course" onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>Full Stack Development<br></br>
                            <input type="checkbox" value="mernStack" name="course" onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>Mern Stack Development
                            <br></br>
                            <input type="checkbox" value="frontEnd" name="course" onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>Frontend Development<br></br>
                            <input type="checkbox" value="backEnd" name="course" onChange={(fom) => {
                                onChangeHandler(fom)
                            }}/>Backend Development
                            <br></br>
                        </div>

                        <div className={enquiry.enqBoxCorsJob}>
                            <div className={enquiry.twoDates2}>
                                <label> Course Duration </label>
                                <select id="dropdown2" value={dropdown2Value} name="courseduration"
                                        className={enquiry.courseDropdown} required placeholder='Course Duration'
                                        onChange={(e) => {
                                            setDropdown2Value(e.target.value);
                                            setError2('');
                                        }}>
                                    <option value=""></option>
                                    <option value="oneMonth">One Month</option>
                                    <option value="twoMonths">Two Month</option>
                                    <option value="threeMonths">Three Month</option>
                                    <option value="fourMonths">Four Month</option>
                                    <option value="fiveMonths">Five Month</option>
                                    <option value="sixMonths">Six Month</option>
                                </select>
                                {error2 && <div className={enquiry.errorText}>{error2}</div>}
                            </div>
                            <div className={enquiry.twoDates2}>
                                <label> Job Assistance </label>
                                <select id="dropdown4" value={dropdown4Value} name="job Assistance"
                                        className={enquiry.courseDropdown} required
                                        placeholder='Job Assistance' onChange={(e) => {
                                    setDropdown4Value(e.target.value);
                                    setError5('');
                                }}>
                                    <option disabled selected>-Please Select-</option>
                                    <option value=""></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                {error4 && <div className={enquiry.errorText}>{error4}</div>}
                            </div>
                        </div>

                        <div className={enquiry.twoDates}>
                            <div className={enquiry.twoDates2}>
                                <label> Expected Package </label>
                                <input type='text' name="expectedPackage" value={formInfo.expectedPackage}
                                       className={enquiry.inputDates}
                                       required
                                       onChange={(fom) => {
                                           onChangeHandler(fom)
                                       }}/>
                                {errors.expectedPackage && <div className={enquiry.errorText}>{errors.expectedPackage}</div>}
                            </div>
                            <div className={enquiry.twoDates2}>
                                <label> Current Status </label>
                                <select id="dropdown5" value={dropdown5Value} name="currentStatus"
                                        className={enquiry.courseDropdown} required
                                        placeholder='CurrentStatus' onChange={(e) => {
                                    setDropdown5Value(e.target.value);
                                    setError5('');
                                }}>
                                    <option disabled selected>-Please Select-</option>
                                    <option value=""></option>
                                    <option value="student">Student</option>
                                    <option value="employed">Employed</option>
                                    <option value="Unemployed">Unemployed</option>
                                </select>
                                {error5 && <div className={enquiry.errorText}>{error5}</div>}
                            </div>
                        </div>

                        <div className={enquiry.fieldBox}>
                            <label> Marital Status </label><br></br>
                            <select id="dropdown6" value={dropdown6Value} name="courseduration"
                                    className={enquiry.courseDropdown} required placeholder='Marital Status'
                                    onChange={(e) => {
                                        setDropdown6Value(e.target.value);
                                        setError6('');
                                    }}>
                                <option></option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                            {error6 && <div className={enquiry.errorText}>{error6}</div>}
                        </div>

                        <div className={enquiry.fieldBox}>
                            <label>Type of Enquiry</label><br></br>
                            <select id="dropdown3" value={dropdown3Value} name="type"
                                    className={enquiry.input}
                                    onChange={(e) => {
                                        setDropdown3Value(e.target.value);
                                        setError3('');
                                    }}>
                                <option value=""></option>
                                <option value="GeneralEnquiry">General Enquiry</option>
                                <option value="Internship">Internship</option>
                                <option value="Internship&Course">Internship & Course</option>
                                <option value="Classes&Courses">Classes & Courses</option>
                                <option value="Opportunities">Job Opportunities</option>
                                <option value="feedback">Suggestion & Feedback</option>
                            </select>
                            {error3 && <div className={enquiry.errorText}>{error3}</div>}
                        </div>
                        <div className={enquiry.fieldBox}>
                            <label>How did you hear about us? </label><br></br>
                            <input type="checkbox" value="google" name="hear"
                                   onChange={(fom) => {
                                       onChangeHandler(fom)
                                   }}/>Google<br></br>
                            <input type="checkbox" value="socialMedia" name="hear"
                                   onChange={(fom) => {
                                       onChangeHandler(fom)
                                   }}/>Social Media<br></br>
                            <input type="checkbox" value="onlineAds" name="hear"
                                   onChange={(fom) => {
                                       onChangeHandler(fom)
                                   }}/>Online Ads<br></br>
                            <input type="checkbox" value="Posters" name="hear"
                                   onChange={(fom) => {
                                       onChangeHandler(fom)
                                   }}/>Brochure and Posters<br></br>
                            <input type="checkbox" value="Friends&Family" name="hear"
                                   onChange={(fom) => {
                                       onChangeHandler(fom)
                                   }}/>Friends/Family<br></br>
                        </div>
                        <div className='buttons'>
                            <button type='Submit' className={enquiry.submitButton} onClick={submitHandler}>Submit
                            </button>
                            <button type='button' className={enquiry.printButton} onClick={() => {
                                window.print();
                            }}>Print
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;