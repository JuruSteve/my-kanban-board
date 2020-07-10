import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./App.css";
import { showItems } from "./actions";
import SingleBoard from "./components/SingleBoard";

function App({ boards, loading }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch action to fetch kanban boards
    dispatch(showItems());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Kanban Board</h1>
      </header>
      <section className="board-wrapper">
        {loading && <h2>Loading....</h2>}
        <ul className="board-view">
          {boards ? (
            Object.entries(boards).map((board) => {
              return <SingleBoard key={board[0]} board={board} />;
            })
          ) : (
            <h2>No Boards</h2>
          )}
        </ul>
      </section>
      <footer>
        <p>&copy;2020</p>
      </footer>
    </div>
  );
}

const mapStateToProps = ({ kanban }) => {
  return {
    boards: kanban.boards,
    loading: kanban.loading,
    errors: kanban.errors,
  };
};

export default connect(mapStateToProps, { showItems })(App);
