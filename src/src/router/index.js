import React, { Suspense, useEffect, useState, useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
  HashRouter,
} from "react-router-dom";

import routes from "./routes";
import routes2 from "./routes2";
import routes3 from "./routes3";
import { Provider } from "react-redux";
import FrontLayout from "../layout";
import AdminLayout from "../layout/AdminLayout";
import BackLayout from "../layout/BackLayout";
import store from "../store";
import { UserContext } from "./UserContext";

const getRoutes = (routes, Layout) =>
  routes.map((route) => (
    <Route
      key={route.name}
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <Layout>
          <route.component name={route.name} {...props} {...route.props} />
        </Layout>
      )}
    />
  ));

const Router = () => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect from="/" to="/home" exact></Redirect>

            {getRoutes(routes, FrontLayout)}
            <UserContext.Provider value={providerValue}>
              <Redirect from="/admin" to="/admin/login" exact></Redirect>
              {getRoutes(routes2, AdminLayout)}
              {getRoutes(routes3, BackLayout)}
            </UserContext.Provider>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
