import react, { Component, useEffect, useState } from "react";
import { Image } from "antd";
import firebase from "../util/firebase.js";

function Project() {
  const [bannerItems, setBannerItems] = useState([]);
  const [active, setActive] = useState("all");
  const [todolist, setTodoList] = useState("all");

  const btnItems = [
    {
      name: "All House",
      key: "all",
    },
    {
      name: "Living Room",
      key: "living room",
    },
    {
      name: "Office",
      key: "office",
    },
    {
      name: "Decor",
      key: "decor",
    },
    {
      name: "Kitchen",
      key: "kitchen",
    },
    {
      name: "Bath",
      key: "bath",
    },
  ];
  const hanleChangeBanner = (key) => {
    setActive(key);
    getActiveBanners(key, todolist);
  };

  const getActiveBanners = (key, actualtodolist) => {
    if (key == "all") {
      setBannerItems(actualtodolist);
    } else {
      const activeBanner = actualtodolist.filter((x) => x.keys === key);
      console.log("hello", activeBanner);
      setBannerItems(activeBanner);
    }
  };

  // mounted
  useEffect(() => {
    const todoref = firebase.database().ref("Todo");
    todoref.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todolist = [];
      for (let id in todos) {
        let keys = todos[id].keys;
        todolist.push({ id, keys, ...todos[id] });
      }

      setTodoList(todolist);
      getActiveBanners("all", todolist);

      //setBannerItems(todolist);
      console.log("test", todolist);
      //    console.log(bannerItems);
      //setActive();
    });
  }, []);

  return (
    <div
      className="portfolio-area theme-section white-bg"
      style={{ marginTop: "100px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="area-heading text-center">
              <h2 className="area-title">Projects</h2>
              <p>The homes that we built</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-filter">
              <ul className="protfolio-filter">
                {btnItems.map((item) => (
                  <li
                    className={active === item.key ? "active" : ""}
                    key={item.key}
                    onClick={() => hanleChangeBanner(item.key)}
                  >
                    <a data-filter="*">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio-container">
              {bannerItems
                ? bannerItems?.map((x, index) => (
                    <div className="cat-1 cat-3 portfolio-item" key={index}>
                      <div className="item-content">
                        <Image src={x.imageUrl} />
                        <div className="portfolio-description">
                          <div className="description-content">
                            <h4>
                              <a href="#">{x.title}</a>
                            </h4>
                            <ul className="portfolio-cat">
                              <li>
                                <a href="#">{x.subtitle}</a>
                              </li>
                              <li>
                                <a href="#">{x.desc}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
