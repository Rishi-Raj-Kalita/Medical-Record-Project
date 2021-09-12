import React, { useState } from 'react'
import '../styles/login.css'
import '../styles/signUp.css'
import '../styles/passwordStrength.css'

import signUpLogo from '../img/signupLogo.png'

const type='signup'
const UserSignUp=()=>{
    
    const [userSignUpDetails,setUserSignUpDetails]=useState({name:'',email:'',phoneNumber:'',password:'',confirmPassword:''})
    
    const handleChange=(e)=>{
        const value=e.target.value
        const name=e.target.name
        setUserSignUpDetails({...userSignUpDetails,[name]:value})
    }
    const signupSubmit=(e)=>{
        e.preventDefault()
        console.log('form submitted',userSignUpDetails)
        setUserSignUpDetails({name:'',email:'',phoneNumber:'',password:'',confirmPassword:''})
    }
    return(
        <div id="signup">
            <div id="signupLeftImage">
                <image id="design" src={signUpLogo} alt="signupImage"/>
            </div>
            <div className={type==='signup'?'fadeIn':'fadeOut'} id='signUpForm'>
                <h2 id="heading">Register Your Account!</h2>
                <div >
                    <form onSubmit={signupSubmit}>
                        <label className='label1' htmlFor='name'>Name*</label><br/>
                        <input type='text' 
                        placeholder="write your name "
                        name='name'
                        value={userSignUpDetails.name}
                        onChange={handleChange} 
                        required 
                        ></input><br/>
                        <label className='label1' htmlFor='email'>Email*</label><br/>
                        <input type='text' 
                        placeholder="write your email "
                        name='email'
                        value={userSignUpDetails.email}
                        onChange={handleChange} 
                        required 
                        ></input><br/>
                        <label className='label1' htmlFor='phoneNumber'>Phone Number*</label><br/>
                        <input type='tel' 
                        placeholder="your Phone Number "
                        name='phoneNumber'
                        value={userSignUpDetails.phoneNumber}
                        onChange={handleChange} 
                        required 
                        ></input><br/>
                        <label className='label1' htmlFor='password'>Password*</label><br/>
                        <input type='password' 
                        placeholder="create password "
                        name='password'
                        value={userSignUpDetails.password}
                        onChange={handleChange} 
                        required 
                        ></input><br/>
                        {/* <i className="fa fa-eye" aria-hidden="true" id="eyeIcon"></i><i id="info" className="fa fa-info-circle" aria-hidden="true"><span id="infoText">Your password must contain 8 letters,1 uppercase characters, 1 number, 1 special character.</span></i><br/> */}
                        {/* <div id="reasons" className="reasons"></div> */}

                        <label className='label1' htmlFor='confirmPassword'>Confirm Password*</label><br/>
                        <input type='password' 
                        placeholder='confirm password' 
                        name='confirmPassword'
                        value={userSignUpDetails.confirmPassword}
                        onChange={handleChange} 
                        required 
                        ></input><br/>
                         {/* <i className="fa fa-eye" aria-hidden="true" id="eyeIcon"></i><i id="info" className="fa fa-info-circle" aria-hidden="true"><span id="infoText">Your password must contain 8 letters,1 uppercase characters, 1 number, 1 special character.</span></i><br/>
                        <div id="reasons" className="reasons"></div> */}
                        <div><input type="checkbox" id="terms" required/><label for="terms" id="terms1"> I agree to <a href="" id="termLink">terms & conditions</a></label></div>
                        <button type='submit' className='register' onSubmit={signupSubmit}>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserSignUp