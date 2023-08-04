import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <>
      <nav className={styles.mobileNav}>
        <img
          className={styles.openMenuIcon}
          src={require("../images/icon-menu.svg").default}
          alt="icon menu"
        />
      </nav>

      <div className={styles.overlay}></div>

      <div className={styles.navMenu}>
        <img
          className={styles.closeMenuIcon}
          src={require("../images/icon-close-menu.svg").default}
          alt="icon close"
        />
      </div>
    </>
  );
};

export default MobileNav;
