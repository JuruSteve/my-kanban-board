import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./App.css";
import { showItems } from "./actions";

function App({ boards, loading }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch action to fetch kanban boards
    dispatch(showItems());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        {loading && <h2>Loading....</h2>}
        <ul>
          {boards ? (
            Object.entries(boards).map((board) => {
              return <li key={board[0]}>{board[1].name}</li>;
            })
          ) : (
            <h2>No Boards</h2>
          )}
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = ({ kanban }) => {
  return {
    boards: kanban.boards,
    loading: kanban.loading,
  };
};

export default connect(mapStateToProps, { showItems })(App);
