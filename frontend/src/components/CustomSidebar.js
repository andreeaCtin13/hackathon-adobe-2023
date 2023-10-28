import { Sidebar } from "primereact/sidebar";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/Sidebar.module.css";
import {
  faBars,
  faGraduationCap,
  faUser,
  faArrowRightFromBracket,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

import { Link } from "react-router-dom";
function CustomSidebar() {
  const [visible, setVisible] = useState(false);

  const closeSidebar = () => {
    setVisible(false);
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
        <div>
          <h1>Nume provizoriu</h1>
        </div>
        <ul>
          <li>
            {" "}
            <Link to="/items" onClick={closeSidebar}>
              Items Market
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/your-items" onClick={closeSidebar}>
              Your Items
            </Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </Sidebar>
    </div>
  );
}

export default CustomSidebar;
