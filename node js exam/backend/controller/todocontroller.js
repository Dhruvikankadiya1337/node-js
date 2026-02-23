import Todo from '../models/todo'

// Create Todo
export const createTodo = async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.json({ status: false, message: "Title required" });

  const newTodo = await Todo.create({
    title,
    description,
    userId: req.user.id,
  });

  res.json({ status: true, message: "Todo created",});
};