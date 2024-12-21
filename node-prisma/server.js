// index.js

const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Route to create a user
app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User creation failed" });
  }
});

// Route to create a to-do list for a user
app.post("/todos", async (req, res) => {
  const { userId, title } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        userId,
      },
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: "Todo creation failed" });
  }
});

// Route to get all todos for a user
app.get("/users/:userId/todos", async (req, res) => {
  const { userId } = req.params;

  try {
    const todos = await prisma.todo.findMany({
      where: { userId: parseInt(userId) },
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: "Failed to retrieve todos" });
  }
});

// Route to update a todo
app.patch("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { completed } = req.body;

  try {
    const todo = await prisma.todo.update({
      where: { id: parseInt(todoId) },
      data: { completed },
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: "Failed to update todo" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
