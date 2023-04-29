<pre><code>

// C++ program to implement Input and output in matrix
#include <bits/stdc++.h>
using namespace std;

int main() {
    int rows, cols;
    cout << "Enter the number of rows: ";
    cin >> rows;
    cout << "Enter the number of columns: ";
    cin >> cols;

    // Declare the matrix square brackets
    int matrix[rows] [cols];

    // Take input from the user
    cout << "Enter the matrix elements:" << endl;
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }

    // Display the matrix
    cout << "The matrix is:" << endl;
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
</Code></pre>



