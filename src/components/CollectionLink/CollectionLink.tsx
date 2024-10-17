import styles from "./CollectionLink.module.css";

interface ICollectionLink {
  link?: string;
  title?: string;
}

export function CollectionLink(props: ICollectionLink) {
  return (
    <div className={styles.container}>
      <a className={styles.collectionLink} href={props.link}>
        {props.title}
      </a>
    </div>
  );
}
