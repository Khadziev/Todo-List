import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../redux/features/todos";

function RedactTodo({ checked, todo, setChecked, setIsRedact }) {
  const [text, setText] = useState(todo.text);

  const dispatch = useDispatch();

  const handleSave = async () => {
    await dispatch(editTodo(todo._id, { text }));
    setIsRedact(false);
  };

  return (
    <div className={"todo"}>
      <div className={checked ? "todo__item_active" : "todo__item"}>
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </div>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleSave(todo.id)}>сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default RedactTodo;
