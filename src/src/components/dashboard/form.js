import React, { useState } from "react";
import firebase, { storage } from "../util/firebase.js";
import { Button } from "antd";
import { Progress } from "antd";
import { Select, Alert } from "antd";
import TextArea from "antd/lib/input/TextArea";
export default function Form(props) {
  console.log("Login", props);

  const [title, setTitle] = useState(props?.form?.title);
  const [desc, setDesc] = useState(props?.form?.desc);
  const [subtitle, setSubtitle] = useState(props?.form?.subtitle);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [keys, setKeys] = useState(props?.form?.keys);
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
      case "desc":
        setDesc(e.target.value);
        break;

      default:
        return "error";
    }
  };

  function createTodo() {
    const todoref = firebase.database().ref("Todo");
    const todo = {
      keys,
      title,
      desc,
      subtitle,
      imageUrl,
    };
    console.log(keys);
    console.log(title);
    console.log(desc);
    console.log(subtitle);
    console.log(imageUrl);
    todoref.push(todo);
  }
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function handleImageupdload(e) {
    console.log(e.target.files[0], "===============");
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
      const uploadtask = storage
        .ref(`images/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadtask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          <Alert message="Success" type="success" />;
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              console.log(url, "=====");
              setImageUrl(url);
            });
        }
      );
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
      {imageUrl ? <Alert message="Success" type="success" /> : null}
      <form>
        <div className="form-row">
          <label for="validationDefault01">Keys</label>
          <div className="col-12">
            <Select
              defaultValue="Living Room"
              style={{ width: 120 }}
              onChange={handleOnChanges}
            >
              <Option value="living room">Living Room</Option>
              <Option value="office">Office</Option>
              <Option value="decor">Decor</Option>
              <Option value="kitchen">Kitchen</Option>
              <Option value="bath">Bath</Option>
            </Select>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationDefault02">Image</label>
            <input
              type="file"
              name="myImage"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={handleImageupdload}
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
            <label for="validationDefault03">Description</label>
            <textarea
              //type="text"
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              onChange={(e) => handleOnChange(e, "desc")}
              value={desc}
              required
            ></textarea>
          </div>
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
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
