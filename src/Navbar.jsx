import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          {/* <a class="navbar-brand" href="#">Netflix</a> */}
          <img className="navbar-brand" src='.\src\netflix.png' />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Register</a>
              </li>

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}