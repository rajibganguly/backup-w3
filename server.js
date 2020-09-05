const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const request = require('request');
const Works = require('./backend/models/works');
const app = express();

const port = process.env.PORT || 3000;



mongoose.connect('mongodb+srv://w3earth:ssWL5dd5s3UAR3wj@cluster-w3earth.utz6m.mongodb.net/w3_works?retryWrites=true', { useUnifiedTopology: true })
.then((db)=> {
      console.log(db);
  }).catch(error => {
      // console.log(error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// var path = require('path');

// app.use(express.static('dist/w3earth'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-with, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    
    next();
});
app.use( '/api/getworks',(req, res, next) => {
    Works.find().then(documents => {
        console.log(documents.works);
        res.status(200).json({
          message: "Posts fetched successfully! ",
          posts: documents
        });
      });
    
    
})



// w3earth
// ssWL5dd5s3UAR3wj

// mongodb+srv://w3earth:ssWL5dd5s3UAR3wj@cluster-w3earth.utz6m.mongodb.net/<dbname>?retryWrites=true&w=majority

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});








// const works = [
    //     {
    //         pageId: 111,
    //         imageintro: "image01.jpg",
    //         title: "Values of Good UX",
    //         description: "How I can convince other peers or managers in the same organisation to consider UX seriously.",
    //         importantcolor: "orange",
    //         latest: false,
    //         pagetitle: "Method for Showing values of Good UX",
    //         details: "Frustrations caused by poor experiences like, salespeople trying to sell a product that is hard to demonstrate or explain, call-center management responding to a poor design, development managers watching their teams rewriting the interface code or dealing with lost worker productivity, frustration costs due to many reasons, ask the new UX to sponsor",
    //         previous: null,
    //         next: 2,
    //         summery: null
    //     },
    //     {
    //         pageId: 112,
    //         imageintro: "image02.jpg",
    //         title: "Principles for UX",
    //         description: "Sir Jakob Nielsen`s general principles",
    //         importantcolor: "orange",
    //         latest: false,
    //         pagetitle: "Method for Showing values of Good UX",
    //         details: "Visibility of system status, the match between system and the real world, User control and freedom, consistency and standards, error prevention, recognition rather than recall, flexibility and efficiency of use, aesthetic and minimalist design, Help user recognize, diagnose and recover from errors, help and documentation, Easy solve of problem statement but intelligently.",
    //         previous: 1,
    //         next: 3,
    //         summery: null
    //     },
    //     {
    //         pageId: 113,
    //         imageintro: "image03.jpg",
    //         title: "PLANZONE",
    //         description: "Free project management application",
    //         importantcolor: "orange",
    //         latest: true,
    //         pagetitle: "PlanZone from w3aerth",
    //         details: "The primary application Beta version will launch soon. Already received some client feedback. This application will help you to create your project details along with paid and due payments, tags with employee and employee's salary too. Database controlled by w3earth and all pro users can get backup features.",
    //         previous: 2,
    //         next: 4,
    //         summery: null
    //     }
    // ];