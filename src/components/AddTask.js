import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addItem } from "../actions";
import "./styles.css";
const AddTask = ({ boardId }) => {
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
    dispatch(addItem({ formValues, boardId }));
    setFormValues({ title: "" });
  };

  return (
    <div className="add-task-container">
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

export default connect(null, { addItem })(AddTask);
