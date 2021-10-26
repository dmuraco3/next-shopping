import { useState, useEffect } from "react";

import { add, remove, selectCart } from "../../stores/reducers/cart";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../stores/configureStore";

import { useRouter } from "next/router";


import Footer from "../../components/Footer";

import styles from "../men/men.module.scss";

import Image from "next/image"

export default function New() {
  const [clothes, setClothes] = useState();
  const [pageLength, setPageLength] = useState(32);
  const [pointer, setPointer] = useState(0);

  const router = useRouter();

  const cart = useSelector(selectCart);
  useEffect(() => {
    if (!clothes) {
      let url = `/api/products/men?pageLength=${pageLength}&pointer=${pointer}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setClothes(data));
    }
  }, [pageLength, pointer, clothes, setClothes]);

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

  return (
    <div className={styles.Main}>
      <div className={styles.TopHeader}>
        <h1 className={styles.ProductCategory}>Shop New</h1>
      </div>
      
      <div className={styles.ProductLayout}>
        <div className={styles.ProductSettings}>
          <div className={styles.Left}></div>
          <div className={styles.Right}>
            {clothes && (
              <span className={styles.ItemCount}>{clothes.length}</span>
            )}
          </div>
        </div>
        <div className={styles.ProductList}>
          {clothes &&
            clothes.map((item, index) => (
              <div
                className={styles.Product}
                key={index}
                onClick={() => {
                  router.push(`/product/${item.id}`);
                }}
              >
                <div className={styles.ProductImageContainer}>
                  <Image
                    className={styles.ProductImage}
                    src={item.pictures[0]}
                    width="100%"
                    objectFit="cover"
                    layout="fill"

                    alt={item.name}
                  />
                </div>
                <div className={styles.ProductInfo}>
                  <span className={styles.ProductName}>{item.name}</span>
                  <span className={styles.ProductPrice}>${item.price}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
