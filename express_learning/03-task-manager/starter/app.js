const express = require("express");

const app = express();

const tasks = require("./routes/tasks");
const connectDB =  require('./db/connect')

app.use(express.static("./public"));

app.use(express.json());

app.get("/hello", (req, res) => {
  console.log("Hello");
  res.end();
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')

const start = async () => {
    try{
        await connectDB()
        app.listen(5000, () => {
          console.log("server starts");
        });

    }catch(err){
        console.log(err)
    }
}

start()
