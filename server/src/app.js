const express = require("express");
const app = express();
const port = process.env.PORT || 3004;
require("./db/conn");
const Teamdata =require("./models/teamSh")
// const cors = require("cors")
// const router = require("./routers/myteam")

// app.use(cors)
app.use(express.json());

app.use(require("./routers/myteam"))
app.use(require("./routers/emp"))





app.listen(port, () => {
  console.log(`connection is live at port number. ${port}`);
});
