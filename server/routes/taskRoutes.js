const express = require("express");
const { getAll, postNew, getOne, Update, del } = require("../Controller/taskController");

const router = express.Router();

// show all tasks
router.get("/", getAll);

// show a single task
router.get("/:id", getOne);

//post a new task
router.post("/", postNew);

//update a task
router.patch("/:id", Update);

//delete a task
router.delete("/:id", del);


module.exports = router;
