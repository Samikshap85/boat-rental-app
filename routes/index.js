var express = require('express');
// const booking = require('../model/booking');
const booking = require('../model/booking');
var router = express.Router();
var Booking = require('../model/booking');
const fetch = require('node-fetch')
let alert = require('alert'); 


/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=28.2096&lon=83.9856&appid=780a4551ff3e6ac4892ab54ec1e701ec&units=metric')
  .then(res => res.json())
  .then(weatherData => res.render('index',{weatherData: weatherData}))
  .catch(err => console.log(err));
});



router.get("/gotobookingpage",function(req,res,next){  //it get the data from addtodo list
  alert("message")
  res.render("bookafter");
});

router.get("/Save-data",function(req,res,next){  //it get the data from addtodo list
  res.render("bookafter");
});

router.get("/Save-data",function(req,res,next){  //it get the data from addtodo list
  res.render("bookafter");
});

router.get("/Save-data",function(req,res,next){  //it get the data from addtodo list
  res.render("bookafter");
});

router.post("/save-booking", function(req,res,next){   //it save the data from the form
  console.log("bodyyyyyyyyyyyyy 1234", req.body); 

  const booking=new Booking({
    name:req.body.name,
    contact : req.body.contact, 
    ticketNo:req.body.ticketNo,
    time:req.body.checkIn,
    checkOut:req.body.checkOut
  });


  const promise = booking.save();
  promise.then((booking)=>{
    console.log("your booking is",booking);
    // res.render("display",{booking});
    // booking.push({...req.body,id: booking._id})
    res.redirect(`/bookingInfo/`+booking._id);
  })
});

router.get("/bookingInfo/:id", async function(req,res,next){  //it get the data from addtodo list
  const bookingDetails = await Booking.findOne({_id:req.params.id});
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=28.2096&lon=83.9856&appid=780a4551ff3e6ac4892ab54ec1e701ec&units=metric')
  .then(res => res.json())
  .then(weatherData => res.render('bookingDetails',{weatherData: weatherData,bookingDetails:bookingDetails}))
  .catch(err => console.log(err));
  // console.log("bookingDetails",bookingDetails)
  // res.render("bookingDetails",{bookingDetails:bookingDetails});

});

router.post('/booking-Info/:id',async function(req,res,next){
  await booking.findOne({_id:req.params.id},{
    $set:{
      name: req.body.name,
      contact: req.body.contact,
      ticket: req.body.ticket,
      startTime:req.body.startTime,
      endTime: req.body.endTime
    }
  })
  res.redirect(`/bookingInfo/`+booking._id);
})

module.exports = router;
