import React from "react";

function AppLayout2(props) {
  console.log(`layout2 ===>`, props);
  return (
    <>
      <header class="header-area header-style-2" id="sticky-header">
        <div class="main-header-area transparent-header transparent-header-2">
          <div class="container">
            <div class="row">
              <div class="col-md-2 col-sm-6 col-xs-6">
                <div class="logo-wrapper">
                  <a
                    class="logo"
                    href="index.html"
                    style={{ justifyContent: "center" }}
                  >
                    Elevation builders
                  </a>
                </div>
              </div>
              <div class="col-md-7 hidden-xs hidden-sm">
                <div class="menu-area">
                  <nav class="template-menu"></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>{props.children}</div>
    </>
  );
}

export default AppLayout2;
