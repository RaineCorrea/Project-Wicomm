import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./SectionBanner.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { SectionPromotionsBanners } from "../SectionPromotionsBanners/SectionPromotionsBanners";
import banner from "../assets/svg/banner.svg";

export function SectionBanner() {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop
      >
        <SwiperSlide>
          <SectionPromotionsBanners
            title={
              "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's."
            }
            img={banner}
            textLink={"EXPLORAR"}
            link={"#"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionPromotionsBanners
            title={
              "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's."
            }
            img={banner}
            textLink={"EXPLORAR"}
            link={"#"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionPromotionsBanners
            title={
              "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's."
            }
            img={banner}
            textLink={"EXPLORAR"}
            link={"#"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionPromotionsBanners
            title={
              "Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's."
            }
            img={banner}
            textLink={"EXPLORAR"}
            link={"#"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
