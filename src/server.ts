import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("database connected");
    app.listen(config.port, () => {
      console.log(`listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to conncet", err);
  }
}

main();
