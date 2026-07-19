import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconShoppingCart } from "@tabler/icons-react";

import { publicMenus } from "../../constanst/navbar";

import "./index.css";

const Navbar = () => {
  const totalItems = useSelector((state) => state.cart.items.length);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__brand">
          <h2>Paradise Nursery</h2>
        </div>

        <nav className="navbar__menu">
          {publicMenus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              {menu.label}
            </NavLink>
          ))}

          <NavLink to="/cart" className="navbar__cart">
            <IconShoppingCart size={24} stroke={2} />

            {totalItems > 0 && (
              <span className="navbar__badge">
                {totalItems}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;