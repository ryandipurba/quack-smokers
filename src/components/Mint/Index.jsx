import React from "react";
import App from "../../App";
import "./style.css";
import Logo from "../../assets/image/logo.png";
import Gif from "../../assets/image/gif-quack-smocker.gif";

export default function Mint() {
  return (
    <div className="container-fluid mint">
      <div className="container">
        <div
          className="row align-items-center p-3"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-12  align-tem-center">
            <img src={Logo} alt="" className="logo" />
            <div className="row mt-5">
              <div className="col-md-6">
                <h1 className="display-2 tittle">Welcome to Quack Smokers</h1>
                <p style={{ fontSize: "25px" }} className="desc">
                  Quack Smokers are a unique NFT combining ducks and gang
                  culture that commit to a shocking work of Modern art.
                </p>
                <App />
              </div>
              <div className="col-md-6">
                <img
                  src={Gif}
                  alt="gif-quack-smockers"
                  srcset=""
                  className="gif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
