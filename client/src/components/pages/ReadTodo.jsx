import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../../redux/features/todos";

function ReadTodo({ checked, setChecked, setIsRedact, todo }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodos(id));
  };

  return (
    <div className={checked ? "todo__item_active" : "todo__item"}>
      <div className={"todo__block"}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <div className={"todo__block_text"}>
        {todo.user.email} ➤ {todo.user.name} ➤ : {todo.text}
      </div>
      <div className={"todo__block"}>
        <button className={"button"} onClick={() => handleDelete(todo._id)}>
          🚮
        </button>
        <button
          onClick={() => setIsRedact(true)}
          disabled={checked}
          style={{ marginLeft: 10 }}
        >
          изменить
        </button>
      </div>
    </div>
  );
}

export default ReadTodo;
