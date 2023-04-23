###Example:-
<Code language="cpp">
Input : str = "growupcode"
Output : g1 r1 o2 w1 u1 p1 c1 d1 e1

Input : str = "elephant"
Output : e2 l1 p1 h1 a1 n1 t1

</Code> <br/><br/>

* Solution 1: How to count frequency in string || Using Unorderd_map & Hashing 



<Code language="cpp">

// CPP implementation to print the characters and
// frequencies in order of its occurrence
#include <bits/stdc++.h>
using namespace std;

void prCharWithFreq(string str)
{
	// Store all characters and their
	// frequencies using Counter function
	map<char, int> mp;
	for (int i = 0; i < str.length(); i++){
		mp[str[i]]++;
    }
	// Print characters and their frequencies in
	// same order of their appearance
    for(auto x : mp){
        cout << x.first << " occurs " << x.second << " times." << endl;
    }
	cout << endl;
}

int main()
{
	string str = "growupcodecode";
	prCharWithFreq(str);
	return 0;
}

// This code is contributed by Susobhan Akhuli

</Code>

<br/>
###Output<br/><br/>
c occurs 2 times.<br/>
d occurs 2 times.<br/>
e occurs 2 times.<br/>
g occurs 1 times.<br/>
o occurs 3 times.<br/>
p occurs 1 times.<br/>
r occurs 1 times.<br/>
u occurs 1 times.<br/>
w occurs 1 times.<br/><br/><br/>


* Solution 2: Write a C++ Program to count the number of occurrences of each character in a string<br/><br/>

##Algorithm:<br/><br/>
1: Initialize the variables.<br/>
2: Accept the input.<br/>
3: Initialize a for loop.<br/>
4: This for loop will be used to count the number of time each character is present.<br/>
5: Terminate first at the end of string. <br/>
6: Initialize another for loop to print the frequency if it is at least 1.<br/><br/><br/>

<Code language="cpp">
// C++ program to print largest contiguous array sum
#include <bits/stdc++.h>
using namespace std;

int main()
{
    //Initializing variables.
    char str[100]="prepinsta";
    int i;
    int freq[256] = {0};
    //Calculating frequency of each character.
    for(i = 0; str[i] != '\0'; i++)
    {
        freq[str[i]]++;
    }
    //Printing frequency of each character.
    for(i = 0; i < 256; i++)
    {
        if(freq[i] != 0)
        {
           cout<<"The frequency of "<<char(i)<<" is "<<freq[i]<<endl;
        }
    }
    return 0;
}

</Code><br/>


###Output<br/><br/>

The frequency of a is 1<br/>
The frequency of e is 1<br/>
The frequency of i is 1<br/>
The frequency of n is 1<br/>
The frequency of p is 2<br/>
The frequency of r is 1<br/>
The frequency of s is 1<br/>
The frequency of t is 1<br/><br/><br/>


