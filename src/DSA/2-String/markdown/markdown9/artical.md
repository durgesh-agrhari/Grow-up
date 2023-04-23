###Example:-
<Code language="cpp">
Input  : 
abc

Output : 
a
ab
abc
b
bc
c
</Code> <br/><br/>


* Solution 1: How to Print all Sub-Strings of a given String<br/><br/>
  Given a string as an input. We need to write a program that will print all non-empty substrings of that given string.<br/><br/>

<Code language="cpp">

// C++ program to demonstrate all possible
// substrings of a given string
#include <bits/stdc++.h>
using namespace std;

// Function to print all sub strings
void subString(string s, int n)
{
	// Pick starting point in outer loop
	// and lengths of different strings for
	// a given starting point
	for (int i = 0; i < n; i++)
		for (int len = 1; len <= n - i; len++)
			cout << s.substr(i, len) << endl;
}
// Driver program to test above function
int main()
{
	string s = "abcd";
	subString(s, s.length());
	return 0;
}

</Code>
<br/>

###Output<br/><br/>
<Code language="cpp">
a
ab
abc
abcd
b
bc
bcd
c
cd
d
</Code><br/>

Time complexity: O( N3 )<br/><br/>

Auxiliary Space: O(1)<br/><br/><br/>


* Solution 2: Find Substring in string in C++<br/>

<Code language="cpp">

#include<bits/stdc++.h>
using namespace std;
// C++ program to demonstrate functioning of substr()

int main()
{
	// Take any string
	string s1 = "Geeks";

	// Copy two characters of s1 (starting
	// from position 3)
	string r = s1.substr(3, 2);

	// prints the result
	cout << "String is: " << r;

	return 0;
}


</Code><br/>

###Output<br/><br/>

<Code language="cpp">
String is: ks
</Code>

Time complexity: O(N)<br/><br/>
Auxiliary Space: O(N)<br/><br/>