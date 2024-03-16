##Encapsulation:

Encapsulation involves bundling the data and methods that operate on that data into a single unit or class. We achieve this by declaring the data members as private and providing public methods (getters and setters) to access or modify those data members. 

<br/>

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

class EncapsulationDemo {
private:
    int data;

public:
    void setData(int value) {
        data = value;
    }

    int getData() {
        return data;
    }
};

int main() {
    EncapsulationDemo obj;
    obj.setData(10);
    cout << "Data: " << obj.getData() << endl;
    return 0;
}


</Code>

<br/><br/>

##Abstraction:

Abstraction involves representing the essential features of an object while hiding the unnecessary details. We achieve abstraction by using classes and defining methods that provide a simplified interface for interacting with objects.

<br/>

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;


class AbstractionDemo {
public:
    void display() {
        cout << "This is an abstracted method." << endl;
    }
};

int main() {
    AbstractionDemo obj;
    obj.display();
    return 0;
}



</Code>
<br/><br/>


##Inheritance:

Inheritance allows a new class (derived class) to inherit properties and behavior from an existing class (base class). We achieve inheritance by using the public, protected, or private keywords while deriving one class from another.

<br/>

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;

class Base {
public:
    void display() {
        cout << "This is the base class." << endl;
    }
};

class Derived : public Base {
public:
    void show() {
        cout << "This is the derived class." << endl;
    }
};

int main() {
    Derived obj;
    obj.display();
    obj.show();
    return 0;
}



</Code>

<br/><br/>

##Polymorphism:

Polymorphism allows objects of different classes to be treated as objects of a common base class. We achieve polymorphism using function overloading, operator overloading, and virtual functions.

<br/>

<Code language="cpp">

#include <bits/stdc++.h>
using namespace std;


class Shape {
public:
    virtual void draw() {
        cout << "Drawing shape." << endl;
    }
};

class Circle : public Shape {
public:
    void draw() {
        cout << "Drawing circle." << endl;
    }
};

class Rectangle : public Shape {
public:
    void draw() {
        cout << "Drawing rectangle." << endl;
    }
};

int main() {
    Shape *ptr;
    Circle circleObj;
    Rectangle rectObj;

    ptr = &circleObj;
    ptr->draw();

    ptr = &rectObj;
    ptr->draw();

    return 0;
}



</Code>

<br/>

These examples demonstrate how each pillar of OOP can be implemented in C++ code.