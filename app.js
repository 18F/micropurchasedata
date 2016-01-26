var argv = require('minimist')(process.argv.slice(2));
var request = require('request');
var Auction = require('./Auction');

var urls = argv._;
urls.map(function (url) {
  var opts = {url:'https://micropurchase.18f.gov/admin/auctions/' + url, headers: {'Accept':'text/x-json', 'Api-Key':process.env["API_KEY"]}}
  request.get(opts, function (err, res, body) {
    var d = JSON.parse(body);
    debugger;
    if (err) throw err;
    var a = new Auction(d["auction"]).getUniqueBidders();
    console.log("Unique bidders for auction " + url + ": " + a)
  })
})
