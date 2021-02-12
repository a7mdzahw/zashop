import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="card m-2">
      <div className="card-img-top">
        <img
          src={`/images/${product.image}.jpg`}
          alt="opera"
          className="img-fluid"
        />
      </div>
      <div className="container pt-1">
        <div className="card-title mt-2">
          <h2>{product.name}</h2>
        </div>
        <div className="card-body">
          <p>
            <strong>Price: </strong>
            {product.price} LE
          </p>
          <Rating rating={product.rating} />
        </div>
      </div>
      <div className="d-grid card-footer">
        <button className="btn  btn-outline-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
