Codechef Solution

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin>>t;
    while(t--)
    {
        int n,m;
        cin>>n>>m;
        if(m>n)
        {
            cout<<"0"<<endl;
        }
        else{
            cout<<n-m<<endl;
        }
    }
	return 0;
}

</Code>

Input <br/><br/>

4<br/>
5 3<br/>
5 7<br/>
4 1<br/>
8 8<br/>

Output<br/><br/>
2<br/>
0<br/>
3<br/>
0<br/>
