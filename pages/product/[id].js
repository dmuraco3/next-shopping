import styles from "./product.module.scss";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  add,
  remove,
  removeJustAdded,
  selectCart,
  selectAdded
} from "../../stores/reducers/cart";
import { useSelector } from "react-redux";
import { store } from "../../stores/configureStore";

// Import Swiper styles

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function Product({product}) {
  const cart = useSelector(selectCart);
  function addItemToCart(item) {
    store.dispatch(
      add({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.pictures[0],
        quantity: 1,
        category: item.categoryName,
        gender: item.gender
      })
    );
  }
  const router = useRouter();
  const { id } = router.query;
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
    if(slides.length === 0){
      generateSlides(product.pictures);
    }
  }, [slides])

  return (
    <>
      {product && (
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
            <div className={styles.ProductName}>{product.name} {product.id}</div>
            <div className={styles.ProductPrice}>${product.price}</div>
            <div className={styles.ProductDescription}>{product.description}</div>
            <div>
              <button onClick={(e) => {
                e.preventDefault()
                console.log(product);
                addItemToCart(product);
              }}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const id = context.query.id;
  
  if(id !== 'undefined') {
    const response = await fetch(`${process.env.NEXTAUTH_URL}api/products/${id}`);
    const product = await response.json();
    return {
      props: {
        product
      }
    }

  } else {
    return {
      props: {
        product: null
      }
    }
  }
}