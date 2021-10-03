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
export default function Navbar() {
  const cart = useSelector(selectCart);
  const justAdded = useSelector(selectAdded);

  const notActive = false;

  const cartSize = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  useEffect(() => {
    if (notActive /*justAdded*/) {
      let JustAddedTimer = setTimeout(
        () => store.dispatch(removeJustAdded()),
        30000
      );
      return () => {
        clearTimeout(JustAddedTimer);
      };
    }
  }, [justAdded]);
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.NavbarLogo}>
          <img src="/LOGO.svg" alt="LOGO" />
        </div>
        <div className={styles.NavComponents}>
          <div className={styles.NavLink}>New</div>
          <div className={styles.NavLink}>Women</div>
          <div className={styles.NavLink}>Men</div>

          <div className={`${styles.NavLink} ${styles.UserActions}`}>
            <div className={styles.User}>
              <FaUserCircle size={30} />
              <span className={styles.UserDo}>Log In</span>
            </div>
            <div className={styles.UserCart}>
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
