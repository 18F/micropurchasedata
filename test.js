var expect = require('chai').expect;
var fs = require('fs');
var Auction = require('./Auction');
var data = JSON.parse(fs.readFileSync('testData.json')).auction;

describe("Testing Auction", function(){
  describe("constructor", function (){
    it("should create an Auction object", function (){
      var a = new Auction(data);
      expect(a.data).to.equal(data);
    })
  })

  describe("uniqueBidders", function (){
    it("test auction should have 2 unique bidders", function (){
      var auction = new Auction(data);
      expect(auction.getUniqueBidders().length).to.equal(2)
    })
  })

  describe("winning bid", function (){
    it("winning bid should be an object with proper bidder/amount", function (){
      var auction = new Auction(data);
      expect(auction.getWinningBid()).to.deep.equal({"bidder": "987654321", "amount":374})
    })
  })
})
