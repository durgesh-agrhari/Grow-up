Solution 1 : Palindrome array element in cpp

<Code language="cpp">
// C++ Program to check whether the
// Array is palindrome or not

#include <bits/stdc++.h>
using namespace std;

void palindrome(int arr[], int n)
{
	// Initialise flag to zero.
	int flag = 0;

	// Loop till array size n/2.
	for (int i = 0; i <= n / 2 && n != 0; i++) {

		// Check if first and last element are different
		// Then set flag to 1.
		if (arr[i] != arr[n - i - 1]) {
			flag = 1;
			break;
		}
	}

	// If flag is set then print Not Palindrome
	// else print Palindrome.
	if (flag == 1)
		cout << "Not Palindrome";
	else
		cout << "Palindrome";
}

// Driver code.
int main()
{
	int arr[] = { 1, 2, 3, 2, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	palindrome(arr, n);
	return 0;
}


</Code><br/>

###Output<br/><br/>
Palindrome<br/><br/><br/>


Solution 2 : Palendrome array element in cpp

<Code language="cpp" >
// C++ program to implement reverse array element.
#include <bits/stdc++.h>
using namespace std;

// Function to check if an array is palindrome
bool isPalindrome(int arr[], int start, int end) {
    while (start < end) {
        if (arr[start] != arr[end])
            return false;
        start++;
        end--;
    }
    return true;
}

// Function to find all palindromes in an array
void findAllPalindromes(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            if (isPalindrome(arr, i, j)) {
                cout << "Palindrome found: ";
                for (int k = i; k <= j; k++)
                    cout << arr[k] << " ";
                cout << endl;
            }
        }
    }
}
int main() {
    int arr[] = { 1, 2, 3, 2, 1 };
    int n = sizeof(arr) / sizeof(arr[0]);
    findAllPalindromes(arr, n);
    return 0;
}


</Code>

<br/><br/>

* In this example code, we define a function isPalindrome to check if a sequence of the array is a palindrome or not. We then define a function findAllPalindromes to find all palindromes in the array by checking all possible sequences. Finally, we call findAllPalindromes in the main function with an example array.<br/><br/>

* Note that this simpler code checks all possible sequences in the array, which may not be the most efficient way to find palindromes in a large array.<br/><br/>