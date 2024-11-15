const NavBar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => setCategory("general")}
          style={{ cursor: "pointer" }}
        >
          <span className="badge bg-light text-dark fs-4">News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { label: "Technology", value: "technology" },
              { label: "Business", value: "business" },
              { label: "Health", value: "health" },
              { label: "Science", value: "science" },
              { label: "Sport", value: "sport" },
              { label: "Entertainment", value: "entertatment" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <div
                  className="nav-link px-3 py-2 text-light rounded"
                  style={{
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onClick={() => setCategory(item.value)}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
