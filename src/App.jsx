import { useState } from "react";
import "./App.css";
import { Plus } from "react-feather";
import { X } from "react-feather";
import "./reset.css";
import React from "react";

function App() {
  const [arrTitle, setArrT] = useState([]);
  const [arrDescription, setArrD] = useState([]);
  const [elementIndex, setElementIndex] = useState("");
  function handleClickAdd() {
    var add_id = document.querySelector("#add-modal");
    var add_ToDO = document.querySelector("#input-ToDO");
    var add_detail = document.querySelector("#input-detail");
    add_id.style.display = "block";
    add_ToDO.value = "";
    add_detail.value = "";
  }
  function handleCloseAdd() {
    var add_id = document.querySelector("#add-modal");
    add_id.style.display = "none";
  }
  function addToDO() {
    var add_ToDO = document.querySelector("#input-ToDO");
    setArrT((prev) => [...prev, add_ToDO.value]);
    addDetail();
    handleCloseAdd();
  }
  function addDetail() {
    var add_detail = document.querySelector("#input-detail");
    setArrD((prev) => [...prev, add_detail.value]);
    handleCloseAdd();
  }
  function removeToDOAndDetail() {
    const visibility_detail = document.querySelector(
      ".center-items-containers"
    );
    setArrT((prev) => {
      const oldArr = [...prev];
      oldArr.splice(elementIndex, 1);
      return oldArr;
    });
    setArrD((prev) => {
      const oldArr = [...prev];
      oldArr.splice(elementIndex, 1);
      return oldArr;
    });

    visibility_detail.style.display = "none";
  }
  function TopicList() {
    const visibility_detail = document.querySelector(
      ".center-items-containers"
    );
    const list = arrTitle.map((topic, index) => (
      <p
        className="side-element"
        key={index}
        onMouseEnter={lowerOpacity}
        onMouseLeave={increaseOpacity}
        onClick={function () {
          setElementIndex(index);
          visibility_detail.style.display = "block";
        }}
      >
        {topic}
      </p>
    ));
    return <div className="todo-return">{list}</div>;
  }
  function lowerOpacity(e) {
    e.target.style.opacity = "70%";
  }
  function increaseOpacity(e) {
    e.target.style.opacity = "100%";
  }
  function ShowElementTopic() {
    return <div className="center-items-info">{arrTitle[elementIndex]}</div>;
  }
  function ShowElementDetail() {
    return (
      <div className="center-items-info">{arrDescription[elementIndex]}</div>
    );
  }
  return (
    <div className="App">
      {/* <button onClick={() => console.log(arrTitle)}>Test</button> */}
      {/* <button
        onClick={() => {
          for (let index = 0; index < 20; index++) {
            setArrT((prev) => [...prev, `title ${index}`]);
            setArrD((prev) => [...prev, `desc ${index}`]);
          }
        }}
      >
        Test
      </button> */}
      <div id="nav-bar">
        <div className="nav-text-box">
          <h1 className="nav-text">ToDOLayout</h1>
        </div>
        <div style={{ borderLeft: "2px solid aliceblue" }}>
          <Plus className="plus" id="add" size={30} onClick={handleClickAdd} />
          <div id="add-modal">
            <div className="add-modal-content">
              <div className="x-box">
                <X className="add-close" onClick={handleCloseAdd}></X>
              </div>
              <div
                style={{
                  padding: "4px 12px 28px 12px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "2",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>ToDO</p>
                  <input
                    id="input-ToDO"
                    type="text"
                    size={1}
                    style={{ marginLeft: "20px", flexGrow: "1" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "150px",
                  }}
                >
                  <p>Description</p>
                  <textArea
                    id="input-detail"
                    type="text"
                    size={1}
                    style={{ flexGrow: "2" }}
                  />
                </div>
                <button
                  style={{
                    fontSize: "16px",
                    position: "absolute",
                    right: "10px",
                    bottom: "10px",
                  }}
                  onClick={addToDO}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-center">
        <div id="side-menu">
          <div className="side-menu-item">
            <TopicList />
          </div>
        </div>
        <div id="center">
          <div className="center-inner-border">
            <div className="center-items-containers">
              <div className="center-items-titles">ToDO</div>
              <ShowElementTopic />
              <div className="center-items-titles">Description</div>
              <ShowElementDetail />
              <button
                onClick={removeToDOAndDetail}
                style={{
                  fontSize: "16px",
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
