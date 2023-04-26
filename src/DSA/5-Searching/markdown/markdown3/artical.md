###Example: 
<Code language="cpp">
Input : arr[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}, x = 5
Output : First Occurrence = 2
              Last Occurrence = 5
</Code>
<br/><br/>

* How to find Fist and last occurrence in a sorted array

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int firstOccurrence(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    int first = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            first = mid;
            right = mid - 1;
        }
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return first;
}

int lastOccurrence(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    int last = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            last = mid;
            left = mid + 1;
        }
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return last;
}

int main() {
    int arr[] = {1, 2, 3, 3, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 3;
    int first = firstOccurrence(arr, n, target);
    int last = lastOccurrence(arr, n, target);
    cout << "First occurrence: " << first << endl;
    cout << "Last occurrence: " << last << endl;
    return 0;
}

</Code><br/><br/>

* In this code, firstOccurrence() function finds the first occurrence of the target element in the array using binary search, and lastOccurrence() function finds the last occurrence of the target element in the array using binary search.
<br/><br/>

* The main() function calls both functions to get the first and last occurrences of the target element in the array.

<br/><br/>
