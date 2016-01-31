"use strict";
/**
  * Class representing an Auction.
  * @param {Object} data - The auction JSON data.
  */
class Auction {
  constructor(data) {
    this.data = data;
  }

  /**
   * @function
   * @returns {Array} - unique DUNS numbers for the auction.
   **/
  getUniqueBidders() {
    var a = [];
    var bids = this.data.bids;
    for (var i=0, l=bids.length; i<l; i++)
        if (a.indexOf(bids[i].bidder.duns_number) === -1 && bids[i].duns_number !== '')
            a.push(bids[i].bidder.duns_number);
    return a;
  }

  /**
   * @function
   * @returns {Object} - winning DUNS number and amount for the auction
   **/
  getWinningBid() {
    var bid = this.data.bids[0]
    return {"bidder": bid.bidder.duns_number, "amount": bid.amount};
  }

}

module.exports = Auction;
