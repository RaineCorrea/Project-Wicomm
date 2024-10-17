import styles from "./SectionPromotionsBanners.module.css";

interface ISectionPromotionsBanners {
  title?: string;
  subTitle?: string;
  textLink?: string;
  img: string;
  link?: string;
}

export function SectionPromotionsBanners(props: ISectionPromotionsBanners) {
  return (
    <>
      <div className={styles.promotionsBanners}>
        <div className={styles.containerCollection}>
          <span className={styles.title}>COLEÇÕES</span>
          <a className={styles.subtitle} href="#">
            VER TODAS
          </a>
        </div>
        <div>
          <img className={styles.promotionsBannersImg} src={props.img} />
        </div>
        <div className={styles.promotionsBannersText}>
          <span className={styles.promotionsBannersTitle}>{props.title}</span>
          <p className={styles.promotionsBannersSubTitle}>{props.subTitle}</p>
          <a href={props.link} className={styles.promotionsBannersLink}>
            {props.textLink}
          </a>
        </div>
      </div>
    </>
  );
}
