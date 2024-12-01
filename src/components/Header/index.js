import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { FiMessageCircle } from "react-icons/fi";
import { PiGreaterThanLight } from "react-icons/pi";
import "./index.css";

function Header() {
  return (
    <>
    <nav className="header">
      <h1>Chat / Feed chat</h1>
      <div className="user-info">
       <LiaHomeSolid className="home"/>
       <p className="owner">Process Owner HOD</p>
       <p className="admin">Admin</p>
       <p className="palak-text">Palak Bansal</p>
        <img
          src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1733051414/Ellipse_3855_wkcz7w.png"
          alt="User Avatar"
          className="avatar"
        />
      <CiSettings className="setting-logo"/>
      <LuLogOut className="logout-logo"/>
      <p className="logout-text">Logout</p>
      </div>
    </nav>



<div className="profile-cap">
    <div className="profile-bg">
    <div className="cicle-text">
      <p>CB</p>
      </div>
    <p className="profile-name">Cheyenne Bergson</p>
    </div>
  
    <div className="profile-bg">
    <div className="cicle-text">
      <p className="cb-text">CB</p>
      </div>
    <p className="profile-name">Jonathan Higgins</p>
    </div>

    <div className="profile-bg">
    <div className="cicle-text">
      <p className="cb-text">CB</p>
      </div>
    <p className="profile-name">Capt. Trunk</p>
    </div>

    <div className="profile-bgc">
    <div className="cicle-textc">
      <p>CB</p>
      </div>
    <p className="profile-namec">Hannibal Smi..</p>
    </div>

    <div className="profile-bg">
    <div className="cicle-text">
      <p className="cb-text">CB</p>
      </div>
    <p className="profile-name">Capt. Trunk</p>
    </div>

    <div className="profile-bg">
    <div className="cicle-text">
      <p className="cb-text">CB</p>
      </div>
    <p className="profile-name">Hannibal Smi..</p>
    <p className="two">2</p>
    </div>

    <div className="profile-mes">
    <div className="cicle-mes">
    <FiMessageCircle className="message-logo"/>
      </div>

    <p >Messaging <PiGreaterThanLight/> </p>
    </div>




    </div>
    </>
  );
}

export default Header;
