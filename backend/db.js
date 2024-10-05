const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect(
  "mongodb://atlas-sql-66ee721541851577f5e188c6-tr6kt.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin"
);
const todoSchema = mongoose.Schema({
  title: string,
  description: string,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
