/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices){
    let buy = prices[0] // 7
    let profit = 0 
    prices[0] = 0

//  starting at 1 because we already recored 0 index above
    for(let i = 1 ; i < prices.length; i ++){
        if(buy > prices[i]){
            buy = prices[i]
            prices[i] = 0
        }else{
            profit = Math.max(prices[i] - buy, profit)
        }
    }
    return profit 
}
function maxProfit(prices) {
    let buy = prices[0]; // initialize buy to the first price
    let profit = 0; // initialize profit to 0
    prices[0] = 0; // set the first price to 0, since we've already used it as the buy price

    // iterate through the prices array, starting at index 1
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            // if the current price is lower than the buy price,
            // update the buy price and set the current price to 0
            buy = prices[i];
            prices[i] = 0;
        } else {
            // if the current price is higher than the buy price,
            // calculate the profit that would be made by selling at this price,
            // and update the profit variable if this profit is higher than the current profit value
            profit = Math.max(prices[i] - buy, profit);
        }
    }

    return profit; // return the maximum profit that can be made
}