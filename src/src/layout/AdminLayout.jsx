import React, { useContext } from "react";
import { UserContext } from "../router/UserContext";
import AppFooter from "./AppFooter";
function AppLayout3(props) {
  const { user, setUser } = useContext(UserContext);
  const refreshPage = () => {
    window.location.reload();
  };
  const handleSignout = () => {
    setUser(null);
    refreshPage();
  };
  return (
    <>
      <header class="header-area header-style-2" id="sticky-header">
        <div class="main-header-area transparent-header transparent-header-2">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="logo-wrapper">
                  <a class="logo" href="index.html">
                    Elevation builders
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <button
                  onClick={handleSignout}
                  style={{ marginTop: "25px", float: "right" }}
                  type="button"
                  className="btn btn-warning"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>{props.children}</div>
      <AppFooter></AppFooter>
    </>
  );
}

export default AppLayout3;
