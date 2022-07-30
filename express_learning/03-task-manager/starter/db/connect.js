const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://root:1234@expresslearning.tdqlb.mongodb.net/Store?retryWrites=true&w=majority";

const connectDB = (url) =>{
  mongoose
  .connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB