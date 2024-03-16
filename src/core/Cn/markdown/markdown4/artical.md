####Delete elelemt in an array

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int deleteElementsInRange(int arr[], int n, int l, int r) {
   int i, newIndex = 0;
   for (i = 0; i < n; i++) {
      // adding updating element if it is not in the given range
      if (i <= l || i >= r) {
         arr[newIndex] = arr[i];
         newIndex++;
      }
   }
   // returing the updated index
   return newIndex;
}
int main() {
   int n = 9, l = 1, r = 6;
   int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
   int updatedArrayLength = deleteElementsInRange(arr, n, l, r);
   for (int i = 0; i < updatedArrayLength; i++) {
      cout << arr[i] << " ";
   }
   cout << endl;
   return 0;
}
</Code>

<br/><br/>
###Output<br/><br/>
If you execute the above program, then you will get the following result.<br/>

1 2 7 8 9<br/><br/>

Delete elelemt in an array <br/>

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 4, 5, 6, 6, 7}; //for finding the length of array
  int n = sizeof(arr) / sizeof(arr[0]);

  // Check for duplicates
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        cout<<"Duplicate element found: "<<arr[i]<<endl;
      }
    }
  }

  return 0;
}
</Code>

<br/><br/>

