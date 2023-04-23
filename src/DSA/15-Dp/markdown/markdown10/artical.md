###Example:-
<Code language="cpp">
Input  : arr[] = {2, 2, 2, 2, 2}
Output : arr[] = {2}
         new size = 1

Input  : arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
Output : arr[] = {1, 2, 3, 4, 5}
         new size = 5

</Code> <br/><br/>

* Solution 1: Implement Kadanes algo in an Array || Maximum subarray sum in given array<br/>

<Code language="cpp">
// C++ program to implement Delete element in an array.
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[] = {1, 2, 2, 3, 3, 3, 4, 5, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int j = 0;

    for (int i = 0; i < n - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[j++] = arr[i];
        }
    }
    arr[j++] = arr[n - 1];

    for (int i = 0; i < j; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}


</Code><br/>

In this code, we traverse the sorted array and compare each element with its next element. If they are not equal, we copy the current element to its correct position in the array (at index j) and increment j.<br/><br/> When we have finished iterating over the array, the variable j will contain the length of the array without duplicates.<br/><br/> We then iterate over the shortened array and print out each element. The output of this program will be:

Copy code<br/><br/>
1 2 3 4 5 <br/><br/>
Note that this code assumes that the array contains integers. If the array contains elements of another type, you'll need to modify the code accordingly.<br/><br/><br/><br/>
