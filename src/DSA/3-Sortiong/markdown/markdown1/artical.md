* Solution 1: Selection sort in cpp

<Code language="cpp">
// C++ program for Selection sort
#include <bits/stdc++.h>
using namespace std;

#include<bits/stdc++.h>
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
    //Start sorting algo
    for(int i=0; i<n-1; i++)
    {
        for(int j=i+1; j<n; j++)
        {
            if(arr[i]>arr[j])
            {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
}

</Code>

<br/>

Input<br/>
5<br/>
4 1 5 3 2<br/>

<br/><br/>

Output<br/>
1 2 3 4 5



<!-- 
<Code language="cpp">

</Code> -->


