
* In C++, you can count the number of words in a string using an algorithm that has O(n) time complexity and O(1) space complexity.<br/><br/>

Solution : How to Count Word in String<br/>

<Code language="cpp">


#include <bits/stdc++.h>
using namespace std;

int main() {
  // declaring string
  string str = "Mary had a little lamb";
  // initialising no of words to 0
  int words = 0;
  // store length of string in lenOfSentence
  int len = str.size();
  // run for loop from i = 0 to i = lenOfSentence
  // to iterate through each character of the string
  for(int i = 0; i < len; i++)
  {
    // check if current character is a space
    if(str[i] == ' ')
    {
      // if it is a space, increment word count
      words++;
    }
  }
  // at the end of the for loop, no. of spaces have been
  // counted. Increment word count one more time to get
  // no. of words
  words = words + 1;
  cout << "No. of words = " << words << endl;
}


</Code>
<br/><br/>

###Output<br/><br/>
No. of words = 5

<br/><br/>


<!-- <Code language="cpp">


</Code> -->