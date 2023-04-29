
* C++ program to Compare element in matrix. <br/>
  

<pre><code>

#include <iostream>
using namespace std;

int main() {
  int rows, cols;
  cout << "Enter the number of rows and columns for the matrices: ";
  cin >> rows >> cols;

  int matrix1[rows][cols];
  int matrix2[rows][cols];

  cout << "Enter elements for the first matrix:\n";
  for(int i=0; i<rows; i++) {
    for(int j=0; j<cols; j++) {
      cin >> matrix1[i][j];
    }
  }

  cout << "Enter elements for the second matrix:\n";
  for(int i=0; i<rows; i++) {
    for(int j=0; j<cols; j++) {
      cin >> matrix2[i][j];
    }
  }

  bool equal = true;
  for(int i=0; i<rows; i++) {
    for(int j=0; j<cols; j++) {
      if(matrix1[i][j] != matrix2[i][j]) {
        equal = false;
        break;
      }
    }
  }

  if(equal) {
    cout << "Matrices are equal" << endl;
  } else {
    cout << "Matrices are not equal" << endl;
  }

  return 0;
}


</code></pre>

<br/><br/>

___________________________________________

<br/><br/>

<Code language="cpp">

Input

Enter the number of rows and columns for the matrices:
3 3
Enter elements for the first matrix:
1 2 3
4 5 6
7 8 9
Enter elements for the second matrix:
1 2 3
4 5 6
7 8 9

Output
Matrices are equal

</Code><br/>

* In this example, the user is prompted to enter the number of rows and columns for the matrices, followed by the elements of both matrices. The program then compares the elements of the two matrices using a nested loop. If all corresponding elements are equal, the program prints a message indicating that the matrices are equal. Otherwise, it prints a message indicating that the matrices are not equal.