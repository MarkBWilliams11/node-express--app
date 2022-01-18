exports.renderTodo = async (req, res, next) => {
  try {
    res.render("todo", {
      title: "Dasdubdesign",
      message: "Todo!",
    });
  } catch (error) {
    res.render("error", {
      error: error,
      message: `Error oops ${error}`,
    });
  }
};
