import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import styles from "./product.module.scss";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  return (
    <>
      <div>this is product {JSON.stringify(data)}</div>
      {data && (
        <div className={styles.container}>
          <div className={styles.ProductImages}>
            {data.pictures.map((item, index) => (
              <div key={index} className={styles.ProductImageContainer}>
                <img src={item} alt={`Product ${index}`} width="100%" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
