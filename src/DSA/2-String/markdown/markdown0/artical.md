<Code language="cpp">
string array-name[size];
</Code><br/>

Further, we can initialize the array of string using the below syntax:<br/>

<Code language="cpp">
string array-name[size]={'val1','val2',.....,'valN'};
</Code><br/><br/>

Example 1:<br/>

<Code language="cpp">

#include <bits/stdc++.h> 
using namespace std; 

int main() 
{
	string fruits[5] = { "Grapes", "Apple","Pineapple", "Banana", "Jackfruit" }; 

	cout<<"String array:\n";
	for (int x = 0; x< 5; x++) 
		cout << fruits[x] << "\n"; 
}
</Code><br/>

In the above example, we have initialized the string array and have used C++ for loops to traverse through the array and print the data items present in the string array.<br/><br/>

###Output:<br/>
<Code language="cpp">
String array:
Grapes
Apple
Pineapple
Banana
Jackfruit
</Code><br/><br/>


