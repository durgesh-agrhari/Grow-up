Rreverse array element in cpp

<Code language="cpp">
// C++ program to implement linear search in array.
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n,k;
    cin>>n>>k;
    int arr[n];
    for(int i=0; i<n; i++)
    {
        cin>>arr[i];
    }
    int count=0;
    for(int i=0; i<n; i++)
    {
        if(arr[i] == k)
        {
            count++;
            break;
        }
    }
    if(count == 1)
    {
        cout<<"YES";
    }
    else
    {
        cout<<"No";
    }
    return 0;
}
</Code>

<br/>

###Input<br/>
5 3<br/>
1 2 3 4 5<br/><br/>

###Output<br/>
YES<br/><br/>

Time Complexity: O(N)<br/>
Auxiliary Space: O(N), for using recursive stack space. <br/>
