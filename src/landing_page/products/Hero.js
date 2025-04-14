import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
              <button
          className="p-2 btn btn-dark fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <a href="https://finnova-dashboard.onrender.com/" style={{textDecoration:"none"}}>Try Flyte Now</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
