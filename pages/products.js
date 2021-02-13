import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

import Product from "../components/Product";

const products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    get_products();
  }, []);

  async function get_products() {
    try {
      // const url = "http://localhost:3000";
      const { data: products } = await axios.get(`/api/products`);
      setProducts(products);
      setLoading(false);
    } catch (ex) {
      console.log("error fetching products");
      setLoading(false);
    }
  }
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <div className="container">
        {loading && (
          <div className="text-center m-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6" key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps = async (ctx) => {
//   return { props: { ctx } };
// };

export default products;
