const userController = require('../../app/database/controllers/user.controller');
module.exports = app => {
  var router = require("express").Router();
  /*
  router.get("/", (req,res)=>{
    res.send('Test')
  });
  */
  router.get("/", userController.show );
  app.use('/users', router);
};