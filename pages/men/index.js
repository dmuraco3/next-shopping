import { useState, useEffect } from "react";

import { add, remove, selectCart } from "../../stores/reducers/cart";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../stores/configureStore";

import {Url} from "url";

import styles from './men.module.scss'

export default function Men() {
  const [clothes, setClothes] = useState();
  const [pageLength, setPageLength] = useState(32)
  const [pointer, setPointer] = useState(0);
  const cart = useSelector(selectCart);
  useEffect(() => {
    if(!clothes) {
      let url = (`http://localhost:3000/api/products/men?pageLength=${pageLength}&pointer=${pointer}`)
      fetch(url)
      .then(response => response.json())
      .then(data => setClothes(data))
    }
  }, [clothes, setClothes]);

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
        <h1 className={styles.ProductCategory}>
          Shop Men
        </h1>
      </div>
      <div className={styles.SideNav}>
        <h1></h1>
      </div>
      <div className={styles.ProductLayout}>
        <div className={styles.ProductSettings}>
          <div className={styles.Left}>

          </div>
          <div className={styles.Right}>
            {clothes && <span className={styles.ItemCount}>
              {clothes.length}
            </span>}
            
          </div>
        </div>
        <div className={styles.ProductList}>
          {clothes && clothes.map((item, index) => (
            <div className={styles.Product} key={index}>
              <div className={styles.ProductImage}>{JSON.stringify(item)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
