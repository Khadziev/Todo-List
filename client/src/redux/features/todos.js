const initialState = {
  loading: true,
  items: [],
  error: null,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case "todos/fetch-todos/pending":
      return {
        ...state,
        loading: true,
      };
    case "todos/fetch-todos/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "todos/fetch-todos/rejected":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.error,
      };
    case "create/todos/pending":
      return {
        ...state,
        loading: true,
      };
    case "create/todos/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    case "create/todos/rejected":
      return {
        ...state,
        loading: false,
        items: [],
        error: action.error,
      };
    case "todos/edit/pending":
      return {
        ...state,
        editing: true,
      };

    case "todos/edit/fulfilled":
      return {
        ...state,
        editing: false,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ...action.payload.data,
            };
          }
          return item;
        }),
      };

    case "todos/delete/fetch/pending":
      return {
        ...state,
        deleting: true,
      };
    case "todos/delete/fetch/fulfilled":
      return {
        ...state,
        deleting: false,
        candidate: state.candidate._id,
      };

    default:
      return state;
  }
}

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: "todos/fetch-todos/pending" });

    try {
      const response = await fetch("/todos", {});
      const json = await response.json();

      if (json.error) {
        dispatch({
          type: "todos/fetch-todos/rejected",
          error: "При запросе на сервер произошла ошибка",
        });
      } else {
        dispatch({ type: "todos/fetch-todos/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({
        type: "todos/fetch-todos/rejected",
        error: e.toString(),
      });
    }
  };
};

export const addTodos = ({ text, id }) => {
  return async (dispatch, useState) => {
    const state = useState();
    dispatch({ type: "create/todos/pending" });
    try {
      const response = await fetch(`/todos/${id}`, {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          Authorization: `Bearer ${state.application.token}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await response.json();
      dispatch({ type: "create/todos/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "create/todos/rejected", error: e.toString() });
    }
  };
};

export const deleteTodos = (id) => {
  return async (dispatch) => {
    dispatch({ type: "account/delete/fetch/pending" });
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      window.location.reload();

      dispatch({ type: "account/delete/fetch/fulfilled", payload: id });
    } catch (e) {
      dispatch({ type: "account/delete/fetch/rejected" });
    }
  };
};

export const editTodo = (id, data) => {
  return async (dispatch, getState) => {
    dispatch({ type: "todos/edit/pending" });

    const state = getState();
    await fetch(`/todos/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${state.application.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        text: data.text,
      }),
    });
    window.location.reload();

    dispatch({ type: "todos/edit/fulfilled", payload: { id, data } });
  };
};
