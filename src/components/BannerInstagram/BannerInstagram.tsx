import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./BannerInstagram.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { PromotionsBannersInstagram } from "../PromotionsBannersInstagram/PromotionsBannersInstagram";
import instagram1 from "../assets/svg/instagram1.svg";
import instagram2 from "../assets/svg/instagram2.svg";
import instagram3 from "../assets/svg/instagram3.svg";
import instagram4 from "../assets/svg/instagram4.svg";

export function BannerInstagram() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <span className={styles.title}>
          Faça parte da comunidade de gatunos que amam{" "}
        </span>
        <span className={styles.subtitle}>
          design e papelão compartilhando a hashtag:
        </span>
        <span className={styles.hastag}>#AdoradoresDePapelão</span>
      </div>
      <div className={styles.containerSwiper}>
        <Swiper
          spaceBetween={10}
          slidesPerView={4.2}
          centeredSlides={false}
          pagination={false}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          loop
        >
          <SwiperSlide>
            <PromotionsBannersInstagram img={instagram1} />
          </SwiperSlide>
          <SwiperSlide>
            <PromotionsBannersInstagram img={instagram2} />
          </SwiperSlide>
          <SwiperSlide>
            <PromotionsBannersInstagram img={instagram3} />
          </SwiperSlide>
          <SwiperSlide>
            <PromotionsBannersInstagram img={instagram4} />
          </SwiperSlide>
          <SwiperSlide>
            <PromotionsBannersInstagram img={instagram4} />
          </SwiperSlide>
          <SwiperSlide>
            <PromotionsBannersInstagram img={instagram4} />
          </SwiperSlide>
          <SwiperSlide>
            <PromotionsBannersInstagram img={instagram4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
