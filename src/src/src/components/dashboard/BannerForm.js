import React, { useState } from "react";
import firebase, { storage } from "../util/firebase.js";
import { Button } from "antd";
import { Progress } from "antd";
import { Select, Alert } from "antd";
import TextArea from "antd/lib/input/TextArea";
export default function BannerForm(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [keys, setKeys] = useState("living room");
  const handleOnChanges = (key) => {
    setKeys(key);
  };

  const handleOnChange = (e, key) => {
    switch (key) {
      case "title":
        setTitle(e.target.value);

        break;
      case "subtitle":
        setSubtitle(e.target.value);
        break;

      default:
        return "error";
    }
  };

  function createTodo() {
    const uploadtask = storage.ref(`images/${image.name}`).put(image);
    //console.log(uploadtask);
    uploadtask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        //   console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageUrl(url);
          });
      }
    );
    const todoref = firebase.database().ref("TodoBanner");
    const todo = {
      title,
      subtitle,
      imageUrl,
    };

    //   console.log(title);
    // console.log(subtitle);
    //console.log(imageUrl);
    todoref.push(todo);
  }
  const { Option } = Select;
  function handleChange(value) {
    // console.log(`selected ${value}`);
  }
  function handleImageupdload(e) {
    console.log(e, "====");
    if (e.target.files[0]) {
      setImage(e.target.files);
      console.log(setImage, "====obj1");
    }
  }

  return (
    <div className="container">
      <div className="header">
        <div className="row">
          <div className="col-md-12">
            <div
              className="area-heading text-center"
              style={{ marginTop: "150px" }}
            >
              <h3 className="area-title">
                Banner Image and content Modification
              </h3>
              <p>You can add new or update content here</p>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="form-row">
          <label for="validationDefault01">Keys</label>

          <div className="col-md-3 mb-3">
            <label for="validationDefault02">Image</label>
            <input
              type="file"
              name="myImage"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={(e) => handleImageupdload(e)}
            ></input>
          </div>
          <div className="col-md-8 mb-3" style={{ marginTop: "20px" }}>
            {image ? (
              <Progress type="circle" percent={100} width={40} />
            ) : (
              <Progress
                type="circle"
                percent={100}
                width={40}
                status="exception"
              />
            )}
          </div>
          <div className="col-md-12 mb-3">
            <label for="validationDefault01">Title</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="First name"
              onChange={(e) => handleOnChange(e, "title")}
              value={title}
              required
            ></input>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationDefault04">Subtitle</label>
            <textarea
              type="textarea"
              className="form-control"
              id="validationDefault04"
              onChange={(e) => handleOnChange(e, "subtitle")}
              value={subtitle}
              required
            ></textarea>
          </div>
        </div>
        <div
          className="col-12"
          style={{ marginTop: "10px", textAlign: "center" }}
        >
          <Button
            type="primary"
            style={{ marginBottom: "10px" }}
            onClick={() => createTodo()}
          >
            Add Todo
          </Button>
        </div>
      </form>
    </div>
  );
}
