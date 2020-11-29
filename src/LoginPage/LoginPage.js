import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom'

function LoginPage(){
    return(
        <div className="Login">
            <div className="facebook">
            <div className="facebooktext">
                facebook
            </div>
            <div className ='title'>
                Facebook conceta y comparte
                <br></br>with the people in your lifes
            </div>
            </div>
            <div className="LoginContainer">
            <div className='logindetail'>
                <input type='email' placeholder="Email address"/>
                    <br></br>
                <input type='Password' placeholder="Password"/>
            </div>
            <div className="btn">
                <Link to="/HeaderArea">Log In</Link>
            </div>
            <div className='forget'>
                <a href='forget'>Forget account</a>
                <br></br>
            </div>
            <div className="create">
                <br></br>
                <button className="btns">
                    Create New
                </button>
            </div>
            <p></p>
            <br></br>
            <div className="page">
                <a href="createpage">Create a Page</a>
                
            </div>
            </div>

        </div>
    )
}

export default LoginPage;