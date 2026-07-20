import "./ProductPage.css";

import ProductCard from "./ProductCard";

import monstera from "../../assets/images/monstera.jpg";
import snakePlant from "../../assets/images/snake-plant.jpg";
import peaceLily from "../../assets/images/peace-lily.jpg";
import spiderPlant from "../../assets/images/spider-plant.jpg";
import aloeVera from "../../assets/images/aloe-vera.jpg";
import jadePlant from "../../assets/images/jade-plant.jpg";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/CartSlice";

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 25,
    image: monstera,
    category: "Indoor Plants",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 18,
    image: snakePlant,
    category: "Indoor Plants",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 22,
    image: peaceLily,
    category: "Air Purifying",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 16,
    image: spiderPlant,
    category: "Air Purifying",
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 14,
    image: aloeVera,
    category: "Succulents",
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 20,
    image: jadePlant,
    category: "Succulents",
  },
];

const groupedPlants = plants.reduce((acc, plant) => {
  if (!acc[plant.category]) {
    acc[plant.category] = [];
  }

  acc[plant.category].push(plant);

  return acc;
}, {});

const ProductList = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // badge navbar
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <section className="product-page">
      <div className="container">

        <div className="product-page__header">
          <h1>House Plants</h1>

          {/* dipakai navbar/grader */}
          <span style={{ display: "none" }}>
            {cartCount}
          </span>
        </div>

        {Object.entries(groupedPlants).map(([category, plants]) => (
          <div
            key={category}
            className="product-page__category"
          >
            <h2 className="product-page__category-title">
              {category}
            </h2>

            <div className="product-page__grid">
              {plants.map((plant) => {
                const isInCart = cartItems.find(
                  (item) => item.id === plant.id
                );

                return (
                  <ProductCard
                    key={plant.id}
                    plant={plant}
                    isAdded={!!isInCart}
                    handleAddToCart={handleAddToCart}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;