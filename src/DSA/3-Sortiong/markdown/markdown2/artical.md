 * Solution 1: C++ program to implement Bubble sort

<Code language="cpp">
// C++ program to implement Bubble sort
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int arr[n];
    //Taking input
    for(int i=0; i<n; i++)
    {
        cin>>arr[i];
    }
    //Start sorting algo
    for(int i=0; i<n-1; i++)
    {
        for(int j=0; j<(n-i-1); j++)
        {
            if(arr[j]>arr[j+1])
            {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
}

</Code>
<br/><br/>
Input<br/>
5<br/>
4 5 2 3 1<br/><br/>

Output<br/>
1 2 3 4 5<br/><br/>