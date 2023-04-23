* Solution 1 : How to remove dublicates element in string.
  

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

string removeDuplicates(string str) {
    string result = "";
    // An array to keep track of the occurrence of each character
    bool occurred[256] = {false};

    for (int i = 0; i < str.length(); i++) {
        // Check if the current character has occurred before
        if (!occurred[str[i]]) {
            result += str[i];
            occurred[str[i]] = true;
        }
    }

    return result;
}

int main() {
    string str = "hello world";
    cout << "Original string: " << str << endl;
    string result = removeDuplicates(str);
    cout << "String after removing duplicates: " << result << endl;
    return 0;
}

</Code>
<br/><br/>

* In this code, we first create an empty string called result to store the final string after removing duplicates. We then create a boolean array called occurred to keep track of the occurrence of each character. Initially, all elements of the array are set to false.<br/><br/>

* We then traverse the original string character by character using a for loop. For each character, we check if it has occurred before in the result string by checking the corresponding element of the occurred array. If it has not occurred before, we append it to the result string and mark it as occurred by setting the corresponding element of the occurred array to true.<br/><br/>

* Finally, we return the result string after all characters have been processed.<br/><br/>

* When we run this program with the input string "hello world", the output will be:<br/><br/>

<Code language="cpp">
Original string: hello world
String after removing duplicates: helo wrd
</Code><br/><br/>

As you can see, all duplicate characters have been removed from the input string.<br/>
<br/>

* Solution 2 : How to remove dublicates element in string.<br/>

<Code language="cpp">

// CPP program to remove duplicate character
// from character array and print in sorted
// order
#include <bits/stdc++.h>
using namespace std;

char *removeDuplicate(char str[], int n)
{
// Used as index in the modified string
int index = 0;
// Traverse through all characters
for (int i=0; i<n; i++) {
	// Check if str[i] is present before it
	int j;
	for (j=0; j<i; j++)
		if (str[i] == str[j])
		break;
	// If not present, then add it to
	// result.
	if (j == i)
		str[index++] = str[i];
}
return str;
}

// Driver code
int main()
{
char str[]= "geeksforgeeks";
int n = sizeof(str) / sizeof(str[0]);
cout << removeDuplicate(str, n);
return 0;
}


</Code>
<br/><br/>

Output<br/><br/>
geksfor<br/><br/>
Time Complexity: O(n * n) <br/>
Auxiliary Space: O(1), Keeps the order of elements the same as the input. <br/><br/>