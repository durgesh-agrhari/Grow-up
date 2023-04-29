
* C++ program to Pascal's Triangle in matrix. <br/>
  

<pre><code>

#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Enter the number of rows for Pascal's Triangle: ";
  cin >> n;

  int pascal[n][n];

  // Initialize first and second columns of the matrix
  for(int i=0; i<n; i++) {
    pascal[i][0] = 1;
    pascal[i][1] = 1;
  }

  // Calculate values for the remaining elements of the matrix
  for(int i=2; i<n; i++) {
    for(int j=1; j<=i; j++) {
      pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
    }
  }

  // Print Pascal's Triangle
  cout << "Pascal's Triangle:\n";
  for(int i=0; i<n; i++) {
    for(int j=0; j<=i; j++) {
      cout << pascal[i][j] << " ";
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

Enter the number of rows for Pascal's Triangle: 
5

Output

Pascal's Triangle:
    1 
   1 1 
  1 2 1 
 1 3 3 1 
1 4 6 4 1

</Code><br/>

* In this example, the user is prompted to enter the number of rows for Pascal's Triangle. The program then initializes the first and second columns of the matrix with 1's, and calculates the values for the remaining elements of the matrix using the formula C(n, r) = C(n-1, r-1) + C(n-1, r). Finally, the program prints the matrix to display Pascal's Triangle.