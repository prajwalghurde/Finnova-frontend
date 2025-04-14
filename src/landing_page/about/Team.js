import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/prajwal1.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Prajwal Ghurde</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          In 2025, Tech enthusiast Prajwal Ghurde founded Finnova to solve the trading challenges he experienced in the markets. Fueled by a passion for technology and innovation, he reimagined stockbroking in India—transforming Finnova into a trailblazer that reshaped the financial landscape with transparency, simplicity, and user-first platforms.

</p>
         
          
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
