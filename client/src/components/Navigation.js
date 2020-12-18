import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";

function Navigation() {
  let pages = ["Projects", "Additional Projects", "About", "Contact"];
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light s-theme mb-5 px-5 rounded-pill">
      <a class="navbar-brand" href="/">
        Home
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {pages.map((page) => {
            return (
              <li class="nav-item">
                <a class="nav-link" href={page.replace(" ", "")}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
