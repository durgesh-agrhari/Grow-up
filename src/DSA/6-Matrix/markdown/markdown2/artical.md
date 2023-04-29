
<pre><code>
// C++ program to sum two matrix in an array.
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n,m;
    cin>>n;
    cin>>m;
    int mat1[n][m], mat2[n][m], i, j, mat3[n][m];
    cout<<"Enter Elements of First Matrix: ";
    for(i=0; i<n; i++)
    {
        for(j=0; j<m; j++)
            cin>>mat1[i][j];
    }
    cout<<"Enter Elements of Second Matrix: ";
    for(i=0; i<n; i++)
    {
        for(j=0; j<m; j++)
            cin>>mat2[i][j];
    }
    cout<<"\nAdding the Two Given Matrix...\n";
    for(i=0; i<n; i++)
    {
        for(j=0; j<m; j++)
            mat3[i][j] = mat1[i][j]+mat2[i][j];
    }
    cout<<"Addition Result of Two Given Matrix is:\n";
    for(i=0; i<n; i++)
    {
        for(j=0; j<m; j++)
            cout<<mat3[i][j]<<" ";
        cout<<endl;
    }
    return 0;
}

</code></pre>
<br/><br/>

___________________________________________

<br/><br/>

<Code language="">

Input
3 //Rows
3 //Columns
Enter Elements of First Matrix:
1 2 3
4 5 6
7 8 9
Enter Elements of Second Matrix:
1 2 3
4 5 6
7 8 9

Output 

Adding the Two Given Matrix
Addition Result of Two Given Matrix is:
2 4 6 
8 10 12 
14 16 18

</Code>