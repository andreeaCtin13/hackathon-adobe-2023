import React, { useContext, useEffect, useState } from "react";
import currentUser from "../data/user.json";
import { Link } from "react-router-dom";
import style from "../styles/LandingPage.module.css";
import { UserContext } from "../context/UserContext";
function CreateAccountForm({ hasAccount, setHasAccount }) {
  const [data, setData] = useState({});
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(currentUser);
  }, []);
  const create = () => {
    //aici se trimite spre back data ul spre a fi inserat in baza de date
  };
  return (
    <form action="" className={style.form}>
      <h2>Create an account</h2>
      <br />
      <label htmlFor="mail">Mail</label>
      <br />
      <br />

      <input
        type="text"
        id="mail"
        onChange={(e) => {
          setData({ ...data, mail: e.target.value });
        }}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <br />
      <input
        type="password"
        id="password"
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <br />
      <br />
      <div className={style.zonaButoane}>
        <Link
          onClick={() => {
            setHasAccount(!hasAccount);
          }}
        >
          <button className={style.button}>Back to login</button>
        </Link>
        <Link
          onClick={() => {
            create();
          }}
        >
          <button className={style.button}>Create</button>
        </Link>
      </div>
    </form>
  );
}

export default CreateAccountForm;
