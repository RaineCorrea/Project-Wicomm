import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./SliderBeneficio.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Beneficio } from "../Beneficio/Beneficio";
import palm from "../assets/svg/palm.svg";
import beneficio from "../assets/svg/beneficio.svg";

export function SliderBeneficio() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.subContainerTextMain}>
          <span className={styles.textNumber}>10</span>
          <div className={styles.subContainerText}>
            <span>Benefício</span>
            <span>Principal</span>
            <span>Lorem ipsum dolor sit amet, consectetur.</span>
          </div>
        </div>
        <div className={styles.subContainerDescription}>
          <div className={styles.subContainerDescriptionMain}>
            <div className={styles.containerDescription}>
              <div className={styles.containerDescriptionMain}>
                <img src={beneficio} alt="Icone beneficio" />
                <div className={styles.texts}>
                  <span>Benefício Secundário</span>
                </div>
              </div>
              <div className={styles.description}>
                <span>Lorem ipsum dolor sit amet, consectetur al muad’ib.</span>
              </div>
            </div>

            <div className={styles.containerDescription}>
              <div className={styles.containerDescriptionMain}>
                <img src={beneficio} alt="Icone beneficio" />
                <div className={styles.texts}>
                  <span>Benefício Secundário</span>
                </div>
              </div>
              <div className={styles.description}>
                <span>Lorem ipsum dolor sit amet, consectetur al muad’ib.</span>
              </div>
            </div>

            <div className={styles.containerDescription}>
              <div className={styles.containerDescriptionMain}>
                <img src={beneficio} alt="Icone beneficio" />
                <div className={styles.texts}>
                  <span>Benefício Secundário</span>
                </div>
              </div>
              <div className={styles.description}>
                <span>Lorem ipsum dolor sit amet, consectetur al muad’ib.</span>
              </div>
            </div>
          </div>
          <div className={styles.containerSwiper}>
            <Swiper
              spaceBetween={20}
              slidesPerView={3.5}
              centeredSlides={false}
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
                <Beneficio img={palm} title={"Benefício Terciário"} />
              </SwiperSlide>
              <SwiperSlide>
                <Beneficio img={palm} title={"Benefício Terciário"} />
              </SwiperSlide>
              <SwiperSlide>
                <Beneficio img={palm} title={"Lisan Al Gaib"} />
              </SwiperSlide>
              <SwiperSlide>
                <Beneficio img={palm} title={"Lisan Al Gaib"} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
