Binary search in an array

<Code language="cpp">
// C++ program to Binary search in an array.
#include<bits/stdc++.h>
using namespace std;

int binarySearch(int arr[], int n, int k)
{
    int start=0, end=n-1;
    while(end>=start)
    {
        int mid = (start+end)/2;
        if(arr[mid]==k)
        {
            return mid;
        }
        else if(arr[mid] > k)
        {
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
    return -1;
}

int main()
{
    int n,k;
    cin>>n>>k;
    int arr[n];
    for(int i=0; i<n; i++)
    {
        cin>>arr[i];
    }
    int res= binarySearch(arr,n,k);
    if(res == -1)
    {
        cout<<"No";
    }else{
        cout<<"Yes";
    }
    return 0;
}

</Code><br/><br/>

###Input<br/>
5 3<br/>
1 2 3 4 5<br/><br/>

###Output<br/>
YES<br/><br/>

Time Complexity: O(log N)<br/>
Auxiliary Space: O(1)<br/><br/>