import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./Banner.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { PromotionsBanners } from "../PromotionsBanners/PromotionsBanners";
import promotionBannerDesktop from "../assets/svg/promotionBannerDesktop.svg";

export function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop
      >
        <SwiperSlide>
          <PromotionsBanners
            img={promotionBannerDesktop}
            textButton={"VER COLEÇÃO"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsBanners
            img={promotionBannerDesktop}
            textButton={"VER COLEÇÃO"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsBanners
            img={promotionBannerDesktop}
            textButton={"VER COLEÇÃO"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsBanners
            img={promotionBannerDesktop}
            textButton={"VER COLEÇÃO"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
