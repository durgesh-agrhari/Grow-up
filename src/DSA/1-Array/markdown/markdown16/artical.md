###Example:-
<Code language="cpp">
Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
Output: 10 
</Code> <br/><br/>


* To find the kth largest and smallest elements in an array in C++ without using the greater function, you can use the following code:<br/><br/>

* Solution 1: <br/>

<Code language="cpp">
//Kth longest ele
#include <bits/stdc++.h>
using namespace std;

int main() {
    int arr[] = { 5, 3, 9, 1, 7 };
    int k = 3;

    // find kth smallest element
    nth_element(arr, arr + k - 1, arr + 5);
    cout << k << "th smallest element is " << arr[k - 1] << endl;

    // find kth largest element
    nth_element(arr, arr, arr + 5 - k);
    cout << k << "th largest element is " << arr[5 - k] << endl;

    return 0;
}


</Code>



<br/><br/>

* This code is very similar to the previous example, but instead of using the greater function, we use a different range of indices for the third argument of the nth_element() function to find the kth largest element. Specifically, we use arr + 5 - k instead of arr + 5 for the third argument.<br/><br/>

* To understand why this works, consider that the nth_element() function rearranges the elements in the array such that the kth smallest element is at index k - 1, and all the elements before it are less than or equal to it, and all the elements after it are greater than or equal to it.<br/><br/>
 
 * So, to find the kth largest element, we can rearrange the elements such that the kth largest element is at index 5 - k, and all the elements before it are greater than or equal to it, and all the elements after it are less than or equal to it. Therefore, we can use arr as the second argument and arr + 5 - k as the third argument to nth_element() to achieve this result.<br/><br/>

* Note that, as before, this code assumes that the array has at least k elements. If the array has fewer than k elements, the code may produce incorrect results.<br/><br/>





