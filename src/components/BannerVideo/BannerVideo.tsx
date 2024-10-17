import styles from "./BannerVideo.module.css";

interface IBannerVideo {
  title: string;
  subTitle: string;
  img: string;
  linkGat: string;
  videoUrl: string;
}

export function BannerVideo(props: IBannerVideo) {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerContentText}>
          <h2 className={styles.bannerText}>{props.title}</h2>
          <img src={props.img} alt={props.title} className={styles.bannerImg} />
        </div>
        <div className={styles.containerVideo}>
          <iframe
            src="https://www.youtube.com/embed/EAjQNcH9ug0?autoplay=1&loop=1&mute=1&fs=0&playlist=EAjQNcH9ug0"
            width="505"
            height="284"
            title="Animais engraçados 2023 - Cães e gatos fofos fazendo coisas engraçadas"
          ></iframe>
          <p className={styles.bannerSubTitle}>{props.subTitle}</p>
          <a href="#" className={styles.linkGat}>
            {props.linkGat}
          </a>
        </div>
      </div>
    </div>
  );
}
