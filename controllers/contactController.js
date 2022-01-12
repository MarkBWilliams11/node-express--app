exports.renderContact = async (req, res, next) => {
  try {
    res.render("contact", {
      title: "Dasdubdesign",
      message: "Contact with some general information!",
    });
  } catch (error) {
    res.render("error", {
      error: error,
      message: `Error oops ${error}`,
    });
  }
};
