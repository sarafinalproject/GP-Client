
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import ReactDOM from 'react-dom';
import {useDispatch} from 'react-redux'
import UtilsService from './UtilsService';

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
//import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
//import CountryService from './CountryService';
import './Secondtest.css';
import cities from './cities.json'

export const FormikFormDemo = () => {
  //  const [citiesnames, setCitiesnames] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [namelogin,setNamelogin]=useState({});
    const [phonelogin,setPhonelogin]=useState({});
    const utilsService = new UtilsService();

  //  const dispatch = useDispatch();
    const setName=(e)=>{
        
        setNamelogin(e.target.value);
       console.log("gggggg",e.target.value);
    //   dispatch({ type :  "USERNAME" ,payload: namelogin})
    }
    const setPhone=(e)=>{
        setPhonelogin(e.target.value);
        console.log("ppppppppp",e.target.value);

    }
   console.log(namelogin);
   const submit= () =>{
    const inputs = {namelogin,phonelogin};
    utilsService.additem("http://localhost:8000/api/products/",inputs);
   }
    
    //const countryservice = new CountryService();
    //const city= (event) => { setCitiesnames([cities]);}

/* useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); 
 */

//const cities=new cities();
    const formik = useFormik({
        initialValues: {
            name: '',
            descraption: '',
            phone: '',
           //date: null,
          city: '',
        // city:[{1:"vvvvvvvvvv"},{2:"vvvvvv"}],
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = ' Product Name is required.';
            }

           /* if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }*/

            if (!data.phone) {
                errors.phone = 'Phone is required.';
            }
            else if ( !(data.phone.match('[0-9]{10}')) ) {
                errors.phone = 'Invalid phone number';}

            if (!data.accept) {
                errors.accept = 'You need to agree to the terms and conditions.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    //const passwordHeader = <h6>Pick a password</h6>;
  /*  const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );
*/
    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Add New Product</h5>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name}  onChange={e => { formik.handleChange(e); setName(e)} }autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Product Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                               
                                <InputText id="descraption" name="descraption" value={formik.values.descraption} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('descraption') })} />
                                <label htmlFor="descraption" className={classNames({ 'p-error': isFormFieldValid('descraption') })}>  Product Descraption</label>
                            </span>
                            {getFormErrorMessage('descraption')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-phone" />
                                <InputText id="phone" name="phone" value={formik.values.password} onChange={e => { formik.handleChange(e); setPhone(e)}} toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('phone') })}  />
                                <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid('phone') })}>Phone*</label>
                            </span>
                            {getFormErrorMessage('phone')}
                        </div>
                      
                        <div className="field">
                            <span className="p-float-label">
                                <Dropdown id="city" name="city" value={formik.values.city} onChange={formik.handleChange }
                                options={[{"name":"vvvvvvvvvv"},{"name":"vvvvvv"}]} optionLabel="name" />
                                <label htmlFor="city">City</label>
                            </span>
                        </div>
                       
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>I agree to the terms and conditions*</label>
                        </div>

                        <Button type="submit" label="Submit" className="mt-2" onClick={submit}/>
                    </form>
                </div>
            </div>
        </div>
    );
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<FormikFormDemo />, rootElement);
export default FormikFormDemo;
