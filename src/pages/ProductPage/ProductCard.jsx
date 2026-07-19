import "./ProductPage.css";

const ProductCard = ({ plant, isAdded, handleAddToCart }) => {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={plant.image} alt={plant.name} />
      </div>

      <div className="product-card__content">
        <h3>{plant.name}</h3>

        <p className="product-card__price">${plant.price.toFixed(2)}</p>

        <button
          className="product-card__button"
          disabled={isAdded}
          onClick={()=>{
            handleAddToCart(plant)
          }}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
