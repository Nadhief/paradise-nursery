import "./ProductPage.css";

import ProductCard from "./ProductCard";

import monstera from "../../assets/images/monstera.jpg";
import snakePlant from "../../assets/images/snake-plant.jpg";
import peaceLily from "../../assets/images/peace-lily.jpg";
import spiderPlant from "../../assets/images/spider-plant.jpg";
import aloeVera from "../../assets/images/aloe-vera.jpg";
import jadePlant from "../../assets/images/jade-plant.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

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

const ProductPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <section className="product-page">
      <div className="container">
        <div className="product-page__header">
          <h1>House Plants</h1>
        </div>

        {/* mapping product by category */}
        {Object.entries(groupedPlants).map(([category, plants]) => (
          <div key={category} className="product-page__category">
            <h2 className="product-page__category-title">{category}</h2>

            <div className="product-page__grid">
              {plants.map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  isAdded={isAdded(plant.id)}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
