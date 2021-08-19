import react, { Component, useEffect, useState } from "react";
import { Route, useHistory, Link } from "react-router-dom";
import Scroll from "react-scroll";

import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./index.css";

function Header() {
  const { Header, Content, Footer } = Layout;
  const ScrollLink = Scroll.ScrollLink;
  const [navbar, setNavbar] = useState(true);
  const history = useHistory();

  const changebackground = () => {
    const top =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
    if (top > 80) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    // ismounted
    window.addEventListener("scroll", changebackground, false);
    // before component destory
    return () => {
      window.removeEventListener("scroll", changebackground);
    };
  }, []);

  const handleNavigate = (e) => {
    switch (e.key) {
      case '1':
        history.push('/home');
        break;
      case '2':
        history.push('/projects');
        break;
        case '3':
        history.push('/about-us');
        break;
      case '4':
        history.push('/why-us');
        break;      
      case '5':
        history.push('/contact-us');
        break;
    }

  }

  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            height: "100px",
          }}
        >
          <div className="logo"></div>

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2 "]}>
            <Menu.Item key="0" style={{ fontWeight: "400" }}>
              Elevation Builders
            </Menu.Item>
            <Menu.Item key="1" style={{ marginLeft: "500px" }} onClick={(id) => handleNavigate(id)}>
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={(id) => handleNavigate(id)}>Projects</Menu.Item>
            <Menu.Item key="3" onClick={(id) => handleNavigate(id)}>Why us</Menu.Item>
            <Menu.Item key="4" onClick={(id) => handleNavigate(id)}>About</Menu.Item>
            <Menu.Item key="5" onClick={(id) => handleNavigate(id)}>
              Contact us
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default Header;
