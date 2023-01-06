const { Router } = require("express");
const axios = require("axios");
const userModel = require("../model/usermodel");

const userController = Router();

userController.get("/fetchuser", async (req, res) => {
  var user_data = [];
  axios
    .get("https://randomuser.me/api/?results=10")
    .then((res) => {
      user_data = res.data.results.map(async (el) => {
        // console.log(el)
        var obj = {
          gender: el.gender,
          name: el.name,
          location: el.location,
          email: el.email,
          dob: el.dob,
        };
        // console.log(obj)

        user_data.push(obj);
        console.log(user_data);

        const users =  userModel.insertMany(user_data);
        await users.save();

        // res.send('successful')


      });
    })
    .catch((err) => console.log(err));


  res.send("done");
});

module.exports = userController;
