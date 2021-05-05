import mongoose from "mongoose";
import config from "./config";
import app from "./app";

mongoose
  .connect(config.mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Error connecting to database"));
//konekcija sa bazom podataka
//mongodb//... => adresa baze podataka
//useUnifiedTopology => opcija koju zahtjeva mongoose isto kao i slijedeća opcija

app.listen(config.port, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${config.port}`);
});
