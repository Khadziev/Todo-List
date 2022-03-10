import React, { useState } from "react";
import ReadTodo from "./ReadTodo";
import RedactTodo from "./RedactTodo";

function Todos({ todo }) {
  const [isRedact, setIsRedact] = useState(false);
  const [checked, setChecked] = useState(todo.isCompleted);

  return isRedact ? (
    <RedactTodo
      checked={checked}
      setChecked={setChecked}
      todo={todo}
      setIsRedact={setIsRedact}
      key={todo.id}
    />
  ) : (
    <ReadTodo
      checked={checked}
      setChecked={setChecked}
      todo={todo}
      setIsRedact={setIsRedact}
      key={todo.id}
    />
  );
}

export default Todos;
