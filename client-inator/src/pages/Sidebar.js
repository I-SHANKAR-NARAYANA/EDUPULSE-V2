import React from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "./images/pic-1.jpg";
import pic2 from "./images/pic-2.jpg";
import pic3 from "./images/pic-3.jpg";
import pic4 from "./images/pic-4.jpg";
import pic5 from "./images/pic-5.jpg";
import pic6 from "./images/pic-6.jpg";
import pic7 from "./images/pic-7.jpg";
import pic8 from "./images/pic-8.jpg";
import pic9 from "./images/pic-9.jpg";
import { useCustomNavigation } from "./functions";

function Sidebar() {
  const {
    hell,
    navcour,
    navabout,
    navteach,
    navcon,
  } = useCustomNavigation();

  const allDet = sessionStorage.getItem("dett");
  const parsedDet = JSON.parse(allDet) || {
    name: "VIEWER",
    selectedRole: "",
    picn: 3,
  };
  const arr = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
  const picp = arr[parsedDet.picn];
  const navigate = useNavigate();
  return (
    <div>
      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <div className="profile">
          <img src={picp} className="image" alt="" />
          <h3 className="name">{parsedDet.name}</h3>
          <p className="role">{parsedDet.selectedRole}</p>
        </div>

        <nav className="navbar">
          <a onClick={hell}>
            <i className="fas fa-home"></i>
            <span>home</span>
          </a>
          <a onClick={navabout}>
            <i className="fas fa-question"></i>
            <span>about</span>
          </a>
          <a onClick={navcour}>
            <i className="fas fa-graduation-cap"></i>
            <span>courses</span>
          </a>
          <a onClick={navteach}>
            <i className="fas fa-chalkboard-user"></i>
            <span>teachers</span>
          </a>
          <a onClick={navcon}>
            <i className="fas fa-headset"></i>
            <span>contact us</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
