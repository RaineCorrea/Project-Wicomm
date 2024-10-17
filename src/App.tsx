import { Banner } from "./components/Banner/Banner";
import { BannerInstagram } from "./components/BannerInstagram/BannerInstagram";
import { BannerVideo } from "./components/BannerVideo/BannerVideo";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Newsletter } from "./components/Newsletter/Newsletter";

import { bannerVideo } from "./mocks/bannerVideo";
import { bannerSelections } from "./mocks/bannerSelections";
import { BannerSelections } from "./components/BannerSelections/BannerSelections";
import { SliderCollection } from "./components/SliderCollection/SliderCollection";
import "./global.css";
import { SliderBeneficio } from "./components/SliderBeneficio/SliderBeneficio";
import { SliderProduct } from "./components/SliderProduct/SliderProduct";
import { Separate } from "./components/Separate/Separate";
import { SectionBanner } from "./components/SectionBanner/SectionBanner";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Separate />
      <SliderBeneficio />
      <SectionBanner />
      <SliderProduct />
      <SliderCollection />
      <BannerSelections
        img={bannerSelections[0].img}
        title={bannerSelections[0].title}
        subTitle={bannerSelections[0].subTitle}
        description={bannerSelections[0].description}
        linkSelection={bannerSelections[0].linkSelection}
      />
      <BannerVideo
        title={bannerVideo[0].title}
        subTitle={bannerVideo[0].subTitle}
        img={bannerVideo[0].img}
        linkGat={bannerVideo[0].linkGat}
        videoUrl={bannerVideo[0].videoUrl}
      />
      <BannerInstagram />
      <Newsletter />
      <Footer />
    </>
  );
}
