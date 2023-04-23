###Example:-
<Code language="cpp">
Input  : growupcode
Output : GROWUPCODE
</Code> <br/><br/>

* Solution 1: Capitalized first character of each word in strng<br/>

<Code language="cpp">

//Capitalized first character of each word in strng
#include <bits/stdc++.h>
using namespace std;

int main()
{
    //Initializing variable.
    char str[100];
    int i;
    gets(str);
  	//Initializing for loop.
  	for (i = 0; str[i]!='\0'; i++)
  	{
        if(str[i] >= 'a' && str[i] <= 'z'){
  	        str[i] = str[i] - 32;
        }
    }
  	cout<<"\nCapitalized string: "<<str<<endl;
  	return 0;
}

</Code><br/>

###Input: <br/>
growupcode<br/><br/>

###Output:<br/>
Toggoled string: GROWUPCODE<br/>