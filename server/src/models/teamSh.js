const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  person_involved: {
    type: Number,
    
  },
  last_update: {
    type: Date,
    
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
const Teamdata = new mongoose.model("Teamdata", teamSchema);
module.exports = Teamdata;
