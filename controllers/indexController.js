exports.renderIndex = async (req, res, next) => {
  try {
    res.render("index", {
      title: "Dasdubdesign",
      message: "Building useful tools!",
    });
  } catch (error) {
    res.render("error", {
      error: error,
      message: `Error oops ${error}`,
    });
  }
};
