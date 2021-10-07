import styles from "./product.module.scss";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  return (
    <>
      <div>this is product {JSON.stringify(data)}</div>
      {data && (
        <div className={styles.container}>
          <div className={styles.ProductImages}>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff"
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
              rebuildOnUpdate={true}
            >
              {data &&
                data.pictures.map((item, index) => (
                  <SwiperSlide>
                    <img src={item} alt={`Product ${index}`} width="100%" />
                  </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              className="mySwiper"
            >
              {data &&
                data.pictures.map((item, index) => (
                  <SwiperSlide>
                    <img src={item} alt={`Product ${index}`} width="100%" />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
