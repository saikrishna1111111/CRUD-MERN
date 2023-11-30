import express from "express";
import dbConnect from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
// import routes from "./routes/routes.js";
import bodyParser from "body-parser";
import addUserController from "./controllers/user-controller.js";
import getUserController from "./controllers/getUserControllers.js";
import getEditUserController from "./controllers/editUserController.js";
import editResultController from "./controllers/editResultController.js";
import User from "./schema/userSchema.js";
const app = express();
const PORT = 5000;
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

dbConnect(username, password);

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    defer: true,
  })
);

// app.use("/", routes);

app.post("/adduser", addUserController);
app.get("/alluser", getUserController);
app.get("/:id", getEditUserController);
app.put("/:id",editResultController);
app.delete("/:id",async(request,response)=>{
  try {
    await User.findByIdAndDelete({_id:request.params.id})
    response.send("deleted")
    
} catch (error) {
    response.status(409).json({ message: error.message });
}
})





app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
