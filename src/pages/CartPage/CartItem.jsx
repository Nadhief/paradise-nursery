import { useDispatch } from "react-redux";
import {
  addItem,
  updateQuantity,
  removeItem,
} from "../../redux/slices/CartSlice";

import "./CartPage.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <div className="cart-item__image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item__content">
        <h3>{item.name}</h3>

        <p className="cart-item__price">
          ${item.price.toFixed(2)}
        </p>

        <p className="cart-item__subtotal">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>

        <div className="cart-item__actions">
          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  type: "decrement",
                })
              )
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  type: "increment",
                })
              )
            }
          >
            +
          </button>
        </div>

        <button
          className="cart-item__delete"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default CartItem;