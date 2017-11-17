var express = require('express');
var router = express.Router();
var superagent = require('superagent')
var cheerio = require('cheerio')

/* GET users listing. */
router.get('/:spiece', function(req, res, next) {
  var spiece = req.params.spiece.replace(' ', '_')
  console.log(spiece)
var url = `https://www.allaboutbirds.org/guide/${spiece}/id`
let birdsInfo = {
  picture: null,
  sound: null,
  shape: null,
  desc: null,
  map: null,
  spiece
}
const request = async () => {
   await superagent
   .get(url)
    .then( data => {
      $ = cheerio.load(data.text)

      var image = $('#spp_desc .clear_both #id_glamor img')
      var map = $('.tabs-container .rangemap img')
      var desc = $('#spp_desc .clear_both p')
      var shape  = $('.tabs-container #id_group img')
      var sound  = $('.tabs-container #id_sound .birdsong')
      birdsInfo.picture = `https://www.allaboutbirds.org${image['0'].attribs.src}`
      birdsInfo.map = `https://www.allaboutbirds.org${map['0'].attribs.src}`
      birdsInfo.shape = `https://www.allaboutbirds.org${shape['0'].attribs.src}`
      birdsInfo.sound = `https://www.allaboutbirds.org${sound.data('audio')}`
      birdsInfo.desc = desc.text()
      

    })
    .catch( err => {
      console.log(err)
    })


return res.json(birdsInfo)
  
}
request()


});

module.exports = router;
