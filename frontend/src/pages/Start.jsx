import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Start = () => {
    const navigate = useNavigate();
    const userLogin=()=>{
        navigate("/user/login");
    }
    const userSignup=()=>{
        navigate("/user/signup");
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '90vh'}}>
        <img src="https://links.papareact.com/1ui" alt="Logo" style={{width: '550px', height: '300px'}} className="my-2" />
        <div>
            <button type="button" style={{width: '75px'}} className="btn btn-primary m-2" onClick={userSignup}>Signup</button>
            <button type="button" style={{width: '75px'}} className="btn btn-primary m-2" onClick={userLogin}>Login</button>
        </div>
        </div>
    );
}

export default Start;
