import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import SearchInput from "../Form/SearchInput";
import { useCart } from "../../context/cart";
import {Badge} from "antd"
function Header() {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="" className="navbar-brand">
              🛒 Ecommerce App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput/>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                           to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : ""
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
