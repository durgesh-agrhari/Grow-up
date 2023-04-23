Solution 1 : How to remove vowel in string

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

int main() {
    string str = "Hello World";
    string vowels = "aeiouAEIOU";

    for (int i = 0; i < str.length(); i++) {
        if (vowels.find(str[i]) != string::npos) {
            str.erase(i, 1);
            i--;
        }
    }

    cout << str << endl;

    return 0;
}

</Code><br/>
<br/>
In this code, we first define a string str that we want to remove vowels from. We also define a string vowels that contains all the vowels (both uppercase and lowercase).<br/><br/>

Then, we loop through each character of the string str using a for loop. We use the find() function to check if the current character is a vowel. If it is a vowel, we remove it using the erase() function and decrement the index i so that we don't skip the next character.<br/><br/>

###Finally, we print the modified string to the console. The output of this code will be:<br/>
<Code language="cpp" >
Hll Wrld
</Code><br/>
As you can see, all the vowels have been removed from the original string.<br/><br/><br/><br/>


Solution 2 : How to remove vowel in string<br/><br/>

_____________________________________________

<pre><code>

#include <bits/stdc++.h>
using namespace std;

int main()
{
	//Initializing variable.
	char str[100];
	int i,j,len=0;
	cin>>str;
	len=strlen(str); //strlen is countin the length of string
	for(i=0; i<len; i++)
	{   
		// Please pute one more ( = ) between str[i] ans "a" and all

		if(str[i] = 'a' || str[i] = 'e' || str[i] = 'i' || str[i] = 'o' || str[i] = 'u' || str[i] = 'A' || str[i] = 'E' || str[i] = 'I' || str[i] = 'O' || str[i] = 'U')
		{
		    //Deleting vowels. 
			for(j=i; j<len; j++)
			{
			    //Storing string without vowels.
				str[j]=str[j+1];	
			}
		i--;
		len--;
		}
	}
	cout<<"After deleting the vowels:=  "<<str;
    
    return 0;	
}

</code></pre>
________________________________________________________________

<br/>

###Input<br/><br/>
GrowupCode<br/><br/><br/>

###Output<br/><br/>
After deleting the vowels:=  GrwpCd<br/><br/><br/>

