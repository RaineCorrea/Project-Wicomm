import styles from "./Beneficio.module.css";

interface IBeneficio {
  img?: string;
  title?: string;
}

export function Beneficio(props: IBeneficio) {
  return (
    <div className={styles.container}>
      <img className={styles.collectionImg} src={props.img} />
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}
