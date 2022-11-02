const express = require("express");
const router = new express.Router();
const empdata = require("../models/empSh");

// register
router.post("/employ", async (req, res) => {
 
    const { name, status, owner,Team_Leader } = req.body;
    if (!name || !status || !owner|| !Team_Leader) {
      res.status(404).json("please fill the data");
    }
    try {
      const preuser = await empdata.findOne({ name: name });
      console.log(preuser);
      if (preuser) {
        res.status(404).json("this user is already present");
      } else {
        const addingRecord = new empdata({
          name,
          status,
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
   
})
 // read
 router.get("/getemploys", async (req,res)=>{
    try{
      const userdata =await empdata.find()
      res.status(201).json(userdata)
      console.log(userdata)
  
    }catch(e){
      res.status(400).json(e);
    }
  })
  // get indivisual 
router.get("/getemploys/:id", async (req,res)=>{
  try{
    // console.log(req.params)
    const {id} = req.params;
    const userindividual = await empdata.findById({_id:id})
    console.log(userindividual)
    res.status(201).json(userindividual)

  }catch(e){
    res.status(400).json(e);
  }
})
// update user
router.patch("/updateuser/:id", async (req,res)=>{
  try{
    const {id} = req.params;
const updateuser = await empdata.findByIdAndUpdate(id, req.body,{
  new : true
})
res.status(201).json(updateuser)
  }catch(err){
    res.status(400).json(e);
  }
})
// delete user
router.delete("/deleteuser/:id", async (req,res)=>{
  try{
    const {id} = req.params;
const deleteuser = await empdata.findByIdAndDelete({_id:id})
res.status(201).json(deleteuser)
  }catch(err){
    res.status(400).json(e);
  }
})
module.exports = router;