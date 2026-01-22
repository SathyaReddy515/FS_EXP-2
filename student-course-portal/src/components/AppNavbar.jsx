import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";

export default function AppNavbar() {
  const { darkMode, setDarkMode, setToast } = useContext(AppContext);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // ✅ keep navbar updated if login/logout happens
  useEffect(() => {
    const checkLogin = () =>
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");

    window.addEventListener("storage", checkLogin);
    checkLogin();

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);

    setToast({
      open: true,
      msg: "Logged out successfully ✅",
      type: "info",
    });

    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"
      } shadow-sm`}
    >
      <div className="container">
        {/* Brand */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
        >
          <SchoolIcon /> LearnSphere
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto gap-2 align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/my-courses">
                My Courses
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/feedback">
                Feedback
              </NavLink>
            </li>

            {/* ✅ Login / Logout */}
            <li className="nav-item">
              {isLoggedIn ? (
                <button
                  className="btn btn-danger btn-sm px-3"
                  onClick={logout}
                >
                  <LogoutIcon sx={{ fontSize: 18, mr: 1 }} />
                  Logout
                </button>
              ) : (
                <NavLink className="btn btn-primary btn-sm px-3" to="/login">
                  Login
                </NavLink>
              )}
            </li>

            {/* 🌙 Dark Mode */}
            <li className="nav-item">
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
