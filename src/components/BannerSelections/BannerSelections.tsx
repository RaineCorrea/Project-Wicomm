import styles from "./BannerSelections.module.css";

interface IBannerSelections {
  img: string;
  title: string;
  subTitle: string;
  description: string;
  linkSelection: string;
}

export function BannerSelections(props: IBannerSelections) {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
        <img src={props.img} alt={props.title} className={styles.bannerImg} />
        <div className={styles.containerSelection}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.subTitle}>{props.subTitle}</span>
          <span className={styles.description}>{props.description}</span>
          <a className={styles.linkSelection} href={props.linkSelection}>
            VER SELEÇÃO
          </a>
        </div>
      </div>
    </div>
  );
}
