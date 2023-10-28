import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import currentUser from "../data/user.json";
import { Link } from "react-router-dom";
import style from "../styles/LandingPage.module.css";

function LoginForm({ hasAccount, setHasAccount }) {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(currentUser);
  }, []);

  const login = (event) => {
    // aici se face call catre back ca sa putem sa vedem daca ce introduce user-ul e corect, daca da, setam user-ul
    setUser(currentUser);
  };
  return (
    <div className={style.form}>
      <form action="">
        <h2>Login to your account</h2>
        <br />
        <label htmlFor="mail">Mail</label>
        <br />
        <br />
        <input type="text" id="mail" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <br />
        <input type="password" id="password" />
        <br />
        <br />
        <div className={style.zonaButoane}>
          <Link
            onClick={() => {
              setHasAccount(!hasAccount);
            }}
          >
            <button className={style.button}>Create Account</button>
          </Link>
          <Link to="/items">
            <button
              className={style.button}
              onClick={(e) => {
                login(e);
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
