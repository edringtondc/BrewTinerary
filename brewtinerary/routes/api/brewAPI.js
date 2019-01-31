const axios = require('axios');
const keys = require("../../keys.js")
var express = require('express')
const router = require("express").Router();



const BASEURL = "http://beermapping.com/webservice/loccity/";
const APIKEY = keys.beerMapping




router.get("/breweries", function (req, res) {
  
  axios.get(BASEURL + APIKEY + query)
    .then(function (data) {
      console.log(data)
      // res.json(data)
    }).catch(function (err) {
      if (err) { console.log(err) }
    })
})