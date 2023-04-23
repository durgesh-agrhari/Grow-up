<br/>
Solution 1 : Delete element in string

<Code language="cpp">
// CPP code to illustrate
// erase() function

#include <bits/stdc++.h>
using namespace std;
// Function to demo erase()
void eraseDemo(string str)
{
	// Deletes all characters
	str.erase();

	cout << "After erase() : ";
	cout << str;
}

// Driver code
int main()
{
	string str("Hello World!");

	cout << "Before erase() : ";
	cout << str << endl;
	eraseDemo(str);

	return 0;
}

</Code>
<br/><br/>

###Output

<Code language="cpp">
Before erase() : Hello World!
After erase() :
</Code><br/><br/>

Solution 2 : Delete element in string <br/><br/>

* To delete an element in a string in C++ without using the STL, you can use a loop to shift the remaining characters to the left. Here's an example code that deletes the character at a specified index in a string:

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int main() {
    string str = "hello world";
    int index = 4; // index of character to be deleted

    for (int i = index; i < str.length() - 1; i++) {
        str[i] = str[i + 1]; // shift characters to the left
    }
    str.pop_back(); // remove last character

    cout << str << endl; // output modified string

    return 0;
}

</Code><br/><br/>

* In this code, we first declare a string variable str with the initial value "hello world". We also declare an integer variable index that represents the index of the character to be deleted.<br/><br/>

* We then use a for loop to shift the characters to the left, starting from the specified index. For each iteration, we replace the current character with the next character in the string. We continue shifting characters until we reach the second-to-last character in the string (since we will be removing the last character using pop_back()).<br/><br/>

* Finally, we remove the last character in the string using pop_back() and output the modified string using cout. The output of this code will be:<br/><br/>

<Code language="cpp">
helo world
</Code><br/>

* Note that this code assumes that the specified index is within the bounds of the string. You may want to add some error handling to check for out-of-bounds indices.<br/><br/>