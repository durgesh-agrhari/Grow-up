###Example:-
<Code language="cpp">
Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8} 
Output: arr3[] = {4, 5, 7, 8, 8, 9} 

</Code> <br/><br/>

* Solution 1: 


<Code language="cpp">
// C++ program to implement Delete element in an array.
#include <bits/stdc++.h>
using namespace std;
#include <bits/stdc++.h>
using namespace std;
// C++ program to merge two sorted arrays/
#include<bits/stdc++.h>
using namespace std;

void mergeArrays(int arr1[], int arr2[], int n1,
							int n2, int arr3[])
{
	int i = 0, j = 0, k = 0;
	// traverse the arr1 and insert its element in arr3
	while(i < n1){
	arr3[k++] = arr1[i++];
	}
	// now traverse arr2 and insert in arr3
	while(j < n2){
	arr3[k++] = arr2[j++];
	}
	// sort the whole array arr3
	sort(arr3, arr3+n1+n2);
}

// Driver code
int main()
{
	int arr1[] = {1, 3, 5, 7};
	int n1 = sizeof(arr1) / sizeof(arr1[0]);

	int arr2[] = {2, 4, 6, 8};
	int n2 = sizeof(arr2) / sizeof(arr2[0]);

	int arr3[n1+n2];
	mergeArrays(arr1, arr2, n1, n2, arr3);

	cout << "Array after merging" <<endl;
	for (int i=0; i < n1+n2; i++)
		cout << arr3[i] << " ";

	return 0;
}


</Code>

###Output<br/><br/>
Array after merging<br/>
1 2 3 4 5 6 7 8 <br/><br/>
Time Complexity : O((m+n) log(m+n)) , the whole size of arr3 is m+n<br/>
Auxiliary Space: O(1), No extra space is used<br/><br/>

Method 2 (O(n1 * n2) Time and O(n1+n2) Extra Space) <br/><br/>

Create an array arr3[] of size n1 + n2.<br/>
Copy all n1 elements of arr1[] to arr3[]<br/>
Traverse arr2[] and one by one insert elements (like insertion sort) of arr3[] to arr1[]. This step take O(n1 * n2) time.<br/><br/>