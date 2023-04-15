###Example:-
<Code language="cpp">
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}

Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}

</Code> <br/><br/>

Follow the steps below to solve the given problem:<br/><br/>

1 Keep three indices low = 1, mid = 1, and high = N and there are four ranges, 1 to low (the range containing 0), low to mid (the range containing 1), mid to high (the range containing unknown elements) and high to N (the range containing 2).<br/><br/>
2 Traverse the array from start to end and mid is less than high. (Loop counter is i)
If the element is 0 then swap the element with the element at index low and update low = low + 1 and mid = mid + 1<br/><br/>
3 If the element is 1 then update mid = mid + 1<br/><br/>
4 If the element is 2 then swap the element with the element at index high and update high = high – 1 and update i = i – 1. As the swapped element is not processed
Print the array.<br/><br/><br/>

* Solution 1:  Sort 0s 1s 2s in an Array<br/><br/>

<Code language="cpp">
// C++ program to sort an array
// with 0, 1 and 2 in a single pass
#include <bits/stdc++.h>
using namespace std;

// Function to sort the input array,
// the array is assumed
// to have values in {0, 1, 2}
void sort012(int a[], int arr_size)
{
	int lo = 0;
	int hi = arr_size - 1;
	int mid = 0;

	// Iterate till all the elements
	// are sorted
	while (mid <= hi) {
		switch (a[mid]) {

		// If the element is 0
		case 0:
			swap(a[lo++], a[mid++]);
			break;

		// If the element is 1 .
		case 1:
			mid++;
			break;

		// If the element is 2
		case 2:
			swap(a[mid], a[hi--]);
			break;
		}
	}
}

// Function to print array arr[]
void printArray(int arr[], int arr_size)
{
	// Iterate and print every element
	for (int i = 0; i < arr_size; i++)
		cout << arr[i] << " ";
}

// Driver Code
int main()
{
	int arr[] = { 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	sort012(arr, n);

	printArray(arr, n);

	return 0;
}

// This code is contributed by Shivi_Aggarwal

</Code>

<br/>
###Output<br/><br/>
0 0 0 0 0 1 1 1 1 1 2 2 <br/><br/>
Time Complexity: O(n), Only one traversal of the array is needed.<br/>
Space Complexity: O(1), No extra space is required<br/><br/><br/>


* Solution 2:  Sort 0s 1s 2s in an Array<br/><br/>

<Code language="cpp">
// C++ program to print largest contiguous array sum
#include <bits/stdc++.h>
using namespace std;

void sort012(int arr[], int n) {
    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
        switch (arr[mid]) {
            case 0:
                swap(arr[low], arr[mid]);
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(arr[mid], arr[high]);
                high--;
                break;
        }
    }
}

int main() {
    int arr[] = {0, 1, 2, 0, 1, 2, 0, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort012(arr, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}

</Code>

<br/><br/>

* In this code, the sort012 function takes an integer array arr of size n as input and sorts it in-place. The function uses three pointers - low, mid, and high - to partition the array into three parts, such that all elements less than arr[low] are 0s, all elements greater than arr[high] are 2s, and all elements between arr[low] and arr[high] are 1s.<br/><br/>

* The function uses a switch statement to move elements around based on their values. If arr[mid] is 0, it is swapped with arr[low] and low and mid are incremented. If arr[mid] is 1, mid is simply incremented. If arr[mid] is 2, it is swapped with arr[high] and high is decremented.<br/><br/>

* The main function creates an example array, calls the sort012 function to sort it, and then prints out the sorted array. The output of the above code would be:<br/><br/>

###Output<br/>
0 0 0 1 1 1 2 2 2
