"use strict";
class Auction {

  constructor(data) {
    this.data = data;
  }

  /**
   * getUniqueBidders
   * Returns the DUNS numbers for each unique bidder in the auction
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
   * getWinningBid
   * Returns the winning DUNS number and amount for the auction
   **/
  getWinningBid() {
    var bid = this.data.bids[0]
    return {"bidder": bid.bidder.duns_number, "amount": bid.amount};
  }

}

module.exports = Auction;
