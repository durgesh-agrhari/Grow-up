###Example
<Code language="cpp">
Input:  "Gro up cod e  "
Output: "Growupcode"
</Code>
<br/>

Solution 1 : Remove space in string

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

int main()
{
    char str[100], str_no_spc[100];
    int i=0, j=0 ;
    gets(str);
    //Iterating each character of string. 
    while(str[i] != '\0'){
        if(str[i] != ' '){
            str_no_spc[j++] = str[i];
        }
        i++;
    }
    str_no_spc[j] = '\0';
    //Printing result.
    cout<<"The string after removing all the spaces is:\n"<<str_no_spc;
    return 0;
}



</Code>
<br/><br/>

###Inpute<br/><br/>
This is Growup Code<br/><br/>

###Output<br/><br/>
The string after removing all the spaces is:<br/><br/>
ThisisGrowupCode<br/><br/><br/><br/>

* Solution 2 : Find Smallest and Longest in an array <br/><br/>

  *To remove spaces in a string in C++, you can use the erase and remove_if functions from the <algorithm> library. Here's an example:<br/><br/>


<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

int main() {
    string str = "Hello, World!";
    str.erase(remove_if(str.begin(), str.end(), ::isspace), str.end());
    cout << str << endl; // Output: "Hello,World!"
    return 0;
}

</Code><br/><br/>

* The remove_if function takes three arguments: the beginning and end iterators of the range to process, and a predicate function that returns true for each element to be removed. In this case, we're using the isspace function from the <cctype> library to determine if a character is whitespace.<br/><br/>

* The erase function then removes the elements marked for removal by remove_if. Finally, we print the modified string to the console.<br/><br/>