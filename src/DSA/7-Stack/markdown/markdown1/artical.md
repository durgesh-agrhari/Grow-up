Stack in C++ STL implementation.


<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;


int main() {
    // Creating a stack of integers
    std::stack int myStack;

    // Pushing elements onto the stack
    myStack.push(10);
    myStack.push(20);
    myStack.push(30);

    // Getting the size of the stack
    std::cout << "Size of stack: " << myStack.size() << std::endl;

    // Accessing the top element
    std::cout << "Top element: " << myStack.top() << std::endl;

    // Popping elements from the stack
    myStack.pop();

    std::cout << "After popping, size of stack: " << myStack.size() << std::endl;

    // Checking if the stack is empty
    if (myStack.empty()) {
        std::cout << "Stack is empty!" << std::endl;
    } else {
        std::cout << "Stack is not empty!" << std::endl;
    }

    return 0;
}


</Code>


This code demonstrates basic operations with std::stack. It creates a stack of integers, pushes some values onto it, retrieves the size and top element of the stack, pops an element, and then checks if the stack is empty.


