import { Sidebar } from "primereact/sidebar";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/Sidebar.module.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

import Logo from "../assets/logo.png";
import {
  faBars,
  faGraduationCap,
  faUser,
  faArrowRightFromBracket,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Dialog } from "primereact/dialog";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function CustomSidebar() {
  const [visible, setVisible] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const closeSidebar = () => {
    setVisible(false);
  };
  const handleLogout = () => {
    setLogoutModal(true);
  };

  return (
    <div>
      <button className={style.menuBtn} onClick={() => setVisible(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="left"
      >
        <div className={style.flexContainer}>
          <img
            className={style.img}
            src={Logo}
            alt="plang"
            width="70"
            height="70"
          />
          <h1>Paperclip</h1>
        </div>
        <ul>
          <li>
            {" "}
            <Link to="/items" onClick={closeSidebar} className={style.link}>
              Items Market
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/your-items"
              onClick={closeSidebar}
              className={style.link}
            >
              Your Items
            </Link>
          </li>
          <li>
            <Link to="/" className={style.link} onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </Sidebar>
      <Dialog
        visible={logoutModal}
        onHide={() => setLogoutModal(false)}
        className={style.modal}
      >
        Are you sure you want to logout?
        <div className={style.buttonsLogout}>
          <Link to="/">
            <button
              onClick={() => {
                setUser(false);
                setLogoutModal(false);
              }}
              className={style.btn}
            >
              {" "}
              Yes
            </button>
          </Link>
          <button onClick={() => setLogoutModal(false)} className={style.btn}>
            No
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default CustomSidebar;
