import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { addTodos } from "../../redux/features/todos";
import { auth } from "../../redux/features/application";

function AddTodo(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleTodo = () => {
    dispatch(addTodos({ text, id }));
    setText("");
  };

  const handleChangeTodo = (e) => {
    setText(e.target.value);
  };

  if (auth) {
    return (
      <form style={{ display: "flex", marginTop: 20, marginLeft: 500 }}>
        <Input
          placeholder="Todo"
          inputProps={{ "aria-label": "search google maps" }}
          multiline
          rows={1}
          onChange={handleChangeTodo}
          value={text}
          style={{ width: "40%" }}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
            onClick={handleTodo}
          >
            +
          </Button>
        </Box>
      </form>
    );
  }
}

export default AddTodo;
