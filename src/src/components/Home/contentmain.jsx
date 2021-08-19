import react, { Component, useEffect, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
class Contentmain extends Component {
  render() {
    return (
      <div class="donet-section theme-section theme-section-ex-padding" style={{ marginTop: "100px" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="area-heading text-center">
                <h3 class="area-title">Featured campaigns</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus sunt a recusandae molestias nobis reprehenderit
                  eaque laborum, veritatis accusantium aspernatur?
                  <Link to="/BBG.pdf" target="_blank" download>
                    Download
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="donate-feature-list navigation-style-1">
                <div class="single-donet">
                  <div class="donet-thumbnail">
                    <img src="img/bg/backgroud.jpg" alt="" />
                  </div>
                  <div class="donet-content">
                    <div class="donet-content-heading">
                      <h3>
                        <a href="#">Peace Of Mind Guaranteed</a>
                      </h3>

                      <p style={{ color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. In quae aut tempore fugiat, veritatis. Mollitia
                        consequatur, veritatis quidem id ipsum cumque nemo
                        quisquam, necessitatibus, aliquam error voluptate, et
                        incidunt soluta.
                      </p>
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
export default Contentmain;
