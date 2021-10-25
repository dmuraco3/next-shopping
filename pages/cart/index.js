import styles from './cart.module.scss'

import { add, remove, selectCart } from "../../stores/reducers/cart";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../stores/configureStore";

export default function Cart() {
    const cart = useSelector(selectCart);
    return (
        <div className={styles.main}>
            <div className={styles.CartContainer}>
                {cart && cart.map((item, index) => (
                    <div className={styles.CartItem} key={index}>
                        {JSON.stringify(item)}
                    </div>
                ))}
            </div>
            <div className={styles.summary}>
                
            </div>
        </div>
    )
}