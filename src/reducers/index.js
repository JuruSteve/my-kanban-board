import { combineReducers } from "redux";
import boards from "./board-reducer";

export default combineReducers({ kanban: boards });
