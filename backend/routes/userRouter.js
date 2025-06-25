const express = require("express");
const router = express.Router();
const login = require("../controllers/userController");
const { addList, getLists } = require("../controllers/listController");
const {
  addTask,
  getTasks,
  completeTask,
} = require("../controllers/taskController");
const authMiddle = require("../authMiddleware");

router.post("/login", login);

router.route("/list").get(authMiddle, getLists).post(authMiddle, addList);

// Protected Routes - Tasks
router.route("/task").post(authMiddle, addTask);

router.get("/task/:listId", authMiddle, getTasks);
router.put("/task/:taskId", authMiddle, completeTask);
module.exports = router;
