###Example: 
<Code language="cpp">
Input : s = "abc"
Output : s = "cba"

Input : s = "growupcode"
Output : s = "edocpuworg"
</Code> <br/>

* Solution 1 : Rreverse string element in cpp ||  Using a loop

<Code language="cpp">
// C++ program to implement reverse array element.
#include <bits/stdc++.h>
using namespace std;

void reverseString(string& s) {
   int n = s.length();  // O(1)
   for(int i = 0; i < n/2; i++){  // O(n/2)
      char temp = s[i];  // O(1)
      s[i] = s[n-i-1];  // O(1)
      s[n-i-1] = temp;  // O(1)
   }
}

int main() {
   string s = "Hello, world!";  // O(1)
   reverseString(s);  // O(n/2)
   cout << s << endl; // Output: "!dlrow ,olleH"
   return 0;
}

</Code><br/><br/>

*Time complexity of the loop is O(n/2), which simplifies to O(n) because we only consider the dominant term. Therefore, the time complexity of this method is O(n).<br/><br/><br/>

* Solution 2 : Rreverse string element in cpp || Using the reverse() function

<Code language="cpp">
// C++ program to implement reverse array element.
#include <bits/stdc++.h>
using namespace std;

void reverseString(string& s) {
   reverse(s.begin(), s.end());  // O(n)
}

int main() {
   string s = "Hello, world!";  // O(1)
   reverseString(s);  // O(n)
   cout << s << endl; // Output: "!dlrow ,olleH"
   return 0;
}


</Code> <br/>

*The reverse() function has a time complexity of O(n), where n is the length of the string. Therefore, the time complexity of this method is also O(n).<br/><br/><br/>

* Solution 3 : Rreverse string element in cpp || Using recursion<br/>

<Code language="cpp">
// C++ program to implement reverse array element.
#include <bits/stdc++.h>
using namespace std;

void reverseString(string& s, int left, int right) {
   if(left >= right){  // O(1)
      return;  // O(1)
   }
   char temp = s[left];  // O(1)
   s[left++] = s[right];  // O(1)
   s[right--] = temp;  // O(1)
   reverseString(s, left, right);  // O(n/2)
}

int main() {
   string s = "Hello, world!";  // O(1)
   reverseString(s, 0, s.length()-1);  // O(n/2)
   cout << s << endl; // Output: "!dlrow ,olleH"
   return 0;
}


</Code> <br/> <br/>

* The time complexity of the recursive function is O(n/2) because each recursive call processes two characters, so there are n/2 recursive calls. Therefore, the time complexity of this method is also O(n). <br/> <br/>

* All three methods have the same time complexity of O(n), where n is the length of the string. <br/> <br/>
