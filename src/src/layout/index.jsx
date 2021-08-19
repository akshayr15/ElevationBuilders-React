import React from "react";
import AppHeader from "./AppHeader";
import AppView from "./AppView";
import AppFooter from "./AppFooter";

function AppLayout(props) {
  return (
    <>
      <AppHeader />
      <AppView>{props.children}</AppView>
      <AppFooter />
    </>
  );
}

export default AppLayout;
