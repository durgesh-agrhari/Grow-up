###Example:-
<Code language="cpp">
Input: arr[] = {8, 4, 2, 1}
Output: 6
Explanation: Given array has six inversions: (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1).

Input: arr[] = {1, 20, 6, 4, 5}
Output: 5
Explanation: Given array has five inversions: (20, 6), (20, 4), (20, 5), (6, 4), (6, 5). 

</Code> <br/><br/>

* Solution 1: Inversionan Array

<Code language="cpp">

// C++ program to Count Inversions
// in an array
#include <bits/stdc++.h>
using namespace std;

int getInvCount(int arr[], int n)
{
	int inv_count = 0;
	for (int i = 0; i < n - 1; i++)
		for (int j = i + 1; j < n; j++)
			if (arr[i] > arr[j])
				inv_count++;

	return inv_count;
}

// Driver Code
int main()
{
	int arr[] = { 1, 20, 6, 4, 5 };
	int n = sizeof(arr) / sizeof(arr[0]);
	cout << " Number of inversions are "
		<< getInvCount(arr, n);
	return 0;
}

// This code is contributed
// by Akanksha Rai


</Code>

<br/>
###Output<br/><br/>
 Number of inversions are 5<br/>
Time Complexity: O(N2), Two nested loops are needed to traverse the array from start to end.<br/><br/>
Auxiliary Space: O(1), No extra space is required.<br/><br/>

