###Example:-
<pre><code>

Examples 1:

Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

Output: [[1,0,1],[0,0,0],[1,0,1]]

Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0


</code></pre> 
<br/>

-------------------------------

<br/><br/>

* C++ program to set matrix zero in matrix. <br/>
  

<pre><code>

#include <iostream>
#include <vector>
using namespace std;

int main() {
  int m, n;
  cout << "Enter the number of rows of the matrix: ";
  cin >> m;
  cout << "Enter the number of columns of the matrix: ";
  cin >> n;

  vector<vector<int>> matrix(m, vector<int>(n, 0));

  cout << "Enter the elements of the matrix:\n";
  for(int i=0; i<m; i++) {
    for(int j=0; j<n; j++) {
      cin >> matrix[i][j];
    }
  }

  vector<bool> row(m, false);
  vector<bool> col(n, false);

  // Traverse through the matrix and mark the rows and columns that contain a zero element
  for(int i=0; i<m; i++) {
    for(int j=0; j<n; j++) {
      if(matrix[i][j] == 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  // Traverse through the matrix again and set the elements in the marked rows and columns to zero
  for(int i=0; i<m; i++) {
    for(int j=0; j<n; j++) {
      if(row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  // Print the updated matrix
  cout << "The updated matrix is:\n";
  for(int i=0; i<m; i++) {
    for(int j=0; j<n; j++) {
      cout << matrix[i][j] << " ";
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

Enter the number of rows of the matrix:
3 
Enter the number of columns of the matrix:
3
Enter the elements of the matrix:
1 2 3
4 5 6
7 8 9


Output

The updated matrix is:
1 2 3 
4 5 6 
7 8 9
</Code><br/>

* In this example, the user is prompted to enter the number of rows and columns of the matrix, followed by the elements of the matrix. The program then creates a vector of vectors (a 2D vector) to store the matrix, and traverses through the matrix to mark the rows and columns that contain a zero element. It then traverses through the matrix again and sets the elements in the marked rows and columns to zero. Finally, the program prints the updated matrix.