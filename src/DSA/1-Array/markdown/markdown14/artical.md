###Example:-
<Code language="cpp">
Input: arr[] = {1, 2, 0, 4, 3, 0, 5, 0} 
Output: 0 0 0 2 4 3 5 1 
Input: arr[] = {1, 2, 0, 0, 0, 3, 6}; 
Output: 0 0 0 2 3 6 1 

</Code> <br/><br/>

* Solution 1: Moveall Zero to Beginning in an Array || Brute Force <br/>

<Code language="cpp">

#include<bits/stdc++.h>
using namespace std;

void zerosToEnd(int arr[],int n) {

        int temp[n];
        int k=0;
        for (int i=0;i<n;i++){
            if (arr[i]!=0){
                temp[k]=arr[i];
                k++;
            }
        }
        while (k<n){
            temp[k]=0;
            k++;
        }
        for(int i=0;i<n;i++)
        {
            cout<<temp[i]<<" ";
        }
    }

int main() {
      int arr[] ={ 1,2,0,1,0,4,0};
       zerosToEnd(arr,7);
}


</Code>
<br/>
###Output<br/><br/>
 1 2 1 4 0 0 0<br/><br/>
Time complexity: o(n)<br/>

Space complexity: o(n)<br/><br/><br/><br/>


* Solution 2: Moveall Zero to Beginning in an Array <br/><br/><br/>

Approach: Traverse the array from left to right and move all the elements which are not equal to 1 at the beginning and then put 1’s in the rest of the indices at the end of the array. <br/><br/>
Now, find the index of the last element which is not equal to 1 say lastInd and then starting from this index to the beginning of the array push all the elements which are not equal to 0 in the end till lastInd and then put 0’s in the beginning.
Below is the implementation of the above approach: <br/><br/>

<Code language="cpp">
// C++ implementation of the approach
#include <bits/stdc++.h>
using namespace std;

// Utility function to print the contents of an array
void printArr(int arr[], int n)
{
	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";
}

// Function that pushes all the zeros to the start and ones
// to the end of an array
void pushBinaryToBorder(int arr[], int n)
{
	// To store the count of elements which are not equal to 1
	int count1 = 0;
	// Traverse the array and calculate count of elements
	// which are not 1
	for (int i = 0; i < n; i++)
		if (arr[i] != 1)
			arr[count1++] = arr[i];

	// Now all non-ones elements have been shifted to front
	// and 'count1' is set as index of first 1. Make all
	// elements 1 from count to end.
	while (count1 < n)
		arr[count1++] = 1;
	// Initialize lastNonBinary position to zero
	int lastNonOne = 0;

	// Traverse the array and pull non-zero elements to the
	// required indices
	for (int i = n - 1; i >= 0; i--) {
		// Ignore the 1's
		if (arr[i] == 1)
			continue;
		// Mark the position Of last NonBinary integer
		if (!lastNonOne)
			lastNonOne = i;
		// Place non-zero element to their required indices
		if (arr[i] != 0)
			arr[lastNonOne--] = arr[i];
	}

	// Put zeros to start of array
	while (lastNonOne >= 0)
		arr[lastNonOne--] = 0;
}

// Driver code
int main()
{
	int arr[] = { 1, 2, 0, 0, 0, 3, 6 };
	int n = sizeof(arr) / sizeof(arr[0]);
	pushBinaryToBorder(arr, n);
	printArr(arr, n);
	return 0;
}

</Code>

<br/>
###Output<br/><br/>
0 0 0 2 3 6 1<br/><br/>

* Time Complexity: O(N), where N represents the size of the given array.<br/>

* Auxiliary Space: O(1), no extra space is required, so it is a constant.<br/>


