import styles from "./_Header.module.scss";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={require("../../Components/images/logo.svg").default}
        alt="logo"
      />
      <Nav />

      <div className="buttons">
        <button id="login-button" type="button">Login</button>
        <button id="register-button" type="button">Register</button>
      </div>
    </header>
  );
};

export default Header;
