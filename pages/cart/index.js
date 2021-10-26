import styles from './cart.module.scss'

import { add, remove, selectCart, incrementQuantity } from "../../stores/reducers/cart";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../stores/configureStore";


import Image from 'next/image'


export default function Cart() {
    const cart = useSelector(selectCart);

    
    return (
        <div className={styles.main}>
            <div className={styles.CartMain}>
                <div className={styles.CartContainer}>
                    <h1 className={styles.CartHeader}>Cart</h1>
                    {cart && cart.map((item, index) => (
                        <div className={styles.CartItem} key={index}>
                            <div className={styles.CartItemLeft}>
                                <Image className={styles.CartItemImage} alt={item.name} src={item.image} objectFit="cover" layout="fill"/>
                            </div>
                            <div className={styles.CartItemRight}>
                                <div className={styles.CartItemInfo}>
                                    <span className={styles.CartItemName}>{item.name}</span>
                                    <span className={styles.CartItemPrice}><i>$</i>{item.price}</span>

                                </div>
                                <div className={styles.CartItemInteractive}>
                                    <div className={styles.CartItemQuantity}>
                                        <span className={styles.QuantityDown}> - </span>
                                        <span className={styles.Quantity}>{item.quantity}</span>
                                        <span className={styles.QuantityUp} onClick={(e) => {
                                            e.preventDefault();
                                            store.dispatch(incrementQuantity({id: item.id}))
                                        }}> + </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.Summary}>
                    <h1 className={styles.SummaryHeader}>Summary</h1>
                    <div className={styles.SubtotalContainer}>
                        <span className={styles.SubtotalText}>Subtotal</span>
                        <span className={styles.SubtotalText}>
                            {cart && cart.reduce((acc, item) => {return acc + item.price}, 0)}
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}