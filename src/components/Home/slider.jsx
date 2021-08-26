import react, { Component, useEffect, useState } from "react";
import { Image } from "antd";
import firebase from "../util/firebase.js";
import kk from "/Users/admin/Desktop/ReactAppElevation/src/img/bg/backgroud.jpg";

function Slider() {
  const [todolist, setTodoList] = useState("all");
  useEffect(() => {
    const todoref = firebase.database().ref("BannerImage");
    todoref.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todolist = [];
      for (let id in todos) {
        let keys = todos[id].keys;
        todolist.push({ id, keys, ...todos[id] });
      }
      setTodoList(todolist);
    });
  }, []);
  var d = [];
  for (var i = 0; i < todolist.length; i++) {
    d = todolist[i].imageUrl;
  }
  return (
    <div className="template-slider-area">
      <div className="slider-wrapper">
        <div
          className="single-slider slide-4"
          style={{
            background: `url(${d} )center center /
            cover`,
          }}
        >
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
export default Slider;
