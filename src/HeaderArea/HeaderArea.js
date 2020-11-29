import React from 'react'
import {AiOutlineSearch, AiFillHome, AiOutlineWallet} from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md'
import {FaBell, FaCaretDown, FaFacebookMessenger, FaPlusCircle, FaRegFlag, FaUsers} from 'react-icons/fa'
import './HeaderArea.css'
import MainArea from '../MainArea/MainArea';

function HeaderArea(){
    return(
    <div className="HomePage">
        <div className="header">
            <div className="first-header">
                <div class="logo">
                <img src="images/logo.png" alt="logo" style={{height:"40px" ,padding:"1rem"}} />
                </div>
            <div className="Search">
                <AiOutlineSearch style={{height:"4rem"}}/>
                <input placeholder="Buscar"type="Search"/>
            </div>
        </div>
        <div className="middle-header">
            <div className="Icon">
                <AiFillHome fontSize="2.1rem" color="#1877F2"/>                
            </div>
            <div className="Icon">
                <FaRegFlag fontSize="1.8rem" color="#1877F2"/>                
            </div>
            <div className="Icon">
                <MdOndemandVideo fontSize="1.8rem" color="#1877F2"/>                
            </div>
            <div className="Icon">
                <FaUsers fontSize="1.8rem" color="#1877F2"/>                
            </div>
            <div className="Icon">
                <AiOutlineWallet fontSize="1.8rem" color="#1877F2"/>                
            </div>
        </div>
        <div className="third-header">
            <div className="Pluss">
                <img src="/images/mario.png"  alt="user" style={{height:"35px"}}/>
                <div>Meer</div>
            </div>
            <div className="Plus">
                <FaPlusCircle fontSize="1.7rem" color="#1877F2"/>                
            </div>
            <div className="Plus">
                <FaFacebookMessenger fontSize="1.7rem" color="#1877F2"/>                
            </div>
            <div className="Plus">
                <FaBell fontSize="1.7rem" color="#1877F2"/>                
            </div>
            <div className="Plus">
                <FaCaretDown fontSize="1.7rem" color="#1877F2"/>                
            </div>

        </div>
    </div>
    <MainArea/>
    </div>
    )
}

export default HeaderArea