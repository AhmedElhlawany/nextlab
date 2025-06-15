import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://ahmed:oN9raMTnKYWPguuW@cluster0.ux3wcbu.mongodb.net/todo`
    )
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(`error connect to db ${err}`);
    });
}
