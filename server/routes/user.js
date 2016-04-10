var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", function(req,res,next){
    res.json(req.isAuthenticated());
});

router.get("/data", function(req,res,next){
    console.log("user data requested", req.isAuthenticated());
    var resUserData = {
        email: req.user.email,
        fname: req.user.fname,
        lname: req.user.lname,
        datecreated: req.user.datecreated,
        lastlogin: req.user.lastlogin,
        phone: req.user.phone,
        address: req.user.address,
        address2: req.user.address2,
        city: req.user.city,
        state: req.user.state,
        zipcode: req.user.zipcode,
        currentbook: req.user.currentbook,
        currentpage: req.user.currentpage,
        _id: req.user._id
    };
    res.json(resUserData);
});

router.post("/data", function(req,res,next){
    console.log(req.body);
    console.log(req.body.data);
    User.findOneAndUpdate({ _id: req.user._id }, {
        email: req.body.data.email,
        fname: req.body.data.fname,
        lname: req.body.data.lname,
        phone: parseInt(req.body.data.phone),
        address: req.body.data.address,
        address2: req.body.data.address2,
        city: req.body.data.city,
        state: req.body.data.state,
        zipcode: parseInt(req.body.data.zipcode)
    }, function(err, doc){
        if(err){
            console.log(err);
        }
        res.send();
    });
});

router.post("/currentpage", function(req,res,next){
    console.log(req.body);
    console.log(req.user._id);
    User.findOneAndUpdate({ _id: req.user._id }, {
        currentpage: req.body.data.currentpage
    }, function(err, doc){
        if(err){
            console.log(err);
        }
        res.send();
    });
});



router.post("/autosave", function(req,res,next){
    // console.log(req.body);
    // console.log(req.user);
    // var newAnswer = new UserAnswerSchema ({
    //     "q_id": req.body.q_id,
    //     "answer": req.body.answer
    // });
    // User.findOneAndUpdate({ '_id': req.user._id }, {
    //     answers.push(newAnswer);
    // }, function(err, doc){
    //     if(err){
    //         console.log(err);
    //     }
    // });
});




module.exports = router;
