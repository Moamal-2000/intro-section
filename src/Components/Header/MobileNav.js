import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <nav className={styles.mobileNav}>
      <img src={require("../images/icon-menu.svg").default} alt="icon menu" />
    </nav>
  );
};

export default MobileNav;
