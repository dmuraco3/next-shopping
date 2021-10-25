import styles from "./navbar.module.scss";
import { useEffect } from "react";
import { FaUserCircle, FaShoppingBag, FaCheckCircle } from "react-icons/fa";
import {
  add,
  remove,
  removeJustAdded,
  selectCart,
  selectAdded
} from "../../stores/reducers/cart";
import { useSelector } from "react-redux";
import { store } from "../../stores/configureStore";
import { useRouter } from "next/dist/client/router";

import {signIn, signOut, useSession} from 'next-auth/client'

import Image from 'next/image'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    cursor: "pointer",
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div onClick={handleClick} className={` ${styles.NavLink} ${router.asPath === href && styles.ActiveNavLink}`}>
      {children}
    </div>
  )
}


export default function Navbar() {
  const cart = useSelector(selectCart);
  const justAdded = useSelector(selectAdded);

  const [session, status] = useSession();
  const router = useRouter()

  const notActive = false;

  const cartSize = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  useEffect(() => {
    if (justAdded) {
      let JustAddedTimer = setTimeout(
        () => {
          store.dispatch(removeJustAdded())
        },
        3000
      );
      return () => {
        clearTimeout(JustAddedTimer);
      };
    }
  }, [ justAdded]);
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.NavbarLogo}>
            <Image className={styles.NavbarLogoImage} layout="fill" width={30} height={30} sizes="30" src="/LOGO.svg" alt="LOGO" onClick={() => {
              router.push('/')
            }}/>
        </div>
        <div className={styles.NavComponents}>
          <ActiveLink href="/new">New</ActiveLink>
          <ActiveLink href="/women">Women</ActiveLink>
          <ActiveLink href="/men">Men</ActiveLink>



          <div className={` ${styles.UserActions}`}>
            <div className={styles.User}>
              <FaUserCircle size={30} />
              {!session && <span className={styles.UserDo} onClick={() => signIn()}>Log In</span>}
              {session && <span className={styles.UserDo} onClick={() => signOut()}>Sign out</span>}
            
            </div>
            <div className={styles.UserCart} onClick={() => {
              router.push('/cart')
            }}>
              <FaShoppingBag size={35} className={styles.ShoppingBag} />
              <span className={styles.CartContent}>{cartSize()}</span>
            </div>
            {justAdded && (
              <div className={styles.JustAdded}>
                <div>
                  <div className={styles.TopActions}>
                    <span className={styles.notif}>
                      <FaCheckCircle size={15} className={styles.GreenCheck} />{" "}
                      Added to cart
                    </span>
                    <span
                      className={styles.exit}
                      onClick={() => {
                        store.dispatch(removeJustAdded());
                      }}
                    >
                      x
                    </span>
                  </div>
                  <div className={styles.Product}>
                    <div className={styles.ProductImageContainer}>
                      <img
                        width="100%"
                        src={justAdded.image}
                        className={styles.ProductImage}
                        alt="Product"
                      />
                    </div>
                    <div className={styles.ProductInfo}>
                      <span className={styles.ProductName}>
                        {justAdded.name}
                      </span>

                      <span className={styles.ProductCategory}>
                        {justAdded.gender} {justAdded.category}
                      </span>

                      <span className={styles.ProductPrice}>
                        ${justAdded.price}
                      </span>
                    </div>
                    <div className={styles.UserInteract}>
                      <div className={styles.ViewCartButton}>
                        <span>View Cart ({cartSize()})</span>
                      </div>
                      <div className={styles.ButtonSpacer} />
                      <div className={styles.CheckoutButton}>
                        <span>Checkout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )}
          </div>
        </div>
      </nav>
      <div className={justAdded && styles.blur}></div>
    </div>
  );
}
