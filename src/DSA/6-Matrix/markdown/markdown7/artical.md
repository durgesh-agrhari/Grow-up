
* C++ program to rotate  degree in matrix. <br/>
  

<pre><code>
#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Enter the number of rows/columns of the matrix: ";
  cin >> n;

  int matrix[n][n];

  cout << "Enter the elements of the matrix:\n";
  for(int i=0; i<n; i++) {
    for(int j=0; j<n; j++) {
      cin >> matrix[i][j];
    }
  }

  int newMatrix[n][n];

  // Copy elements into new matrix while swapping rows and columns
  for(int i=0; i<n; i++) {
    for(int j=0; j<n; j++) {
      newMatrix[j][n-1-i] = matrix[i][j];
    }
  }

  // Reverse each row of the new matrix
  for(int i=0; i<n; i++) {
    for(int j=0; j<n/2; j++) {
      int temp = newMatrix[i][j];
      newMatrix[i][j] = newMatrix[i][n-1-j];
      newMatrix[i][n-1-j] = temp;
    }
  }

  // Print the rotated matrix
  cout << "The 90-degree rotated matrix is:\n";
  for(int i=0; i<n; i++) {
    for(int j=0; j<n; j++) {
      cout << newMatrix[i][j] << " ";
    }
    cout << endl;
  }

  return 0;
}

</code></pre>

<br/><br/>

___________________________________________

<br/><br/>

<Code language="cpp">

Input

Enter the number of rows/columns of the matrix:
3 
Enter the elements of the matrix:
1 2 3
4 5 6
7 8 9


Output

The 90-degree rotated matrix is:
1 4 7 
2 5 8 
3 6 9

</Code><br/>

* In this example, the user is prompted to enter the number of rows and columns of the original matrix, followed by the elements of the matrix. The program then creates a new matrix and copies the elements of the original matrix into it while swapping the rows and columns. It then reverses each row of the new matrix to obtain the 90-degree rotated matrix. Finally, the program prints the rotated matrix.