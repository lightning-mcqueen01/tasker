const List = require("../models/list");
// const User = require("../models/user");

const addList = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  const noOfLists = await List.find({ user: req.userId }).length;

  console.log(noOfLists);

  const list = await List.create({ name, user: req.userId });

  console.log(list);

  return res.status(200).json({ message: "list successfully added", list });
};

const getLists = async (req, res) => {
  try {
    const lists = await List.find({ user: req.userId });

    return res.status(200).json(lists);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { addList, getLists };
