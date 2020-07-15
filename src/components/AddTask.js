import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addItem, addItemFailed } from "../actions";
import "./styles.css";
const AddTask = ({ boardId, errors, errorMessage }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: "",
  });

  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmission = (e) => {
    e.preventDefault();
    if (formValues.title === "") {
      dispatch(addItemFailed({ errorMsg: "Please enter a title", boardId }));
      return;
    }
    dispatch(addItem({ formValues, boardId }));
    setFormValues({ title: "" });
  };

  return (
    <div className="add-task-container">
      {errors && errorMessage.boardId === boardId ? (
        <div className="error">
          <p>{errorMessage.err}</p>
        </div>
      ) : null}
      <form onSubmit={onSubmission}>
        <input
          type="text"
          name="title"
          placeholder="Add Task"
          value={formValues.title}
          onChange={handleChanges}
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ kanban }) => {
  return {
    errors: kanban.errors,
    errorMessage: kanban.errorMessage,
  };
};

export default connect(mapStateToProps, { addItem })(AddTask);
