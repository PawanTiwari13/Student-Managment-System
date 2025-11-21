import React, {useState} from 'react';
import regCSS from "./styles/RegistrationForm.module.css";

const AddressForm = () => {
    const [currentAddress, setCurrentAddress] = useState({
        addressC1: '',
        addressC2: '',
        cityC: '',
        pinCodeC: '',
        stateC: '',
        countryC: '',
    });

    const [isSameAsCurrentAddress, setIsSameAsCurrentAddress] = useState(false);

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setCurrentAddress((prevState) => ({...prevState, [name]: value}));
    };

    const onCheckboxChange = (event) => {
        setIsSameAsCurrentAddress(event.target.checked);

        if (event.target.checked) {
            // Copy current address to permanent address fields
            setCurrentAddress((prevState) => ({
                ...prevState,
                addressP1: prevState.addressC1,
                addressP2: prevState.addressC2,
                cityP: prevState.cityC,
                pinCodeP: prevState.pinCodeC,
                stateP: prevState.stateC,
                countryP: prevState.countryC,
            }));
        } else {
            // Clear permanent address fields
            setCurrentAddress((prevState) => ({
                ...prevState,
                addressP1: '',
                addressP2: '',
                cityP: '',
                pinCodeP: '',
                stateP: '',
                countryP: '',
            }));
        }
    };

    return (
        <div>
            <div className={regCSS.fieldBox}>
                <label>Current Address</label><br></br>
                <input
                    type="text"
                    name="addressC1"
                    className={regCSS.input}
                    required
                    placeholder="Street address line 1"
                    onChange={onChangeHandler}
                    value={currentAddress.addressC1}
                />
                <input
                    type="text"
                    name="addressC2"
                    className={regCSS.input}
                    required
                    placeholder="Street address line 2"
                    onChange={onChangeHandler}
                    value={currentAddress.addressC2}
                />
                <br></br>
                <input
                    type="text"
                    name="cityC"
                    className={regCSS.cityPincode}
                    required
                    placeholder="City"
                    onChange={onChangeHandler}
                    value={currentAddress.cityC}
                />
                <input
                    type="text"
                    className={regCSS.cityPincode}
                    name="pinCodeC"
                    placeholder="Pin code"
                    onChange={onChangeHandler}
                    value={currentAddress.pinCodeC}
                />
                <div>
                    <input
                        type="text"
                        name="stateC"
                        className={regCSS.input}
                        required
                        placeholder="State"
                        onChange={onChangeHandler}
                        value={currentAddress.stateC}
                    />
                    <input
                        type="text"
                        name="countryC"
                        className={regCSS.input}
                        required
                        placeholder="Country"
                        onChange={onChangeHandler}
                        value={currentAddress.countryC}
                    />
                </div>
            </div>

            <div className={regCSS.fieldBox}>
                <label>Permanent Address{' '}</label>
                <p className={regCSS.regCheck}>
                    <input
                    type="checkbox"
                    checked={isSameAsCurrentAddress}
                    onChange={onCheckboxChange}/>
                    (Check this checkbox if your Current Address is same as Permanent Address)
                </p>

                <input
                    type="text"
                    name="addressP1"
                    className={regCSS.input}
                    required
                    placeholder="Street address line 1"
                    onChange={onChangeHandler}
                    value={currentAddress.addressP1}/>
                <input
                    type="text"
                    className={regCSS.input}
                    name="addressP2"
                    required
                    placeholder="Street address line 2"
                    onChange={onChangeHandler}
                    value={currentAddress.addressP2}/>
                <br></br>
                <input
                    type="text"
                    name="cityP"
                    className={regCSS.cityPincode}
                    required
                    placeholder="City"
                    onChange={onChangeHandler}
                    value={currentAddress.cityP}/>
                <input
                    type="text"
                    className={regCSS.cityPincode}
                    name="pinCodeP"
                    placeholder="Pin Code"
                    onChange={onChangeHandler}
                    value={currentAddress.pinCodeP}/>

                <input
                    type="text"
                    name="stateP"
                    className={regCSS.input}
                    required
                    placeholder="State"
                    onChange={onChangeHandler}
                    value={currentAddress.stateP}/>
                <input
                    type="text"
                    name="countryP"
                    className={regCSS.input}
                    required
                    placeholder="Country"
                    onChange={onChangeHandler}
                    value={currentAddress.countryP}/>
            </div>
        </div>
    );
};

export default AddressForm;
