import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://devps12Server:zVc72k6GQnPFvKSA@cluster0.rkhkj2w.mongodb.net/devps12Server?retryWrites=true&w=majority&appName=Cluster0"
    ); //config.dataBaseUrl || "mongodb://127.0.0.1:27017/course-project"
    console.log(config.dataBaseUrl);
    app.listen(config.port, () => {
      console.log(`Blog Server listening Port On ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
