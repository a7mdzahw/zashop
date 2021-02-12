import axios from "axios";
import { useRouter } from "next/router";

export default function Detail({ products }) {
  const router = useRouter();
  const product = products.find((p) => p._id == router.query.id);
  return (
    <div className="d-lg-flex flex-xs-column gap-5 container mt-5">
      <img
        src={`/images/${product.image}.jpg`}
        alt={product.name}
        className="img-fluid"
      />
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
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const url = "http://localhost:3000";
    const { data: products } = await axios.get(`${url}/api/products`);
    return { props: { products } };
  } catch (ex) {
    return { props: { error: ex.message } };
  }
};
