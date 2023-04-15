###Example:-
<Code language="cpp">
Input: arr[] = {0, -1, 2, -3, 1}, x= -2
Output: Yes
Explanation:  If we calculate the sum of the output,1 + (-3) = -2
Input: arr[] = {1, -2, 1, 0, 5}, x = 0
Output: No

</Code> <br/><br/>

* Solution 1: Find Two sum in an Array <br/>

<Code language="cpp">
// C++ program for the above approach
#include <bits/stdc++.h>

using namespace std;

// Function to find and print pair
bool chkPair(int A[], int size, int x)
{
	for (int i = 0; i < (size - 1); i++) {
		for (int j = (i + 1); j < size; j++) {
			if (A[i] + A[j] == x) {
				return 1;
			}
		}
	}

	return 0;
}

// Driver code
int main()
{
	int A[] = { 0, -1, 2, -3, 1 };
	int x = -2;
	int size = sizeof(A) / sizeof(A[0]);

	if (chkPair(A, size, x)) {
		cout << "Yes" << endl;
	}
	else {
		cout << "No" << x << endl;
	}

	return 0;
}

// This code is contributed by Samim Hossain Mondal.

</Code>

<br/>
###Output<br/><br/>
Yes<br/><br/>
Time Complexity: O(N2), Finding pair for every element in the array of size N.<br/>
Auxiliary Space: O(1)<br/><br/><br/>


* Solution 2: Find Two sum in an Array <br/>

<Code language="cpp">
// C++ program to check if given array
// has 2 elements whose sum is equal
// to the given value

#include <bits/stdc++.h>
using namespace std;

// Function to check if array has 2 elements
// whose sum is equal to the given value
bool hasArrayTwoCandidates(int A[], int arr_size, int sum)
{
	int l, r;
	sort(A, A + arr_size);
	l = 0;
	r = arr_size - 1;
	while (l < r) {
		if (A[l] + A[r] == sum)
			return 1;
		else if (A[l] + A[r] < sum)
			l++;
		else // A[l] + A[r] > sum
			r--;
	}
	return 0;
}

int main()
{
	int A[] = { 1, 4, 45, 6, 10, -8 };
	int n = 16;
	int arr_size = sizeof(A) / sizeof(A[0]);

	// Function calling
	if (hasArrayTwoCandidates(A, arr_size, n))
		cout << "Yes";
	else
		cout << "No";

	return 0;
}


</Code>
<br/>
###Output<br/><br/>
Yes<br/><br/>
Time Complexity: O(NlogN), Time complexity for sorting the array<br/>
Auxiliary Space: O(1)<br/><br/>

