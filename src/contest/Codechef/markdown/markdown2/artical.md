<br/>
Dublicate elelemt in an array

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int main() {
  int n=9;
  int arr[n] = {1, 2, 3, 4, 4, 5, 6, 6, 7};

  // Check for duplicates
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        cout<<"Duplicate element found: "<<arr[i]<<endl;
      }
    }
  }

  return 0;
}
</Code>
<br/><br/>

Duplicate element found: 4<br/><br/>
Duplicate element found: 6<br/><br/>

Dublicate elelemt in an array with finding length of array <br/><br/>

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 4, 5, 6, 6, 7}; //for finding the length of array
  int n = sizeof(arr) / sizeof(arr[0]);

  // Check for duplicates
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        cout<<"Duplicate element found: "<<arr[i]<<endl;
      }
    }
  }

  return 0;
}
</Code>

<br/><br/>

Duplicate element found: 4<br/><br/>
Duplicate element found: 6<br/><br/>


Dublicate elelemt in an array throujgh map<br/>

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    int arr[n];
    for(int i=0; i<n; i++)
    {
        cin>>arr[i];
    }

    map<int,int>mp;
    for(int i=0; i<n; i++)
    {
        mp[arr[i]]++;
    }
    for(auto it = mp.begin(); it!=mp.end(); it++)
    {
        if(it->second>1)
        {
            cout<<it->first<<" ";
        }
    }
    return 0;
}

</Code>

<br/><br/>

Input<br/>
5<br/>
1 3 2 3 1<br/><br/>

Output<br/>
1 3<br/><br/>