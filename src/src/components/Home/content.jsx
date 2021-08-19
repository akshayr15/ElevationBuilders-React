import react, { Component } from "react";
import { Button, Spin } from "antd";
import React, { useEffect, useState } from "react";
import firebase from "../util/firebase.js";
import { Table, Alert } from "antd";

export default function Content() {
  const [todolist, setTodoList] = useState("");
  useEffect(() => {
    const todoref = firebase.database().ref("Todo");
    todoref.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todolist = [];
      for (let id in todos) {
        todolist.push({ id, ...todos[id] });
      }
      todolist.forEach((x) => {
        x.name = x.title;
        x.age = x.content;
        x.key = x.description;
        x.address = x.image;
      });

      setTodoList(todolist);
    });
  }, []);
  return (
    <div className="container">
      <div className="donet-section theme-section theme-section-ex-padding" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="area-heading text-center">
                <h3 className="area-title">PEACE OF MIND GUARANTEED</h3>
                <p>
                  Building a new home or making alterations is one of the
                  biggest investments you’ll ever make, and if anything goes
                  wrong it could be the most costly too
                </p>
                <br></br>
                <p>
                  The Building Act and Consumer Guarantees Act both include
                  protection for consumers when undertaking building work.
                  However, if the building company you’ve chosen goes bust, or
                  something happens to your builder, this legislative protection
                  is of no value whatsoever. That’s why it makes sense to reduce
                  your risk by having an independent guarantee, just in case
                  something does go wrong. The Guarantee is transferrable, which
                  means it also protects future owners, making it a more
                  attractive investment if you decide to sel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
