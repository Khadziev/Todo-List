import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import application from "./features/application";
import todos from "./features/todos";

export const store = createStore(
  combineReducers({
    application,
    todos,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
