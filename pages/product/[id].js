import styles from "./product.module.scss";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  const [slides, setSlides] = useState([]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const generateSlides = (pictures) => {
    let slides = [];
    let pics = [
      "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540",
      "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540",
      "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540",
      "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540"
    ];
    pics.map((picture, index) => {
      slides.push(
        <SwiperSlide key={index} className={styles.Slide}>
          <img src={picture} className={styles.ProductImage} alt="" />
        </SwiperSlide>
      );
    });
    setSlides(slides);
  };

  const sizes = {
    styles: [
      {
        title: "pink",
        pictures: {}
      }
    ]
  };
  useEffect(() => {
    if (!data) {
      fetch(`/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          generateSlides(data.pictures);
        });
    }
  });
  return (
    <>
      {data && (
        <div className={styles.ProductContainer}>
          <div className={styles.ProductImages}>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff"
              }}
              loop={true}
              spaceBetween={0}
              navigation={false}
              thumbs={{ swiper: thumbsSwiper }}
              className={`${styles.Carousel} Carousel`}
            >
              {slides}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className={`${styles.Carousel} Carousel`}
            >
              {slides}
            </Swiper>
          </div>
          <div className={styles.ProductInfo}>
            <div className={styles.ProductName}>{data.name}</div>
            <div className={styles.ProductPrice}>${data.price}</div>
            <div className={styles.ProductDescription}>{data.description}</div>
            <div>
              <button
                onClick={() => {
                  console.log(data);
                }}
              >
                click me to show product data
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
