const express = require("express");
const router = new express.Router();
const Teamdata = require("../models/teamSh");

// register
router.post("/teammember", async (req, res) => {

  const { name, status, person_involved, last_update, owner,Team_Leader } = req.body;
  if (!name || !status || !person_involved || !last_update) {
    res.status(404).json("please fill the data");
  }
  try {
    const preuser = await Teamdata.findOne({ name: name });
    console.log(preuser);
    if (preuser) {
      res.status(404).json("this user is already present");
    } else {
      const addingRecord = new Teamdata({
        name,
        status,
        person_involved,
        last_update,
        owner,
        Team_Leader
      });
      const createRecord = await addingRecord.save();
      res.status(201).json(createRecord);
      console.log(createRecord);
    }
  } catch (e) {
    res.status(400).json(e);
  }
});
// get data
router.get("/getdata", async (req,res)=>{
  try{
    const userdata =await Teamdata.find()
    res.status(201).json(userdata)
    // console.log(userdata)

  }catch(e){
    res.status(400).json(e);
  }
})
// get indivisual 
router.get("/getuser/:id", async (req,res)=>{
  try{
    // console.log(req.params)
    const {id} = req.params;
    const userindividual = await Teamdata.findById({_id:id})
    console.log(userindividual)
    res.status(201).json(userindividual)

  }catch(e){
    res.status(400).json(e);
  }
})

module.exports = router;
