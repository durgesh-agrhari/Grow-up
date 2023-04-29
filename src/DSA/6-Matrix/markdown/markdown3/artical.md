
<pre><code>
// C++ program to Search in matrix.
#include <bits/stdc++.h>
using namespace std;

int main() {
  int rows, cols;
  cout << "Enter the number of rows and columns for the matrix: ";
  cin >> rows >> cols;

  int matrix[rows][cols];
  cout << "Enter elements for the matrix:\n";
  for(int i=0; i<rows; i++) {
    for(int j=0; j<cols; j++) {
      cin >> matrix[i][j];
    }
  }

  int target;
  cout << "Enter the element to search for: ";
  cin >> target;

  // search for the target element
  int i = 0, j = cols - 1;
  while(i < rows && j >= 0) {
    if(matrix[i][j] == target) {
      cout << "Element found at position: " << i << ", " << j << endl;
      return 0;
    }
    if(matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }

  cout << "Element not found" << endl;
  return 0;
}

</code></pre>
<br/><br/>

___________________________________________

<br/><br/>

<Code language="cpp">

Input

Enter the number of rows and columns for the matrix:
3 3
Enter elements for the matrix:
1 2 3
4 5 6
7 8 9
Enter the element to search for:
9

Output
Element found at position: 2, 2

</Code>

* In this example, the user is prompted to enter the number of rows and columns for the matrix, followed by the elements of the matrix. Then the user is prompted to enter the element to search for. The program then searches for the target element using the algorithm described above and prints the position of the element if it is found or a message indicating that the element was not found.