const express = require("express");
const router = express.Router();
const login = require("../controllers/userController");
const { addList, getLists } = require("../controllers/listController");
const { addTask, getTasks } = require("../controllers/taskController");
const authMiddle = require("../authMiddleware");

router.post("/login", login);
router.get("/", authMiddle, getLists);
// router.get("/", authMiddle, getTasks);
router.post("/", authMiddle, addList);
// router.put("/", authMiddle, addTask);

module.exports = router;
