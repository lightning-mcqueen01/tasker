const List = require("../models/list");
// const User = require("../models/user");

const addList = async (req, res) => {
  // console.log(req.body);
  const { name } = req.body;

  const noOfLists = await List.find({ userId: req.userId }).length;

  // console.log(noOfLists);

  const newList = await List.create({ name, userId: req.userId });

  // console.log(newList);

  return res
    .status(200)
    .json({ message: "list successfully added", list: newList });
};

const getLists = async (req, res) => {
  try {
    const lists = await List.find({ userId: req.userId });
    // console.log("lists ====================", lists);
    return res.status(200).json({ lists });
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { addList, getLists };
