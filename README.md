# Micro-purchase Data

18F's [micro-purchase platform](https://micropurchase.18f.gov) recently added [an API](https://pages.18f.gov/micropurchase-api-docs/) for access to the underlying data.

To help take advantage of this API, we've written a module that can derive key metrics for each auction, such as the number of unique bidders and the lowest bid. Although we wrote the underlying platform in Rails, we wrote this module in JavaScript so that it can be used both server-side and client-side.

## Installation

`npm install micropurchase-data`

## Usage

The documentation for the Auction class is available at [docs/Auction.md](docs/Auction.md).

In the browser, use [auction.min.js](dist/auction.min.js) located in the `dist` folder. For use in node, see below.

## Example usage

``` js
var Auction = require('micropurchase-data').Auction;

// This assumes that data is the value of the `auctions` value from the /auctions endpoint  
function getUniqueBiddersFromAuctions(data) {
  return data.map(function (d) {
    var a = new Auction(d);
    return {"title":d["title"], "amount":a.getWinningBid()["amount"], "uniqueBidders": a.getUniqueBidders().length}
  });
}
```

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
