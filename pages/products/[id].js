import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail({ id }) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    get_product();
  }, []);

  const get_product = async () => {
    const pid = id || router.query.id;
    const { data: product } = await axios.get(`/api/products/${pid}`);
    setProduct(product);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      {loading && (
        <div className="text-center m-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="d-lg-flex flex-xs-column gap-5 container mt-5">
        {product.image && (
          <img
            src={`/images/${product.image}.jpg`}
            alt={product.name}
            className="img-fluid"
          />
        )}
        <div className="container">
          <h2 className="display-1 p-0 mt-0">{product.name}</h2>
          <p className="text-success display-2">
            <strong>Price: </strong>
            {product.price}LE
          </p>
          <p className="text-warning display-2">
            <strong>Rating: </strong>
            {product.rating}
          </p>
          <div className="d-grid">
            <button className="btn btn-outline-success mb-3">
              <i className="bi bi-cart-plus-fill"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = (ctx) => {
  return { props: { id: ctx.params.id } };
};

// const get_products = async () => {
//   try {
//     const url = "http://localhost:3000";
//     const { data: products } = await axios.get(`${url}/api/products`);
//     return products;
//   } catch (ex) {
//     return ex.message;
//   }
// };

// export const getStaticProps = async ({ params }) => {
//   const products = await get_products();
//   const product = products.find((p) => p._id == params.id);
//   return { props: { product } };
// };

// export const getStaticPaths = async (ctx) => {
//   const products = await get_products();
//   const paths = products.map((p) => {
//     return { params: { id: p._id.toString() } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
