import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/slices/CartSlice";

import "./CartPage.css";

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPlants = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <section className="cart-page">
      <div className="container">
        <h1 className="cart-page__title">Shopping Cart</h1>

        <div className="cart-page__summary">
          <p>
            <strong>Total Plants:</strong> {totalPlants}
          </p>

          <p>
            <strong>Total Cost:</strong> ${totalCost.toFixed(2)}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-page__empty">
            <h2>Your cart is empty.</h2>

            <Link to="/products" className="cart-page__continue">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-page__list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item__image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item__content">
                    <h3>{item.name}</h3>

                    <p>${item.price.toFixed(2)}</p>

                    <div className="cart-item__actions">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(addToCart(item))
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="cart-item__delete"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
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
                onClick={() => alert("Coming Soon")}
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

export default CartPage;