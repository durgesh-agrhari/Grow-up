###Example:-
<Code language="cpp">
Input: [-3, -4, 5, -1, 2, -4, 6, -1]
Output: 8
Explanation: Subarray [5, -1, 2, -4, 6] is the max sum contiguous subarray with sum 8.

Input: [-2, 3, -1, 2]
Output: 4
Explanation: Subarray [3, -1, 2] is the max sum contiguous subarray with sum 4.

</Code> <br/><br/>

* Solution 1: Implement Kadanes algo in an Array || Maximum subarray sum in given array<br/>

<Code language="cpp">
// C++ program to implement Delete element in an array.
#include <bits/stdc++.h>
using namespace std;
#include <bits/stdc++.h>
using namespace std;

void kadanesalgo(int arr[], int n)
{
	int sum =0;
    int msum = INT_MIN;

    for(int i=0; i<n; i++){
        sum = sum + arr[i];
        if(sum > msum){
            msum = sum;
        }
        if(sum < 0){
            sum =0;
        }
    }
    cout<<msum<<endl;
}

// Driver code.
int main()
{
	int arr[] = { -1, 2, -3, -2, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	kadanesalgo(arr, n);
	return 0;
}

</Code>

<br/>
###Output<br/><br/>
2<br/><br/><br/>


* Solution 2: Implement Kadanes algo in an Array || Maximum subarray sum in given array<br/>

<Code language="cpp">
// C++ program to print largest contiguous array sum
#include <bits/stdc++.h>
using namespace std;

int maxSubArraySum(int a[], int size)
{
	int max_so_far = INT_MIN, max_ending_here = 0;

	for (int i = 0; i < size; i++) {
		max_ending_here = max_ending_here + a[i];
		if (max_so_far < max_ending_here)
			max_so_far = max_ending_here;

		if (max_ending_here < 0)
			max_ending_here = 0;
	}
	return max_so_far;
}

// Driver Code
int main()
{
	int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };
	int n = sizeof(a) / sizeof(a[0]);

	// Function Call
	int max_sum = maxSubArraySum(a, n);
	cout << "Maximum contiguous sum is " << max_sum;
	return 0;
}

</Code>
<br/>
###Output<br/><br/>
Maximum contiguous sum is 7<br/><br/><br/>


* Solution 3: Implement Kadanes algo in an Array || Maximum subarray sum in given array<br/>

<Code language="cpp">
// C++ program to implement Delete element in an array.
#include <bits/stdc++.h>
using namespace std;

// Function to find the maximum sum subarray using Kadane's algorithm
int kadane(int arr[], int n) {
    int max_so_far = arr[0];
    int max_ending_here = arr[0];
    for (int i = 1; i < n; i++) {
        max_ending_here = max(max_ending_here + arr[i], arr[i]);
        max_so_far = max(max_so_far, max_ending_here);
    }
    return max_so_far;
}

// Main function
int main() {
    int arr[] = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
    int n = sizeof(arr) / sizeof(arr[0]);
    int max_sum = kadane(arr, n);
    cout << "Maximum sum of subarray: " << max_sum << endl;
    return 0;
}

</Code>
<br/><br/>

* In this example code, we define a function kadane to find the maximum sum subarray using Kadane's algorithm. <br/><br/>

* We initialize two variables max_so_far and max_ending_here to the first element of the array, and then iterate over the remaining elements of the array.<br/><br/>

 * At each index, we update max_ending_here to be the maximum of the current element or the sum of the current element and max_ending_here. We then update max_so_far to be the maximum of max_so_far and max_ending_here. <br/><br/>
 
 * Finally, we call the kadane function in the main function with an example array and print the maximum sum subarray.

