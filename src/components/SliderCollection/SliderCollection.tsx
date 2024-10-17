import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./SliderCollection.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Collection } from "../Collection/Collection";
import { CollectionLink } from "../CollectionLink/CollectionLink";
import collection1 from "../assets/svg/collection1.svg";
import collection2 from "../assets/svg/collection2.svg";
import collection3 from "../assets/svg/collection3.svg";
import collection4 from "../assets/svg/collection4.svg";

export function SliderCollection() {
  return (
    <div className={styles.container}>
      <span className={styles.textCollection}>NAVEGUE PELAS CATEGORIAS</span>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        centeredSlides={false}
        autoplay={false}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <Collection img={collection1} link={"#"} title={"CLÁSSICO"} />
        </SwiperSlide>
        <SwiperSlide>
          <Collection img={collection2} link={"#"} title={"MINIMALISMO"} />
        </SwiperSlide>
        <SwiperSlide>
          <Collection img={collection3} link={"#"} title={"MAXIMALISMO"} />
        </SwiperSlide>
        <SwiperSlide>
          <Collection img={collection4} link={"#"} title={"BOHO"} />
        </SwiperSlide>
        <SwiperSlide>
          <CollectionLink link={"#"} title={"VER TUDO"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
