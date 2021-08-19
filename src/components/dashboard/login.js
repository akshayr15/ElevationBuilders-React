import React, { useState, useContext } from "react";
import firebase, { storage } from "../util/firebase.js";
import { message, Space } from "antd";
import { Route, useHistory, Link } from "react-router-dom";
import { Button } from "antd";
import { Progress } from "antd";
import { Select, Alert } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { UserContext } from "../../router/UserContext";
export default function Form(props) {
  const { user, setUser } = useContext(UserContext);
  const [emails, setEmails] = useState(null);
  const [password, setPassword] = useState(null);
  const [emailverify, setEmailverify] = useState("");
  const [passwordverify, setPasswordverify] = useState("");
  const handleClick = () => {
    const todoref = firebase.database().ref("Login");
    todoref.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todolist = [];
      for (let id in todos) {
        todolist.push({ id, ...todos[id] });
      }

      todolist.forEach((x) => {
        /*  setEmailverify(x.email);
        setPasswordverify(x.password); */
        if (emails === x.email && password === x.password) {
          setUser(emailverify);
          history.push("/admin/dashboard");
        } else {
          error();
        }
      });
    });
  };
  const error = () => {
    message.error("Please enter correct credentials");
  };
  const history = useHistory();

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="row">
            <div className="col-md-12">
              <div
                className="area-heading text-center"
                style={{ marginTop: "150px" }}
              >
                <h3 className="area-title">Enter Your Admin Credentials</h3>
                <p>
                  You can add new or update content of the website after login
                </p>
              </div>
            </div>
          </div>
        </div>

        <form>
          <div className="conatiner">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmails(e.target.value)}
                value={emails}
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>

            <div class="col text-center">
              <button
                style={{ marginBottom: "10px" }}
                type="button"
                class="btn btn-primary"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer className="theme-footer-section">
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copy-right-info">
                  <p>
                    &copy; 2021 <span>AM Creative softwares</span>. All right
                    reserved by <a href="">AM Creative Softwares</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
