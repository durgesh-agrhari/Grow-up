* C++ Insertion sort algo code

<Code language="cpp">
// C++ Insertion sort algo code
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0; i<n; i++)
    {
        cin>>arr[i];
    }

    int i,j, key;
    for(int i=1; i<n; i++)
    {
        key = arr[i];
        j=i-1;
        while(j>=0 && arr[j] > key)
        {
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1] = key;
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
