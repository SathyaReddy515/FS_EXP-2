import React from "react";

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Bootstrap UI
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <h2 className="text-center mb-4">
          Experiment-2.1: Designing UI Using Bootstrap Components
        </h2>

        <div className="row g-4">
          {/* ✅ Card Section */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="https://via.placeholder.com/400x200?text=Bootstrap+Card"
                className="card-img-top"
                alt="card"
              />
              <div className="card-body">
                <h5 className="card-title">Bootstrap Cards</h5>
                <p className="card-text">
                  Cards are flexible and extensible content containers.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>

          {/* ✅ Button Section */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Bootstrap Buttons</h5>
                <p className="card-text">
                  Bootstrap provides stylish buttons with different colors.
                </p>

                <button className="btn btn-success me-2">Success</button>
                <button className="btn btn-warning me-2">Warning</button>
                <button className="btn btn-danger">Danger</button>
              </div>
            </div>
          </div>

          {/* ✅ Form Section */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Bootstrap Form</h5>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <button className="btn btn-primary w-100" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Footer */}
        <footer className="text-center mt-5 text-muted">
          <p>© 2026 Bootstrap UI Experiment</p>
        </footer>
      </div>
    </div>
  );
}
