###Example:-
<Code language="cpp">
Input  : a[] = {1, 1, 2, 2, 2}
Output : a[] = {1,2}
         new size = 2

Input  : a[] = {5,2,6,8,6,7,5,2,8}
Output : a[] = {2,5,6,7,8}
         new size = 5

</Code> <br/><br/>


* Solution 1: Remove duplicacy in given array<br/>

<Code language="cpp">
// Program to remove duplicate elements from an array
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int i, j, k, n;
    cin >> n;
    int num[n];
    for (i = 0; i < n; i++)
    {
        cin >> num[i];
    }
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (num[i] == num[j])
            {
                for (k = j; k < n; k++)
                {
                    num[k] = num[k + 1];
                }
                n--;
                j--;
            }
        }
    }

    cout << "\nDISTINCT ELEMENTS: " <<endl;
    //sort(num, num + n); if ytou want sort

    for (i = 0; i < n; i++)
    {
        cout << num[i] << " ";
    }

    return 0;
}

</Code>
<br/>

###Input<br/><br/>
5<br/>
1 3 3 4 5<br/><br/>

###Output<br/><br/>
DISTINCT ELEMENTS: <br/>
1 3 4 5<br/><br/><br/>


* Solution 2: Remove duplicacy in given array<br/>

<Code language="cpp">

#include<bits/stdc++.h>
//To remove duplicacy of the elements
using namespace std;

int main()
{
    cout<<"Enter the number of elements in your array:"<<endl;
    int s;
    cin>>s;
    int arr[s];
    for (int i=0;i<s;i++)
    {
        cout<<"Enter the element at position "<<i<<endl;
        cin>>arr[i];
    }
    cout<<"Your array is"<<endl;
    for (int i=0;i<s;i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    int count=0;
    for(int i=0;i<s-count;i++)
    {
        for(int j=i+1;j<s-count;j++)
        {
            if (arr[i]==arr[j])
            {
                for(int i=j;i<s-count;i++)
                {
                    arr[i]=arr[i+1];
                }
                count++;
            }
        }
    }

    cout<<"Your array after removing duplicacy now is"<<endl;
    for (int i=0;i<s-count;i++)
        {
            cout<<arr[i]<<" ";
        }
    return 0;
}
</Code>

<br/>
###Output<br/><br/>
Enter the number of elements in your array:<br/>
5<br/>
Enter the element at position 0<br/>
1<br/>
Enter the element at position 1<br/>
2<br/>
Enter the element at position 2<br/>
4<br/>
Enter the element at position 3<br/>
2<br/>
Enter the element at position 4<br/>
1<br/><br/>
Your array is<br/>
1 2 4 2 1 <br/><br/>
Your array after removing duplicacy now is<br/>
1 2 4 <br/><br/><br/><br/>


* Solution 3: Remove duplicacy in given array<br/><br/>

Here's an example C++ code that removes duplicates from an array using the std::unique function:<br/><br/>

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;
int main()
{
    int arr[] = {1, 2, 2, 3, 3, 3, 4, 5, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    std::sort(arr, arr + n);
    int* end = std::unique(arr, arr + n);

    for (int* i = arr; i != end; ++i) {
        std::cout << *i << " ";
    }

    return 0;
}

</Code>
<br/><br/>

* In this code, we first sort the array using std::sort to bring the duplicates together. Then, we use the std::unique function to remove duplicates by shifting them to the end of the array and returning an iterator to the new end of the array (which we store in the end variable).<br/><br/>
* Finally, we iterate over the array from the beginning to the new end, printing out each element. The output of this program will be:<br/><br/>

Copy code<br/><br/>
1 2 3 4 5 <br/><br/>
Note that this code assumes that the array contains integers. If the array contains elements of another type, you'll need to modify the code accordingly.<br/><br/>