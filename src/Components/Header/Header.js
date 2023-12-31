import MobileNav from "./MobileNav";
import Nav from "./Nav";
import styles from "./_Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <a href="../../../public/index.html" title="home link as logo">
            <img
              className={styles.logo}
              src={require("../../Components/images/logo.svg").default}
              alt="logo"
            />
          </a>
          <Nav />
        </div>

        <div className={styles.buttons}>
          <button id="login-button" type="button">
            Login
          </button>
          <button id="register-button" type="button">
            Register
          </button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
