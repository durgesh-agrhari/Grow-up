
* C++ program to replace element in matrix. <br/>
  

<pre><code>

// C++ program to replace element in matrix.
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

  int row, col, new_value;
  cout << "Enter the row and column indices of the element to replace: ";
  cin >> row >> col;

  if(row >= 0 && row < rows && col >= 0 && col < cols) {
    cout << "Enter the new value: ";
    cin >> new_value;

    matrix[row][col] = new_value;

    cout << "The new matrix is:\n";
    for(int i=0; i<rows; i++) {
      for(int j=0; j<cols; j++) {
        cout << matrix[i][j] << " ";
      }
      cout << endl;
    }
  } else {
    cout << "Invalid row or column index" << endl;
  }

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
Enter the row and column indices of the element to replace:
2 2
Enter the new value: 
10

Output

The new matrix is:
1 2 3 
4 5 6 
7 8 10

</Code><br/>

* In this example, the user is prompted to enter the number of rows and columns for the matrix, followed by the elements of the matrix. Then the user is prompted to enter the row and column indices of the element to replace. If the indices are valid, the user is prompted to enter the new value for the element. The program then replaces the element with the new value and prints the updated matrix. If the indices are invalid, the program prints an error message.