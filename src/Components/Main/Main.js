import styles from "./_Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button type="button">Learn more</button>

          <div className={styles.logos}>
            <img src={require("../images/client-databiz.svg").default} alt="logo" />
            <img src={require("../images/client-audiophile.svg").default} alt="logo" />
            <img src={require("../images/client-meet.svg").default} alt="logo" />
            <img src={require("../images/client-maker.svg").default} alt="logo" />
          </div>
        </div>

        <div className={styles.img}></div>
      </div>
    </main>
  );
};

export default Main;
