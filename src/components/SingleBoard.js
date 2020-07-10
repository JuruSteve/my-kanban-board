import React from "react";
import "./styles.css";
import AddTask from "./AddTask";

const SingleBoard = ({ board }) => {
  return (
    <li key={board[0]} className="board-card">
      <h4>{board[1].name}</h4>
      <AddTask boardId={board[0]} />
      <div className="board-items">
        {board[1].items.map((item) => {
          return (
            <div key={item.id} className="item-card">
              <p>{item.title}</p>
              {/* <p>{item.content}</p> */}
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default SingleBoard;
