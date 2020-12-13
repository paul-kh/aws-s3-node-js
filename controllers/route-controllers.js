const path = require("path");

exports.getUploadResult = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "upload-result.html"));
};

exports.getIndex = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
};
