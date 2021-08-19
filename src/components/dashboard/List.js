import { Button } from "antd";
import React, { useEffect, useState, useContext } from "react";
import firebase from "../util/firebase.js";
import { Popconfirm, message, Alert } from "antd";
import { Route, useHistory, Link } from "react-router-dom";
import form from "../dashboard/form";
import { UserContext } from "../../router/UserContext";
export default function List(props) {
  const [todolist, setTodoList] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    try {
      if (user != null) {
        const todoref = firebase.database().ref("Todo");
        todoref.on("value", (snapshot) => {
          const todos = snapshot.val();
          const todolist = [];
          for (let id in todos) {
            todolist.push({ id, ...todos[id] });
          }
          todolist.forEach((x) => {
            x.keys = x.keys;
            x.title = x.title;
            x.subtitle = x.subtitle;
            x.desc = x.desc;
            x.image = x.imageUrl;
          });

          setTodoList(todolist);
        });
      } else {
        history.push("/admin/login");
      }
    } catch (e) {
      history.push("/admin/login");
    }
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",

      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleUpdate(text, record)}
          >
            Update
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => removetitle(record.id)}
          >
            Delete
          </button>

          <button type="button" className="btn btn-success">
            Success
          </button>
        </div>
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  function confirm(e) {
    console.log(e);
    message.success("Record Deleted Successfully");
  }
  function cancel(e) {
    console.log(e);
    message.error("Record Deleted unsuccessfully");
  }

  function removetitle(id) {
    const todo = firebase.database().ref("Todo").child(id);
    todo.remove();
    message.success("Record Deleted Successfully");
  }

  function handleUpdate(title, keys, image, subtitle, desc) {
    console.log(title);
    console.log(keys);
    console.log(image);
    console.log(subtitle);
    console.log(desc);
  }
  const mystyle = {
    marginBottom: "4px",
    width: "100px",
  };

  const history = useHistory();
  function handleClick() {
    history.push("/admin/banner-edit");
  }

  return (
    <div className="container">
      <div
        className="donet-section theme-section theme-section-ex-padding"
        style={{ marginTop: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="area-heading text-center"
                style={{ marginTop: "-100px" }}
              >
                <h3 className="area-title">Project Data Modification</h3>
                <p>You can edit update delete project image and content here</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col text-center">
              <button
                onClick={handleClick}
                style={mystyle}
                type="button"
                className="btn btn-success"
              >
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table id="example" className="table" style={{ marginTop: "-150px" }}>
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Title</th>
                <th>Descripton</th>
                <th>Subtitle</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todolist ? (
                todolist.map((todos, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{todos.keys}</td>
                    <td>{todos.title}</td>
                    <td>{todos.desc}</td>
                    <td>{todos.subtitle}</td>
                    <td>
                      <img src={todos.image} alt="..." class="img-fluid" />
                    </td>
                    <td>
                      <Link
                        to={{
                          pathname: "/admin/banner-edit",
                          state: {
                            id: todos.id,
                            image: todos.image,
                            title: todos.title,
                            keys: todos.keys,
                            desc: todos.desc,
                            subtitle: todos.subtitle,
                          },
                        }}
                      >
                        <button
                          style={mystyle}
                          type="button"
                          className="btn btn-primary"
                        >
                          Update
                        </button>
                      </Link>
                      <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => removetitle(todos.id, todos.title)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <button
                          style={mystyle}
                          type="button"
                          className="btn btn-secondary"
                          //  onClick={() => removetitle(todos.id, todos.title)}
                        >
                          Delete
                        </button>
                      </Popconfirm>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No data found</td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Title</th>
                <th>Descripton</th>
                <th>Content</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
