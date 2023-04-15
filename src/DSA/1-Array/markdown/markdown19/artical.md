<!-- ###Example:-
<Code language="cpp">


</Code> <br/><br/> -->

* Solution 1: Implement Kadanes algo in an Array || Maximum subarray sum in given array<br/>

<Code language="cpp">

// C++ program to implement Delete element in an array.
#include <bits/stdc++.h>
using namespace std;

int maxProfit(int prices[], int n) {
    int minPrice = prices[0];
    int maxProfit = 0;

    for (int i = 1; i < n; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else {
            int profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}

int main() {
    int prices[] = { 7, 1, 5, 3, 6, 4 };
    int n = sizeof(prices) / sizeof(prices[0]);
    int maxProfit = maxProfit(prices, n);

    cout << "Max profit: " << maxProfit << endl;

    return 0;
}


</Code>

<br/><br/>

* In this code, we define an integer array of stock prices prices and call the maxProfit() function to find the maximum profit that can be earned by buying and selling the stock once. The function takes the prices array as input, along with the size of the array n, and returns the maximum profit as an integer.<br/><br/>

* We start by initializing two integer variables minPrice and maxProfit, where minPrice is the minimum price seen so far, and maxProfit is the maximum profit that can be earned so far. We set minPrice to the first price in the prices array and maxProfit to 0.<br/><br/>

* We then loop through the prices array, starting at index 1. For each price, we check if it is lower than the current minPrice. If it is, we update minPrice to the new price. Otherwise, we calculate the profit that can be earned by buying the stock at minPrice and selling it at the current price. If this profit is greater than the current maxProfit, we update maxProfit to the new profit.<br/><br/>

* Finally, we return maxProfit, which is the maximum profit that can be earned by buying and selling the stock once. In this example, the output will be "Max profit: 5", since the maximum profit that can be earned by buying at 1 and selling at 6 is 5.

