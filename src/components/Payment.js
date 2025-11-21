import React, {useState} from "react";
import classes from "./styles/Payment.module.css";
import illustration from "./images/illustration.png";
import {Link, useNavigate} from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    const [fileName, setFileName] = useState('');   //Choose File State
    const [Fee, setFee] = useState('');             //Discount Calculator State
    const [Discount, setDiscount] = useState('');
    const [errors, setErrors] = useState({})        //Set Error State

    const [formInfo, setFormInfo] = useState({      //Validation State
        firstName: '', lastName: '',
        address: '', address2: '',
        email: '', phone: '',
        age: '', gender: '',
        city: '', state: '',
        fees: '', payment50: '',
        inDate1: '',
        inDate2: '',
        inDate3: '',
        installment1: '',
        installment2: '',
        installment3: '',
        paymentSlip: ''
    });

    const [selectedNumber, setSelectedNumber] = useState(0);
    const [fields, setFields] = useState([]);

    const validation = (formInfo) => {

        let errors = {};

        if (!formInfo.firstName || !formInfo.lastName) {
            errors.firstName = "First Name and Last Name is required*"
        }
        if (!formInfo.phone) {
            errors.phone = "Phone number is required*"
        }
        if (!formInfo.fees) {
            errors.email = "Course Fees is required*"
        }
        if (!formInfo.age) {
            errors.age = "Age is required*"
        }
        if (!formInfo.address) {
            errors.address = "Street Name is required*"
        }
        if (!formInfo.city) {
            errors.city = "City is required*"
        }
        if (!formInfo.fees) {
            errors.fees = "Course Fee is required*"
        }

        return errors;
    };

    const handleDiscount = (discount) => {
        const {name, value} = discount.target;
        if (name === 'Fee') {
            setFee(value);
        } else if (name === 'Discount') {
            setDiscount(value);
        }
    };

    const calculateDiscount = () => {
        const parsedFee = parseFloat(Fee);
        const parsedDiscount = parseFloat(Discount);

        if (isNaN(parsedFee) || isNaN(parsedDiscount)) {
            return '';
        }

        const diffAmount = parsedFee - parsedDiscount;

        if (diffAmount < 0) {
            return 'Error: Enter a number lesser than Course Fees';
        }

        return diffAmount;
    };

    const calFiftyPer = () => {
        const diffAmount = parseFloat(calculateDiscount());

        if (isNaN(diffAmount)) {
            return '';
        }

        const FiftyPer = diffAmount * 0.5;

        return FiftyPer.toFixed(2);
    };

    const handleDropdownChange = (intsallment) => {
        const selectedValue = parseInt(intsallment.target.value, 10);
        setSelectedNumber(selectedValue);
        generateFields(selectedValue);
    };

    const generateFields = (numberOfFields) => {
        const newFields = [];
        for (let i = 1; i <= numberOfFields; i++) {
            newFields.push(<div key={i} className={classes.payBox}>
                <label className={classes.Bodylabel}>Installment: {i} </label><br></br>
                <input type="date" name="inDate1" className={classes.payInTxt}
                       onChange={(fom) => {
                           onChangeHandler(fom)
                       }}/>
                <input type="number" name="installment1" placeholder="Amount"
                       className={classes.payInTxt}
                       onChange={(fom) => {
                           onChangeHandler(fom)
                       }}/>
            </div>);
        }
        setFields(newFields);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('');
        }
    };

    const onChangeHandler = (fom) => {
        setFormInfo(() => ({
            ...formInfo, [fom.target.name]: fom.target.value
        }))
    }

    const submitHandler = (fom) => {
        fom.preventDefault();
        console.log(formInfo);
        setErrors(validation(formInfo));
        alert("Successfully Submitted!!");
        navigate("/Documents");
    }


    return (<div className={classes.payPage}>
<div>
        <div className={classes.paySubDiv}>
            <h1 className={classes.paySideCrdHed}>Boost your Coding Performance with us.</h1>
            <p className={classes.paySideCrdpre}>
                Get the best I.T Courses<br></br>
                from Nagpur I.T Training<br></br>
                Institute to kickstart<br></br>
                your Career.
            </p>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <img src={illustration} className={classes.paySublogo} alt="logo4"/>
            </div>
        </div>
    {/*<div className={classes.paySubDivThree}>*/}
    {/*    <label>Remark</label><br/>*/}
    {/*    <input type="text" name={"remark"} placeholder={"Remark if any"} className={classes.payInTxt} />*/}
    {/*</div>*/}
</div>

            <div className={classes.payBody}>

                <div className={classes.payCard1}>

                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <div className={classes.payBanner}>
                            <span className={classes.payBanrTxt}>PAYMENT FORM</span>
                        </div>
                    </div>

                    <form
                        onSubmit={submitHandler}>
                        <div className={classes.payBox}>
                        <label>Name: </label> <br></br>
                            <input type='text' name="firstName" className={classes.payInTxtSbS} required
                                   placeholder='First Name' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <input type='text' className={classes.payInTxtSbS} required
                                   placeholder='Last Name' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <br></br>
                        </div>

                        <div className={classes.payBox}>
                        <label> Contact Details </label><br></br>
                            <input type='text' name="email" className={classes.payInTxtSbS} required
                                   placeholder='Email address' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <input type='tel' name="phone" id="phone" className={classes.payInTxtSbS} required
                                   placeholder='Mobile number' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                        </div>

                        <div className={classes.payBox}>
                            <label> Age & Gender: </label><br></br>
                            <input type='number' name="age" className={classes.payInTxtSbS} required
                                   placeholder='Age' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <select id="gender" name="gender" className={classes.payInTxtSbS} required
                                    placeholder='Gender'>
                                <option disabled selected hidden>--Select Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <br></br>
                        </div>

                        <div className={classes.payBox}>
                            <label>Address: </label><br></br>
                            <input type='text' name="address" className={classes.payInTxt} required
                                   placeholder='Street address I' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <input type='text' name="address2" className={classes.payInTxt} required
                                   placeholder='Street address II' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                            <br></br>

                            <input type='text' name="city" className={classes.payInTxt} required
                                   placeholder='City' onChange={(fom) => {
                                onChangeHandler(fom)}}/>

                            <input type='text' name="state" className={classes.payInTxt} required
                                   placeholder='State' onChange={(fom) => {
                                onChangeHandler(fom)}}/>
                        </div>

                        <div className={classes.payBox}>
                            <div className={classes.payBoxCorsDis}>
                                <div className={classes.payBoxCorsDis2}>
                                <label>Course Fees: </label>
                                <input type="number" name="Fee" value={Fee} className={classes.payInTxtCorsDis}
                                       onChange={handleDiscount}/>
                                <span className={classes.error}>{errors.fees}</span>
                                </div>
                                <div className={classes.payBoxCorsDis2}>
                                <label>Discount (If Applicable)</label>
                                <input type="number" name="Discount" value={Discount} className={classes.payInTxtCorsDis}
                                       onChange={handleDiscount}/>
                                </div>
                            </div>
                        </div>
                        <div className={classes.payBox}>
                            <label>Amount to be paid: </label><br></br>
                            <input type="text" name="" value={calculateDiscount()} readOnly className={classes.payInTxt}
                                   onChange={(fom) => {
                                       onChangeHandler(fom)}}/>
                        </div>
                        <div className={classes.payBox}>
                            <label>50% Advance Payment: </label>
                            <input type="text" name="payment50" className={classes.payInTxt} value={calFiftyPer()}
                                   onChange={(fom) => {
                                       onChangeHandler(fom)
                                   }} readOnly/>
                        </div>

                        <label>No. of Installments in which you wish to pay </label>
                        <div className={classes.payBox}>
                            <select value={selectedNumber} name="numOfIns" id="numOfIns"
                                    className={classes.installWidth}
                                    onChange={handleDropdownChange}>
                                <option value="0">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>

                            <div>
                                {fields.length > 0 && (<div className={classes.payBox}>
                                        {fields}
                                    </div>)}
                            </div>

                        </div>

                        {/*<div className={classes.payBox}>*/}
                        {/*    <label>1st Installment: </label>*/}
                        {/*    <input type="date" name="inDate1" className={classes.payInTxt}*/}
                        {/*           onChange={(fom) => {*/}
                        {/*               onChangeHandler(fom)*/}
                        {/*           }}/>*/}
                        {/*    <input type="number" name="installment1" placeholder="1st Installment"*/}
                        {/*           className={classes.payInTxt}*/}
                        {/*           onChange={(fom) => {*/}
                        {/*               onChangeHandler(fom)*/}
                        {/*           }}/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.payBox}>*/}
                        {/*    <label>2nd Installment: </label>*/}
                        {/*    <input type="date" name="inDate2" className={classes.payInTxt}*/}
                        {/*           onChange={(fom) => {*/}
                        {/*               onChangeHandler(fom)*/}
                        {/*           }}/>*/}
                        {/*    <input type="number" name="installment2" placeholder="2nd Installment"*/}
                        {/*           className={classes.payInTxt}*/}
                        {/*           onChange={(fom) => {*/}
                        {/*               onChangeHandler(fom)*/}
                        {/*           }}/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.payBox}>*/}
                        {/*    <label>3rd Installment: </label>*/}
                        {/*    <input type="date" name="inDate3" className={classes.payInTxt}*/}
                        {/*           onChange={(fom) => {*/}
                        {/*               onChangeHandler(fom)*/}
                        {/*           }}/>*/}
                        {/*    <input type="number" name="installment3" placeholder="3rd Installment"*/}
                        {/*           className={classes.payInTxt}*/}
                        {/*           onChange={(fom) => {*/}
                        {/*               onChangeHandler(fom)*/}
                        {/*           }}/>*/}
                        {/*</div>*/}

                        <label>Payment Slip</label><br></br>
                        <div className={classes.payBox}>
                            <div className={classes.paySlipBody}>
                                <input type="file" id="file-name" value={fileName}
                                       placeholder="Choose Files here"
                                       style={{
                                            padding: '10px', borderRadius: '5px',
                                       }}/>
                                {/*<span htmlFor="file-input" className={classes.customPayBtn}> Choose File </span>*/}
                                {/*<input type="file" id="file-input" onChange={handleFileChange}*/}
                                {/*       style={{display: 'none'}}/>*/}
                            </div>
                        </div>

                        <div className='payBtns'>
                            <button type='Submit' className={classes.paySubBtn} onClick={submitHandler}>Pay</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
}

export default Form;
