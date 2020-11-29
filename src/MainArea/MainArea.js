import React from 'react'
import { FaAngleDown, FaFacebookMessenger, FaFontAwesome, FaFontAwesomeFlag, FaMedrt, FaSearch } from 'react-icons/fa';
import {MdVideoCall,MdMoreHoriz}from 'react-icons/md'
import './MainArea.css';

function MainArea(){
    return(
        <div className='Main'>

            <div className="Rside">
                <div className="Perfile">
                <img src="/images/mario.png"  alt="user" style={{height:"35px"}}/>
                </div>
                <div className="Pro">
                <FaMedrt color= "red" font-Size="2rem"/>
                <div>COVID 19 INFORMACION</div>
                </div>
                <br></br>
                <div className="Pro">
                    <FaFontAwesomeFlag color= "green" font-Size="3rem"/>
                    <div>Page</div>
                </div>
                <div className="Pro">
                    <FaFacebookMessenger color= "blue" font-Size="3rem"/>
                    <div>Friends</div>
                </div>
                <div className="Pro">
                    <FaAngleDown color= "blue" font-Size="3rem"/>
                    <div>Friends</div>
                </div>
                <br></br>
                <div className="Perfiles">
                    <img src="/images/logo2.png"  alt="perfil" style={{height:"35px", padding:"1rem"}}/>
                    Gruop
                </div>
                <div className="Perfiles">
                    <img src="/images/logo2.png"  alt="perfil" style={{height:"35px", padding:"1rem"}}/>
                    Cian
                </div>
                <div className="Perfiles">
                    <img src="/images/logo2.png"  alt="perfil" style={{height:"35px", padding:"1rem"}}/>
                    Guatemala
                </div>
                <div className="Perfiles">
                    <img src="/images/logo2.png"  alt="perfil" style={{height:"35px", padding:"1rem"}}/>
                    Python
                </div>
                <div className="Perfiles">
                    <img src="/images/logo2.png"  alt="perfil" style={{height:"35px", padding:"1rem"}}/>
                    WWW
                </div>
                
                
                
                
            </div>
            <div className="Main Area">
                MainArea
            </div>
            <div className="Lside">
                <div className="Contact">
                    <div className="Contacts">
                        Contacts
                    </div>
                </div>
                <div className="chaticon">
                    <div className="icons">
                        <MdVideoCall fontSize="1.6rem"/>
                    </div>
                    <div className="icons">
                        <FaSearch fontSize="1.6rem"/>
                    </div>
                    <div className="icons">
                        <MdMoreHoriz fontSize="1.6rem"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea