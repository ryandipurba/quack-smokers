import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer
      className="text-center text-white sticky-bottom"
      // style={{ backgroundColor: "#f1f1f1" }}
    >
      {/* <!-- Grid container --> */}
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Discord --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://discord.gg/A7Hh9j5g"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-discord"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/quacksmokers"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Tiktok --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://vm.tiktok.com/TTPd6W38NU/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-tiktok"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/quacksmokers/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "#403e3e" }}
      >
        <span className="text-light">© 2021 Copyright: quacksmokers.com</span>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}
