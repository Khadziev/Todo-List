const Todo = require("../models/Todo.model");
const jwt = require("jsonwebtoken");

module.exports.todosController = {
  getAllTodos: async (req, res) => {
    const todos = await Todo.find().populate("user");

    res.json(todos);
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;
    const mentor = await Todo.findByIdAndDelete(id);
    res.json("аккаунт удален");
  },

  createTodo: async (req, res) => {
    const { text } = req.body;
    const { id } = req.params;
    try {
      const created = await Todo.create({
        user: req.user.id,
        text,
      });
      const review = await Todo.findById(created._id).populate("user");
      return res.json(review);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },

  async editTodo(req, res) {
    try {
      const { id } = req.params;
      const { text } = req.body;

      const note = await Todo.findByIdAndUpdate(id, { text }, { new: true });
      res.json(note);
    } catch (e) {
      res.json(e.message);
    }
  },
};
