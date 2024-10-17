import styles from "./PromotionsBannersInstagram.module.css";

interface IPromotionsBannersInstagram {
  img: string;
}

export function PromotionsBannersInstagram(props: IPromotionsBannersInstagram) {
  return (
    <div className={styles.promotionsBanners}>
      <div className={styles.containerImg}>
        <img className={styles.promotionsBannersImg} src={props.img} />
      </div>
    </div>
  );
}
