import { useState } from "react";
import ItemList from "./ItemList";
import styles from "./_Nav.module.scss";

const Nav = () => {
  const [isFirstMenuActive, setIsFirstMenuActive] = useState(false);
  const [isSecondMenuActive, setIsSecondMenuActive] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
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
                isFirstMenuActive ? `${styles.active}` : ""
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
        </li>
        <li>
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
                isSecondMenuActive ? `${styles.active}` : ""
              }`}
              data-name-menu="menu-two"
            >
              <ItemList name="History" />
              <ItemList name="Our Team" />
              <ItemList name="Blog" />
            </div>
          </div>
        </li>
        <li>
          <a href="/#careers">Careers</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
