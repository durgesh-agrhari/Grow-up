<Code language="cpp">
Input: "Growupcode"
Output: 10

Input: "Growupcode \0 345"
Output: 11
</Code>
<br/><br/>

* In C++, you can find the length of a string in O(1) time complexity using the size() or length() member functions of the std::string class.<br/><br/>

* The time complexity of the size() and length() member functions of std::string is constant O(1), because the length of the string is already stored by the std::string class.<br/><br/>

Solution 1: How to find length of String in cpp

<Code language="cpp">
// C++ program to Demonstrate all
// Different methods to find length
// of a string
#include <bits/stdc++.h>
using namespace std;

int main()
{
	// String obj
	string str = "GrowupCode";

	// 1. size of string object using size() method
	cout << str.size() << endl;

	// 2. size of string object using length method
	cout << str.length() << endl;

	// 3. size of string object using for loop
	int count=0;
	for (i = 0; str[i]; i++){
	    count++;
	}
	cout << count << endl;

	return 0;
}

</Code>
<br/><br/>
###Output<br/><br/>
10<br/>
10<br/>
10<br/>
10<br/><br/>

* In this example, we declare a string str and initialize it with the value "Hello, World!". We then use the length() and size() member functions to find the length of the string, which is 13 in this case.<br/><br/>

* Both length() and size() member functions have the same time complexity of O(1), so you can use either one to find the length of a string with constant time complexity.<br/><br/>

Solution 2: How to find length of String in cpp<br/><br/>

