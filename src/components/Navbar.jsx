import React from "react";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const linkStyle = (page) => ({
    color: currentPage === page ? "#ffcccb" : "white",
    textDecoration: "none",
    cursor: "pointer",
  });

  return (
    <nav style={{ background: "#b30000", padding: "1rem", display: "flex", gap: "2rem" }}>
      <span onClick={() => setCurrentPage("home")} style={linkStyle("home")}>
        Home
      </span>
      <span onClick={() => setCurrentPage("about")} style={linkStyle("about")}>
        About
      </span>
      <span onClick={() => setCurrentPage("contact")} style={linkStyle("contact")}>
        Contact
      </span>
    </nav>
  );
};

export default Navbar;
