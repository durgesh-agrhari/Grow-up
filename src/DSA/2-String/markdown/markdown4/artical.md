###Example:-
<Code language="cpp">
// C++ program to implement Delete element in an array.
Input:  str[] = { "abbba" };
Output: abbba is a palindrome

Input:  str[] = { "abbbabac" };
Output: abbbabac is not a palindrome
</Code> <br/><br/>

* Solution 1: How to check string is palendrome or not.<br/>

<Code language="cpp">
// C++ implementation to check if a given
// string is palindrome or not
#include <bits/stdc++.h>
using namespace std;

int main()
{
	char str[] = { "abbba" };
	// Start from leftmost and
	// rightmost corners of str
	int start = 0;
	int end = strlen(str) - 1;
	// Keep comparing characters
	// while they are same
	while (end > start) {
		if (str[start++] != str[end--]) {
			cout<<str<<" is not a palindrome";
			return 0;
			// will return from here
		}
	}
	cout<<str<<" is a palindrome";
	return 0;
}

</Code>

<br/><br/>
###Output<br/><br/>
abbba is a palindrome<br/><br/>

Time Complexity: O(N)<br/>
Auxiliary Space: O(1)<br/><br/>

* Solution 2: How to check string is palendrome or not.<br/>

<Code language="cpp">

#include<bits/stdc++.h>
using namespace std;

int main(){
    char string1[20];
    int i, length;
    int flag = 0;
    cout << "Enter a string: "; cin >> string1;
    length = strlen(string1);
    for(i=0;i < length ;i++){
        if(string1[i] != string1[length-i-1]){
            flag = 1;
            break;
           }
        }
    if (flag) {
        cout << string1 << " is not a palindrome" << endl; 
    }else {
      cout << string1 << " is a palindrome" << endl; 
    }
    return 0;
}


</Code><br/>

###Output<br/><br/>
Enter a string: abcba<br/>
abcba is a palindrome<br/><br/>

Time Complexity: O(N)<br/>
Auxiliary Space: O(1)<br/><br/>

* Solution 3: How to check string is p


<Code language="cpp">
// C++ program for the above approach
#include <bits/stdc++.h>
using namespace std;

// Function to check whether
// the string is palindrome
string isPalindrome(string S)
{
	// Stores the reverse of the
	// string S
	string P = S;

	// Reverse the string P
	reverse(P.begin(), P.end());

	// If S is equal to P
	if (S == P) {
		// Return "Yes"
		return "Yes";
	}
	// Otherwise
	else {
		// return "No"
		return "No";
	}
}

// Driver Code
int main()
{
	string S = "ABCDCBA";
	cout << isPalindrome(S);

	return 0;
}

</Code>

Output<br/><br/>
Yes<br/><br/>
Time Complexity: O(N)<br/>
Auxiliary Space: O(N)<br/>