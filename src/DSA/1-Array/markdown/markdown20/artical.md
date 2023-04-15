###Example:-
<Code language="cpp">
Input: arr[] = {2, 0, 2}
Output: 2
Explanation: The structure is like below.
We can trap 2 units of water in the middle gap.

Input: arr[]   = {3, 0, 2, 0, 4}
Output: 7
Explanation: Structure is like below.
We can trap “3 units” of water between 3 and 2,
“1 unit” on top of bar 2 and “3 units” between 2 and 4.

</Code> <br/><br/>

* Solution 1: Trapping rain Water in an Array<br/>

<Code language="cpp">
// C++ program to implementation of the approach
#include <bits/stdc++.h>
using namespace std;

// C++ implementation of the approach
// Function to return the maximum
// water that can be stored
int maxWater(int arr[], int n)
{
	// To store the maximum water
	// that can be stored
	int res = 0;

	// For every element of the array
	for (int i = 1; i < n - 1; i++) {

		// Find the maximum element on its left
		int left = arr[i];
		for (int j = 0; j < i; j++)
			left = max(left, arr[j]);

		// Find the maximum element on its right
		int right = arr[i];
		for (int j = i + 1; j < n; j++)
			right = max(right, arr[j]);

		// Update the maximum water
		res = res + (min(left, right) - arr[i]);
	}

	return res;
}

// Driver code
int main()
{
	int arr[] = { 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	cout << maxWater(arr, n);

	return 0;
}


</Code>

<br/>
###Output<br/><br/>
6<br/><br/>
Complexity Analysis: <br/><br/>

Time Complexity: O(N2). There are two nested loops traversing the array.<br/>
Space Complexity: O(1). No extra space is required.<br/><br/><br/>


* Here's the C++ code to solve the problem of trapping rainwater in an array using the two-pointer approach, without using vector:<br/><br/>

* Solution 2: Trapping rain Water in an Array<br/>


<Code language="cpp">
int trap(int height[], int n) {
    int left = 0, right = n - 1;
    int left_max = 0, right_max = 0;
    int result = 0;
    while (left <= right) {
        if (height[left] <= height[right]) {
            left_max = max(left_max, height[left]);
            result += left_max - height[left];
            left++;
        }
        else {
            right_max = max(right_max, height[right]);
            result += right_max - height[right];
            right--;
        }
    }
    return result;
}

</Code>

This function takes an array of non-negative integers representing the heights of walls and its size n, and returns the amount of rainwater that can be trapped between them. The algorithm is the same as in the previous answer, but the function uses a plain C-style array and its size n.