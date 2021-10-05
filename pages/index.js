import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { store } from "../stores/configureStore";
import { increment, decrement, selectCount } from "../stores/reducers/counter";
import styles from "./index.module.scss";

import {BsFillLightningFill} from 'react-icons/bs'
export default function Home() {
  const count = useSelector(selectCount);

  const incr = () => {
    store.dispatch(increment());
  };

  const [newProducts, setNewProducts] = useState();

  const router = useRouter();

  useEffect(() => {
    if(!newProducts){
      fetch("/api/products/new")
      .then(response => response.json())
      .then(data => setNewProducts(data))
      .catch(err => console.error(err))
    }
  }, [newProducts, setNewProducts])

  return (
    <div>
      <div className={styles.BigLogo}>
        <h1 className={styles.BigLogoText}>
          HAPPY DAYS
        </h1>
        <img className={styles.BigLogoImage} src="/LOGO.svg" alt="LOGO"/>
      </div>
      <div className={styles.MainCategories}>
        <div className={styles.MainCategorySmall}>
          <h1 className={styles.MainCategoryText}>WOMEN</h1>
        </div>
        <div className={styles.MainCategoryBig}>
          <h1 className={styles.MainCategoryText}>NEW</h1>
        </div>
        <div className={styles.MainCategorySmall}>
          <h1 className={styles.MainCategoryText}>MEN</h1>
        </div>
      </div>
      <div className={styles.New}>
        <h1 className={styles.NewTitle}>
          New Drops
        </h1>
        <div className={styles.NewProducts}>
          <div className={styles.Container}>
            {newProducts && newProducts.map((item, index) => (
              <div className={styles.NewProduct} key={index}>
                <div className={styles.NewProductImageContainer}>
                  <img className={styles.NewProductImage} src={item.pictures[0]} alt={item.name} width="100%"/>
                  
                </div>
                <div className={styles.NewProductInfo}>
                  <span className={styles.NewProductName}>{item.name}</span>
                  <span className={styles.NewProductPrice}>${item.price}</span>
                </div>
              </div>
            ))}

          </div>

          <button className={styles.ShopNewButton} onClick={() => {
            router.push('/new')
          }}>
            Shop New
          </button>
        </div>
      </div>
      <div className={styles.Promotions}>
        <div className={styles.Left}>
          <div className={styles.Container}>
            <h4 className={styles.LightningContainer}><BsFillLightningFill size={32}/></h4>
            <h4 className={styles.Medium}>SALE IS ON!</h4>
            <h1 className={styles.Big}>25% OFF</h1>
            <h4 className={styles.Small}>25% off sitewide using SUMMER25 at checkout</h4>

          </div>

        </div>
        <div className={styles.Right}>

        </div>
      </div>
      <div className="MenClothes">

      </div>
    </div>
  );
}
