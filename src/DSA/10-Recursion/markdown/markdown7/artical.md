* Solution 1 : Find Second Longest elelemt in an array.

<Code language="cpp">
// C++ program to find second lorgest element in an array.
#include <bits/stdc++.h>
using namespace std;
void print2Longest(int arr[], int n)
{
	int i, first, second;
	// There should be atleast two elements
	if (n < 2)
	{
		cout<<" Invalid Input ";
		return;
	}

	first = second = INT_MIN;
	for (i = 0; i < n ; i ++)
	{
		/* If current element is smaller than first
		then update both first and second */
		if (arr[i] > first)
		{
			second = first;
			first = arr[i];
		}

		/* If arr[i] is in between first and second
		then update second */
		else if (arr[i] > second && arr[i] != first)
			second = arr[i];
	}
	if (second == INT_MAX)
		cout << "There is no second smallest element\n";
	else
		cout <<"First Longest = " << first <<endl;
		cout<<"Second Longest = " << second << endl;
}

// Driver code 
int main()
{
	// int arr[] = {12, 13, 2, 10, 34, 1};
	// int n = sizeof(arr)/sizeof(arr[0]);

	int n; cin>>n; 
	int arr[n];
	for(int i=0; i<n; i++)
	{
		cin>>arr[i];
	}
	print2Longest(arr, n);

	return 0;
}

// This is code is contributed by rathbhupendra

</Code>
<br/><br/>

###Input<br/><br/>
5<br/>
5 10 15 20 25<br/>

###Output<br/><br/>
First Longest = 25<br/>
Second Longest = 20<br/><br/><br/><br/>


* Solution 2 : Find Second Smallest and Longest elelemt in an array.<br/>

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

// Function to find the second smallest element in an array
int findSecondSmallest(int arr[], int n) {
    int smallest = INT_MAX;
    int secondSmallest = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if (arr[i] < secondSmallest && arr[i] != smallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

// Function to find the second largest element in an array
int findSecondLargest(int arr[], int n) {
    int largest = INT_MIN;
    int secondLargest = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// Main function
int main() {
    int arr[] = { 3, 8, 2, 5, 1, 4 };
    int n = sizeof(arr) / sizeof(arr[0]);
    int secondSmallest = findSecondSmallest(arr, n);
    int secondLargest = findSecondLargest(arr, n);
    cout << "Second smallest element: " << secondSmallest << endl;
    cout << "Second largest element: " << secondLargest << endl;
    return 0;
}


</Code><br/><br/>


* In this example code, we define two functions findSecondSmallest and findSecondLargest to find the second smallest and second largest elements in the array, respectively.<br/><br/>

 * We initialize the smallest and largest variables to INT_MAX and INT_MIN from the climits header file, respectively, to make sure that any value in the array will be smaller or greater than these initial values. <br/><br/>
 
 * We then iterate over the array and compare each element with the current smallest, second smallest, largest, and second largest elements. Finally, we call the two functions in the main function with an example array and print the results.<br/><br/>

<br/><br/>