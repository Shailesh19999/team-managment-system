const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  
  owner: {
    type: String,
    required: true,
  },
  Team_Leader: {
    type: String,
    required: true,
  },
  

});
const empdata = new mongoose.model("employee", empSchema);
module.exports = empdata;
