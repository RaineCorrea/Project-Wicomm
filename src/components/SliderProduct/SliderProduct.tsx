import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./SliderProduct.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Product } from "../Product/Product";

import flag from "../assets/svg/flag.svg";
import flagText from "../assets/svg/flagText.svg";
import product from "../assets/svg/product.svg";

import white from "../assets/svg/white.svg";

export function SliderProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.containerColor}>
        <img src={white} />
        <div className={styles.containerText}>
          <span className={styles.text}>Queridinho </span>
          <span className={styles.description}>deles</span>
          <a className={styles.link} href="#">
            VER TUDO
          </a>
        </div>
      </div>
      <div className={styles.containerSwiper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          loop
        >
          <SwiperSlide>
            <Product
              link={"#"}
              flag={flag}
              flagText={flagText}
              img={product}
              title={"Toca Túnel Módulos"}
              priceCompare={"R$00,00"}
              price={"R$0000,00"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              link={"#"}
              flag={flag}
              flagText={flagText}
              img={product}
              title={"Toca Túnel Módulos"}
              priceCompare={"R$00,00"}
              price={"R$0000,00"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              link={"#"}
              flag={flag}
              flagText={flagText}
              img={product}
              title={"Toca Túnel Módulos"}
              priceCompare={"R$00,00"}
              price={"R$0000,00"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Product
              link={"#"}
              flag={flag}
              flagText={flagText}
              img={product}
              title={"Toca Túnel Módulos"}
              priceCompare={"R$00,00"}
              price={"R$0000,00"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
