
###Example
<Code language="cpp">
Input: arr[] = {3, 1, 3}
Output: Missing = 2, Repeating = 3
Explanation: In the array, 2 is missing and 3 occurs twice 

Input: arr[] = {4, 3, 6, 2, 1, 1}
Output: Missing = 5, Repeating = 1
</Code> <br/><br/>

* Solution 1: Find Repeat and missing in an Array <br/>

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

void printTwoElements(int arr[], int n){\
// sorting the array
sort(arr,arr+n);
cout << "The repeating element is ";
for(int i=0;i<n-1;i++){
	if(arr[i]==arr[i+1]){
		cout<<arr[i]<<endl;
		break;
	}
}

cout << "and the missing element is ";
for(int i=1;i<=n;i++){
	if(i!=arr[i-1]){
		cout<<i<<endl;
		break;
	}
}

}

int main() {

	int arr[] = { 7, 3, 4, 5, 5, 6, 2 };
	int n = sizeof(arr) / sizeof(arr[0]);
	printTwoElements(arr, n);
	return 0;
}

</Code><br/>

###Output<br/><br/>
The repeating element is 5 <br/>
and the missing element is 1<br/>
Time Complexity: O(nLogn)<br/>
Auxiliary Space: O(1) (No extra array was used)<br/><br/>

Thanks to LoneShadow for suggesting this method.<br/><br/>


* Solution 2: Find Repeat and missing in an Array <br/><br/>
  
* Here's an example code in C++ that finds the repeat and missing elements in an array using the brute-force approach:<br/><br/>

<Code language="cpp">

#include <bits/stdc++.h> 
using namespace std; 

void findMissingRepeating(int arr[], int n) 
{ 
    int repeat = -1; 
    int missing = -1; 
    for(int i=0;i<n;i++) 
    { 
        for(int j=i+1;j<n;j++) 
        { 
            if(arr[i]==arr[j]) 
            { 
                repeat = arr[i]; 
                break; 
            } 
        } 
    } 
    for(int i=1;i<=n;i++) 
    { 
        int j; 
        for(j=0;j<n;j++) 
        { 
            if(arr[j]==i) 
                break; 
        } 
        if(j==n) 
        { 
            missing = i; 
            break; 
        } 
    } 
    cout<<"The repeating element is "<<repeat<<" and the missing element is "<<missing<<endl; 
} 

int main() 
{ 
    int arr[] = {4, 3, 6, 2, 1, 1}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    findMissingRepeating(arr, n); 
    return 0; 
} 


</Code>
<br/>

* This code uses two nested loops to iterate through the array to find the repeat and missing elements. The time complexity of this approach is O(n^2), which is not very efficient for large arrays. 
* However, it is a simple and straightforward approach to solve this problem.

