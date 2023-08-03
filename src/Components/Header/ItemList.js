import styles from "./_ItemList.module.scss";

const ItemList = ({ src, name }) => {
  return (
    <div className={styles.item}>
      {src && <img src={src} alt={`${name} icon`} />}
      <span>{name}</span>
    </div>
  );
};

export default ItemList;
