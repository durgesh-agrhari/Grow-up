###Example:-
<Code language="cpp">
For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 0:    floor doesn't exist in array,  ceil  = 1
For x = 1:    floor  = 1,  ceil  = 1
For x = 5:    floor  = 2,  ceil  = 8
For x = 20:   floor  = 19,  ceil doesn't exist in array

</Code> <br/><br/>

* 1 Solution 1: C++ implementation Ceiling in a sorted array
 of above approach

<Code language="cpp">

// C++ implementation of above approach
#include <bits/stdc++.h>
using namespace std;

int ceilSearch(int arr[], int low, int high, int x)
{
	int i;
	/* If x is smaller than or equal to first element,
		then return the first element */
	if(x <= arr[low])
		return low;
	//Otherwise, linearly search for ceil value 
	for(i = low; i < high; i++)
	{
		if(arr[i] == x)
		return i;
		/* if x lies between arr[i] and arr[i+1] including
		arr[i+1], then return arr[i+1] */
		if(arr[i] < x && arr[i+1] >= x)
		return i+1;
	}	
	/* If we reach here then x is greater than the last element
		of the array, return -1 in this case */
	return -1;
}

</Code>

<Code language="cpp">
int main()
{
	int arr[] = {1, 2, 8, 10, 10, 12, 19};
	int n = sizeof(arr)/sizeof(arr[0]);
	int x = 3;
	int index = ceilSearch(arr, 0, n-1, x);
	if(index == -1)
		cout << "Ceiling of " << x << " doesn't exist in array ";
	else
		cout << "ceiling of " << x << " is " << arr[index];
	return 0;
}

// This is code is contributed by rathbhupendra
</Code>

<br/><br/>
###Output<br/><br/>
ceiling of 3 is 8<br/>
Time Complexity: O(n),<br/> 
Auxiliary Space: O(1)<br/><br/><br/>


##Floor in a Sorted Array<br/><br/>

Given a sorted array and a value x, the floor of x is the largest element in the array smaller than or equal to x. Write efficient functions to find the floor of x<br/><br/>


###Example:-
<Code language="cpp">
Input: arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 5
Output: 2
Explanation: 2 is the largest element in 
arr[] smaller than 5

Input: arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 20
Output: 19
Explanation: 19 is the largest element in
arr[] smaller than 20
</Code> <br/><br/>

* 1 Solution 2: C++ implementation flore in a sorted array
 of above approach<br/>

<Code language="cpp">
// C++ program to find floor of a given number
// in a sorted array
#include <bits/stdc++.h>
using namespace std;

/* An inefficient function to get
index of floor of x in arr[0..n-1] */
int floorSearch(int arr[], int n, int x)
{
	// If last element is smaller than x
	if (x >= arr[n - 1])
		return n - 1;

	// If first element is greater than x
	if (x < arr[0])
		return -1;

	// Linearly search for the first element
	// greater than x
	for (int i = 1; i < n; i++)
		if (arr[i] > x)
			return (i - 1);

	return -1;
}

int main()
{
	int arr[] = { 1, 2, 4, 6, 10, 12, 14 };
	int n = sizeof(arr) / sizeof(arr[0]);
	int x = 7;
	int index = floorSearch(arr, n - 1, x);
	if (index == -1)
		cout << "Floor of " << x
			<< " doesn't exist in array ";
	else
		cout << "Floor of " << x << " is " << arr[index];
	return 0;
}

// This code is contributed by shivanisinghss2110



</Code><br/>

###Output <br/><br/>
Floor of 7 is 6<br/><br/>
Time Complexity: O(N). To traverse an array only one loop is needed.<br/>
Auxiliary Space: O(1). No extra space is required<br/>