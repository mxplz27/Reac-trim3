import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          Carrito de Compras
        </NavLink>

        <div className="d-flex align-items-center ms-auto">

          <ul className="navbar-nav flex-row gap-3 me-3">

            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-warning" : "")
                }
                end
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/articles"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-warning" : "")
                }
              >
                Artículos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/props"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-warning" : "")
                }
              >
                Props
              </NavLink>
            </li>

            {/* NUEVO */}
            <li className="nav-item">
              <NavLink 
                to="/products"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-warning" : "")
                }
              >
                Productos
              </NavLink>
            </li>

          </ul>

          {/* Buscador */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos..."
            />
            <button className="btn btn-light" type="submit">
              Buscar
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};