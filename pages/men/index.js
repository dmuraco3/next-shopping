import { useState, useEffect } from "react";

import { add, remove, selectCart } from "../../stores/reducers/cart";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../stores/configureStore";
export default function Men() {
  const [featuredClothes, setFeaturedClothes] = useState();
  const cart = useSelector(selectCart);
  useEffect(() => {
    if (!featuredClothes) {
      fetch("/api/products/men")
        .then((response) => response.json())
        .then((data) => setFeaturedClothes(data));
    }
  }, [featuredClothes, setFeaturedClothes]);

  function addItemToCart(item) {
    store.dispatch(
      add({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.pictures[0],
        quantity: 0
      })
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "0 1 50%" }}>
          <h1>shop men</h1>
        </div>
        <div style={{ flex: "0 1 50%" }}>
          <h1 style={{ textAlign: "right" }}>cart</h1>
          {cart.length !== 0 &&
            cart.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: "10px",
                  border: "solid 1px grey"
                }}
              >
                {/* this is where cart items show up  */}
                <div style={{ flex: "0 1 20%" }}>
                  <img src={item.image} alt="shirt" width="100%" />
                </div>
                <div style={{ paddingLeft: 10, flex: "0 1 60%" }}>
                  <span>{item.name}</span>
                  <br />
                  <span>${item.price}</span>
                  <br />
                  <span>quantity: {item.quantity}</span>
                </div>
                <div style={{ textAlign: "center", flex: "0 1 20%" }}>
                  <span
                    onClick={() => {
                      store.dispatch(remove(index));
                    }}
                  >
                    remove from cart
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        {featuredClothes &&
          featuredClothes.map((item, index) => (
            <div
              style={{
                padding: 10,
                border: "solid 1px black",
                width: "fit-content"
              }}
            >
              <div>
                <img src={item.pictures[0]} alt="shirt" width="50%" />
              </div>
              <span>{item.name}</span>
              <div>
                {/* this is where items get added to cart */}
                <button
                  onClick={() => {
                    addItemToCart(item);
                  }}
                >
                  Add to cart
                </button>
                <button>Add to favorites</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
