Stack in C++ STL implementation.


<Code language="cpp">
// C++ program to implement stack in C++.
#include <bits/stdc++.h>
using namespace std;

int main() {
    stack int stack;
    stack.push(21); // The values pushed in the stack should be of the same data which is written during declaration of stack
    stack.push(22);
    stack.push(24);
    stack.push(25);
    int num=0;
      stack.push(num);
    stack.pop();
    stack.pop();
      stack.pop();
   
    while(stack.empty()) {
        cout << stack.top() <<" ";
        stack.pop();
    }
}

</Code>

<br/>

Input<br/>
5<br/>
1 2 3 4 5<br/>

<br/><br/>

Output<br/>
5 4 3 2 1

<br/><br/>
*In C++, you can reverse the elements of an array using the std::reverse() function from the <algorithm> library. Here's an example of how to use it:
<br/><br/>

Rreverse array element in cpp

<Code language="cpp">
// C++ program to implement reverse array element.
#include <bits/stdc++.h>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int n = sizeof(arr) / sizeof(arr[0]);  // Determine the length of the array

  // Print the original array
  cout << "Original array: ";
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout<<endl;

  // Reverse the array using std::reverse()
  reverse(arr, arr + n);

  // Print the reversed array
  cout << "Reversed array: ";
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout<<endl;

  return 0;
}


</Code>

<br/><br/>

Original array: 1 2 3 4 5<br/><br/>
Reversed array: 5 4 3 2 1<br/><br/>
