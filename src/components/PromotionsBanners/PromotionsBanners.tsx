import styles from "./PromotionsBanners.module.css";

interface IPromotionsbanners {
  title?: string;
  subTitle?: string;
  textButton?: string;
  img: string;
}

export function PromotionsBanners(props: IPromotionsbanners) {
  return (
    <div className={styles.promotionsBanners}>
      <div>
        <img className={styles.promotionsBannersImg} src={props.img} />
      </div>
      <div className={styles.promotionsBannersText}>
        <span className={styles.promotionsBannersTitle}>{props.title}</span>
        <p className={styles.promotionsBannersSubTitle}>{props.subTitle}</p>
        <button className={styles.promotionsBannersButton}>
          {props.textButton}
        </button>
      </div>
    </div>
  );
}
