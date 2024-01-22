import React, { useState } from "react";
import "../App.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (inputData) {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };
  const deleteAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div className="main-head">
            <h1>To Do List</h1>
          </div>
          <div className="addItems">
            <input
              className="inputText"
              type="text"
              placeholder="Add Items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button className="addBtn" onClick={addItem}>
              Add
            </button>
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <>
                  <div className="eachItem" key={ind}>
                    {elem}
                  </div>
                  <button className="removeBtn" onClick={() => deleteItem(ind)}>
                    Remove Item
                  </button>
                </>
              );
            })}
          </div>
          <button className="removeAllBtn" onClick={deleteAll}>
            {" "}
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
