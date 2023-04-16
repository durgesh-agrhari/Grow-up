<br/>
Solution 1 : Find Smallest and Longest elelemt in an array

<Code language="cpp">
// C++ program to Find Smallest and Longest element in an array.
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

    int min = arr[0];
    int max = arr[0];
    //foe finding min element in an array
    for(int i=1; i<n; i++)
    {
        if(arr[i]<min)
        {
            min =arr[i];
        }
    }
    //foe finding max element in an array
    for(int i=1; i<n; i++)
    {
        if(arr[i]>max)
        {
            max =arr[i];
        }
    }

    cout<<"Min Element = "<<min<<endl;
    cout<<"Max Element = "<<max<<endl;
    return 0;
}


</Code>
<br/><br/>

###Inpute<br/><br/>
5<br/>
1 2 12 4 5<br/><br/>

###Output
Min Element = 1<br/>
Max Element = 12<br/><br/>

Solution 2 : Find Smallest and Longest in an array <br/><br/>

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

// Function to find the smallest element in an array
int findSmallest(int arr[], int n) {
    int smallest = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (arr[i] < smallest)
            smallest = arr[i];
    }
    return smallest;
}

// Function to find the longest element in an array
int findLongest(int arr[], int n) {
    int longest = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > longest)
            longest = arr[i];
    }
    return longest;
}

// Main function
int main() {
    int arr[] = { 3, 8, 2, 5, 1, 4 };
    int n = sizeof(arr) / sizeof(arr[0]);
    int smallest = findSmallest(arr, n);
    int longest = findLongest(arr, n);
    cout << "Smallest element: " << smallest << endl;
    cout << "Longest element: " << longest << endl;
    return 0;
}


</Code>

<br/><br/>

* In this example code, we define two functions findSmallest and findLongest to find the smallest and longest element in the array, respectively.<br/><br/>

 * We initialize the smallest and longest variables to INT_MAX and INT_MIN from the climits header file, respectively, to make sure that any value in the array will be smaller or greater than these initial values. <br/><br/>
 
 * We then iterate over the array and compare each element with the current smallest or longest element. Finally, we call the two functions in the main function with an example array and print the results.<br/><br/>
