const app = require("express")();

const multerUpload = require("./utils/multer-upload");
const controllers = require("./controllers/route-controllers");

app.post("/upload", multerUpload.array("file", 1), controllers.getUploadResult);
app.get("/", controllers.getIndex);

app.listen(3000);
