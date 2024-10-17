import styles from "./Collection.module.css";

interface ICollection {
  img?: string;
  title?: string;
  link?: string;
}

export function Collection(props: ICollection) {
  return (
    <div className={styles.container}>
      <img className={styles.collectionImg} src={props.img} />
      <a href={props.link} className={styles.collectionTitle}>
        {props.title}
      </a>
    </div>
  );
}
