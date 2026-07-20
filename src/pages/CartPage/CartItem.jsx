import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  updateQuantity,
  removeItem,
} from "../../redux/slices/CartSlice";

import "./CartPage.css";

const CartItem = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Total quantity of all plants
  const calculateTotalPlants = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Total amount of all items
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <section className="cart-page">
      <div className="container">
        <h1 className="cart-page__title">Shopping Cart</h1>

        <div className="cart-page__summary">
          <h3>Total Plants: {calculateTotalPlants()}</h3>

          <h3>
            Total Cart Amount: $
            {calculateTotalAmount().toFixed(2)}
          </h3>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-page__empty">
            <h2>Your cart is empty.</h2>

            <Link
              to="/products"
              className="cart-page__continue"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-page__list">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                >
                  <div className="cart-item__image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="cart-item__content">
                    <h3>{item.name}</h3>

                    <p>
                      Unit Price: $
                      {item.price.toFixed(2)}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p>
                      Item Total: $
                      {(item.price * item.quantity).toFixed(2)}
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
                      onClick={() =>
                        dispatch(removeItem(item.id))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-page__footer">
              <Link
                to="/products"
                className="cart-page__continue"
              >
                Continue Shopping
              </Link>

              <button
                className="cart-page__checkout"
                onClick={() =>
                  alert("Coming Soon")
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartItem;