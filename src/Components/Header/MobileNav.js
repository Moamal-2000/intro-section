import { useState } from "react";
import ItemList from "./ItemList";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isFirstMenuActive, setIsFirstMenuActive] = useState(false);
  const [isSecondMenuActive, setIsSecondMenuActive] = useState(false);

  return (
    <>
      <img
        className={styles.openMenuIcon}
        src={require("../images/icon-menu.svg").default}
        alt="icon menu"
        onClick={() => setIsNavActive(true)}
      />

      <div
        className={`${styles.overlay} ${isNavActive ? styles.active : ""}`}
        onClick={() => setIsNavActive(false)}
      ></div>

      <div className={`${styles.navMenu} ${isNavActive ? styles.active : ""}`}>
        <img
          className={styles.closeMenuIcon}
          src={require("../images/icon-close-menu.svg").default}
          alt="icon close"
          onClick={() => setIsNavActive(false)}
        />

        <div className={styles.content}>
          <div
            className={styles.menu}
            onClick={() => setIsFirstMenuActive((prev) => !prev)}
          >
            <div className={styles.nameMenu}>
              <span>Features</span>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              className={`${styles.items} ${
                isFirstMenuActive ? styles.active : ""
              }`}
              data-name-menu="menu-one"
            >
              <ItemList
                src={require("../images/icon-todo.svg").default}
                name="Todo List"
              />
              <ItemList
                src={require("../images/icon-calendar.svg").default}
                name="Calender"
              />
              <ItemList
                src={require("../images/icon-reminders.svg").default}
                name="Reminders"
              />
              <ItemList
                src={require("../images/icon-planning.svg").default}
                name="Planning"
              />
            </div>
          </div>

          <div
            className={styles.menu}
            onClick={() => setIsSecondMenuActive((prev) => !prev)}
          >
            <div className={styles.nameMenu}>
              <span>Company</span>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              className={`${styles.items} ${
                isSecondMenuActive ? styles.active : ""
              }`}
              data-name-menu="menu-two"
            >
              <ItemList name="History" />
              <ItemList name="Our Team" />
              <ItemList name="Blog" />
            </div>
          </div>

          <a href="/#careers">Careers</a>
          <a href="/#about">About</a>

          <div className={styles.buttons}>
            <button id="login-button" type="button">
              Login
            </button>
            <button id="register-button" type="button">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
