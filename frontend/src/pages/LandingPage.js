import { useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import LoginForm from "../components/LoginForm";
import style from "../styles/LandingPage.module.css";

function LandingPage() {
  const [hasAccount, setHasAccount] = useState(true);

  const render = () => {
    return hasAccount ? (
      <LoginForm hasAccount={hasAccount} setHasAccount={setHasAccount} />
    ) : (
      <CreateAccountForm
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
      />
    );
  };

  return <div className={style.mainContainer}>{render()}</div>;
}
export default LandingPage;
