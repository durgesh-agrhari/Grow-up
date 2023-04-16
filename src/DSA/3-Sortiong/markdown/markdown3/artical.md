Frequency elelemt in an array.

<Code language="cpp">
// C++ program to find frequency element in an array.
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[] = {1, 2, 3, 2, 3, 3, 4, 5, 5}; // example array
    int n = sizeof(arr)/sizeof(arr[0]); // size of array
    // loop through the array and count the frequency of each element
    for(int i=0; i<n; i++){
        // ignore elements that have already been counted
        if(arr[i] == -1) 
            continue;

        int count = 1; // initialize the count for the current element
        for(int j=i+1; j<n; j++){
            if(arr[j] == arr[i]){ // if we find another occurrence of the current element
                count++; // increment the count
                arr[j] = -1; // mark the element as counted
            }
        }
        // print the frequency of the current element
        cout << arr[i] << " occurs " << count << " times." << endl;
    }
    return 0;
}
</Code>
<br/><br/>

###Output<br/><br/>
1 occurs 1 times.<br/>
2 occurs 2 times.<br/>
3 occurs 3 times.<br/>
4 occurs 1 times.<br/>
5 occurs 2 times.<br/><br/>


* In this example, we first initialize an array arr with some elements. We then loop through the array and count the frequency of each element using two nested loops.


<br/><br/>

* The outer loop goes through each element in the array, while the inner loop starts from the next element and checks if it is the same as the current element. If it is, we increment a count variable and mark the element as counted by setting it to -1. This ensures that we don't count the same element twice.
<br/><br/>

* After we finish counting the occurrences of the current element, we print out its frequency using the cout statement.
<br/>	

* Note that this algorithm has a time complexity of O(n^2) in the worst case because we have two nested loops. However, if the array has a small number of distinct elements, the actual time complexity may be lower.

<br/><br/>

* Frequency elelemt in an array using Map

<Code language="cpp">
// C++ program to implement Dublicates element in an array.
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int arr[] = {1, 2, 3, 2, 3, 3, 4, 5, 5}; // example array
    int n = sizeof(arr)/sizeof(arr[0]); // size of array
    unordered_map<int, int> freq; // unordered_map to store frequency of each element

    // loop to count frequency of each element in array
    for(int i=0; i<n; i++)
        freq[arr[i]]++;

    // loop to print frequency of each element
    for(auto x : freq)
        cout << x.first << " occurs " << x.second << " times." << endl;

    return 0;
}

</Code><br/><br/>

###Output<br/><br/>
5 occurs 2 times.<br/>
4 occurs 1 times.<br/>
3 occurs 3 times.<br/>
2 occurs 2 times.<br/>
1 occurs 1 times.<br/>

<br/><br/>

* In this example, we first initialize an array arr with some elements. We then use an unordered_map to store the frequency of each element in the array. The unordered_map data structure allows for efficient lookup and insertion of key-value pairs. 
<br/><br/>

* We then loop through the array and increment the frequency of each element using the ++ operator on the corresponding value in the unordered_map. Finally, we loop through the unordered_map and print out the frequency of each element using the first and second members of each key-value pair.
<br/><br/>

* Note that this algorithm has a time complexity of O(n) because we loop through the array once to count the frequency of each element.

























<!-- 3333333333Useful JavaScript Code Snippets

1. Sort an Array

<Code language="javascript">
//strings
const names = ["Seema", "Rekha", "Jaya"];
names.sort();
//['Jaya', 'Rekha', 'Seema' ]

//Numbers
const numbers = [101, 8, 87];
numbers.sort((a, b) => {
  return a - b;
});
//[ 8, 87, 101 ]
</Code>

2. Select a random element

<Code language="javascript">
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()*items.length)
items[randomIndex]
</Code>

3. Reverse a string

<Code language="javascript">
function reverseString(string) {
  return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
</Code>

4. Check if element has a class

<Code language="javascript">
const element = document.querySelector("#element")
element.classList.contains("active")
</Code>

5. String interpolation

<Code language="javascript">
const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
</Code>

6. Loop through an array

<Code language="javascript">
const cars = ["Ford", "BMW", "Audi" ]
for (let car of cars) {
  console.log(car)
}

/*
Ford
BMW
Audi
*/
</Code>

7. Get current time

<Code language="javascript">
const date = new Date()
const currentTime = 
  `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`

console.log(currentTimes)
//example output: "22:16:41"
</Code>

8. Replace part of a string

<Code language="javascript">
const string = "You are awesome."
const replacedString = string.replace("You", "We")

console.log(replacedString) //Output: "We are awesome"
</Code>

9. Destructing variable assignment

<Code language="javascript">
let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
</Code>

10. Using the spread operator

<Code language="javascript">
let data = [1,2,3,4,5];
console.log(...data);
//  1 2 3 4 5
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// 10
</Code>

1.  Binary serach

<Code language="cpp">
// C++ program to implement recursive Binary Search
#include <bits/stdc++.h>
using namespace std;

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
int binarySearch(int arr[], int l, int r, int x)
{
	if (r >= l) {
		int mid = l + (r - l) / 2;

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearch(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int n = sizeof(arr) / sizeof(arr[0]);
	int result = binarySearch(arr, 0, n - 1, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}

</Code>


Linear Search Approach: A simple approach is to do a linear search. The time complexity of the Linear search is O(n). Another approach to perform the same task is using Binary Search.  

Binary Search Approach: 

Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 

Binary Search Algorithm: The basic steps to perform Binary Search are:

Sort the array in ascending order.
Set the low index to the first element of the array and the high index to the last element.
Set the middle index to the average of the low and high indices.
If the element at the middle index is the target element, return the middle index.
If the target element is less than the element at the middle index, set the high index to the middle index – 1.
If the target element is greater than the element at the middle index, set the low index to the middle index + 1.
Repeat steps 3-6 until the element is found or it is clear that the element is not present in the array.
 
Binary Search Algorithm can be implemented in the following two ways

Iterative Method
Recursive Method
1. Iteration Method -->