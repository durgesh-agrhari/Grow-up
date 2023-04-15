###Example:-
<Code language="cpp">
Input : A[]={3, 3, 4, 2, 4, 4, 2, 4, 4}
Output : 4

Input : A[] = {3, 3, 4, 2, 4, 4, 2, 4}
Output : No Majority Element

</Code> <br/>

* Explanation: The frequency of 4 is 5 which is greater than the half of the size of the array size. 
* Explanation: There is no element whose frequency is greater than the half of the size of the array size.<br/><br/><br/>


* Solution 1:  Majority element in an Array<br/>

<Code language="cpp">
// C++ program to implement Delete element in an array.
#include <bits/stdc++.h>
// C++ program to find Majority
// C++ program to find Majority
// element in an array
using namespace std;

// Function to find Majority element
// in an array
void findMajority(int arr[], int n)
{
	int maxCount = 0;
	int index = -1; // sentinels
	for (int i = 0; i < n; i++) {
		int count = 0;
		for (int j = 0; j < n; j++) {
			if (arr[i] == arr[j])
				count++;
		}

		// update maxCount if count of
		// current element is greater
		if (count > maxCount) {
			maxCount = count;
			index = i;
		}
	}

	// if maxCount is greater than n/2
	// return the corresponding element
	if (maxCount > n / 2)
		cout << arr[index] << endl;

	else
		cout << "No Majority Element" << endl;
}

// Driver code
int main()
{
	int arr[] = { 1, 1, 2, 1, 3, 5, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	// Function calling
	findMajority(arr, n);

	return 0;
}


</Code>

<br/>
###Output<br/><br/>
1<br/><br/>
Time Complexity: O(n*n), A nested loop is needed where both the loops traverse the array from start to end.<br/><br/>
Auxiliary Space: O(1), No extra space is required.<br/><br/>


* Solution 2:  Majority element in an Array<br/><br/>

The majority element in an array is the element that appears more than half of the array's size. For example, in the array [2, 3, 4, 2, 2, 2, 5, 2, 1], the majority element is 2 because it appears 5 times, which is more than half of the array's size of 9.<br/><br/>

One way to find the majority element in an array is to use the Boyer-Moore Voting Algorithm. This algorithm has a time complexity of O(n) and a space complexity of O(1).<br/><br/>

The algorithm works as follows:<br/><br/>

1: Initialize two variables, candidate and count, to None and 0, respectively.<br/>

2: Iterate through the array. For each element:<br/>

a. If the count is 0, set the candidate to the current element.<br/>

b. If the current element is the same as the candidate, increment the count.<br/>

c. If the current element is different from the candidate, decrement the count.<br/>

3: The candidate is the majority element.<br/><br/> 

<Code language="cpp">
// C++ program to print largest contiguous array sum
#include <bits/stdc++.h>
using namespace std;

int majority_element(int* nums, int size) {
    int candidate = 0, count = 0;
    for (int i = 0; i < size; i++) {
        if (count == 0) {
            candidate = nums[i];
            count = 1;
        } else if (candidate == nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

int main() {
    int nums[] = {2, 3, 4, 2, 2, 2, 5, 2, 1};
    int size = sizeof(nums) / sizeof(int);
    int majority = majority_element(nums, size);
    cout << "The majority element is: " << majority << endl;
    return 0;
}

</Code>
<br/>
<br/><br/>

* This code uses a regular C-style array to represent the array. The majority_element() function takes a pointer to the array and its size as arguments, and returns the majority element. The main() function creates an example array, gets its size, calls the majority_element() function, and prints the result.<br/><br/>

* Note that in this code, we calculate the size of the array using sizeof(nums) / sizeof(int), which gives us the number of bytes that the array takes up divided by the size of an integer. This is a standard way to get the size of an array in C++, but it only works for arrays declared on the stack (i.e., not dynamically allocated arrays). If you're using a dynamically allocated array, you'll need to keep track of its size separately.

