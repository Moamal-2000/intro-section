import styles from "./_Nav.module.scss"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <div className={styles.menu}>
            <span className={styles.nameMenu}>Features</span>
            <div className={styles.item}></div>
          </div>
        </li>
        <li>
        <div className={styles.menu}>
            <span className={styles.nameMenu}>Company</span>
            <div className={styles.item}></div>
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
