import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { store } from "../stores/configureStore";
import { increment, decrement, selectCount } from "../stores/reducers/counter";
export default function Home() {
  const count = useSelector(selectCount);

  const incr = () => {
    store.dispatch(increment());
  };

  const [menClothes, setMenClothes] = useState();

  useEffect(() => {
    if (!menClothes) {
      fetch("/api/products/men")
        .then((response) => response.json())
        .then((data) => setMenClothes(data));
    }
  }, [menClothes, setMenClothes]);

  return (
    <div>
      <div>
        <button onClick={() => incr()}>increment</button>
        <span>count: {count}</span>
        <button
          onClick={() => {
            store.dispatch(decrement());
          }}
        >
          decrement
        </button>
      </div>
      <div className="MenClothes">
        {menClothes && (
          <div>
            {menClothes.map((item, index) => (
              <div key={index} style={{ border: "solid 1px black" }}>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {item.images.map((item, index) => (
                    <img
                      key={index}
                      style={{ flex: "0 1 23%" }}
                      src={item}
                      alt="product"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
