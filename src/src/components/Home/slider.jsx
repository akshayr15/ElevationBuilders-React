import { render } from "@testing-library/react";
import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="template-slider-area">
        <div className="slider-wrapper">
          <div className="single-slider slide-4">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 col-sm-9">
                  <div className="slider-content text-left">
                    <div className="slider-content-wrapper">
                      <p>
                        <span>Find your perfect home</span>
                      </p>
                      <h1>
                        <a href="#">Elevation Builders</a>
                      </h1>

                      <div className="slider-btn">
                        <a
                          className="btn btn-default"
                          style={{ backgroundColor: "rgb(48, 86, 211)" }}
                          href="#"
                        >
                          Projects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Slider;
