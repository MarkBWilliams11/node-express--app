var express = require("express");
var router = express.Router();

const todoController = require("../controllers/todoController");

/* GET home page. */
router.get("/", todoController.renderTodo);

module.exports = router;
