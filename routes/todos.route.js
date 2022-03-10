const { todosController } = require("../controllers/todos.controller");
const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/todos", todosController.getAllTodos);
router.post("/todos/:id", authMiddleware, todosController.createTodo);
router.delete("/todos/:id", todosController.deleteTodo);
router.patch("/todos/:id", todosController.editTodo);

module.exports = router;
