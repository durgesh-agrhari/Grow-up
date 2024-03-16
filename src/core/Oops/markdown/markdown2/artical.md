What is Object-Oriented Programming (OOP)?

Answer: Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which can contain data in the form of fields (attributes or properties), and code in the form of procedures (methods or functions). OOP focuses on encapsulating data and behavior within objects, enabling modular, reusable, and maintainable code.

<br/><br/>
What are the four pillars of OOP?

Answer: The four pillars of OOP are:
Encapsulation: Bundling data and methods that operate on that data into a single unit (class) and hiding the internal state of an object from the outside world.
Abstraction: Representing the essential features of an object while hiding the unnecessary details.
Inheritance: Allowing a new class (derived class) to inherit properties and behavior from an existing class (base class).
Polymorphism: Allowing objects of different classes to be treated as objects of a common base class.
What is encapsulation?

Answer: Encapsulation is the bundling of data and methods that operate on that data into a single unit (class), hiding the internal state of an object from the outside world. It helps in achieving data hiding and abstraction by providing a clear separation between the implementation details and the interface of an object.
What is inheritance?

Answer: Inheritance is a mechanism in which a new class (derived class) can inherit properties and behavior from an existing class (base class). It promotes code reusability and facilitates the creation of hierarchical relationships between classes. The derived class can extend or modify the behavior of the base class.
What is abstraction?

Answer: Abstraction is the concept of representing the essential features of an object while hiding the unnecessary details. It allows us to focus on what an object does rather than how it does it. Abstraction is achieved by using classes and defining methods that provide a simplified interface for interacting with objects.
What is polymorphism?

Answer: Polymorphism allows objects of different classes to be treated as objects of a common base class. It enables a single interface to represent entities of different types and provides a way for a class to define methods that are shared with its subclasses but can be overridden to provide specific implementations.
What is method overriding?

Answer: Method overriding is a feature of inheritance that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. The overridden method in the subclass has the same name, return type, and parameters as the method in the superclass, but with a different implementation.
What is method overloading?

Answer: Method overloading is a feature of OOP that allows a class to have multiple methods with the same name but different parameters or parameter types. It enables the creation of methods that perform similar tasks but with different input parameters. Method overloading is determined at compile time based on the number and types of arguments passed to the method.
What is the difference between method overloading and method overriding?

Answer: Method overloading involves defining multiple methods with the same name but different parameters or parameter types within the same class. Method overriding, on the other hand, occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. Method overloading is determined at compile time, while method overriding is determined at runtime.
What is a constructor?

Answer: A constructor is a special member function of a class that is automatically called when an object of the class is created. It is used to initialize the object's data members and perform any necessary setup operations. Constructors have the same name as the class and may have parameters (parameterized constructor) or no parameters (default constructor).
What is a destructor?

Answer: A destructor is a special member function of a class that is automatically called when an object of the class is destroyed or goes out of scope. It is used to release any resources or memory allocated by the object during its lifetime. Destructors have the same name as the class preceded by a tilde (~) and do not take any parameters.
What is a static member?

Answer: A static member is a class member (variable or method) that belongs to the class rather than individual objects of the class. It is shared among all instances of the class and can be accessed using the class name rather than through object instances. Static members are declared using the static keyword.
What is the difference between a class and an object?

Answer: A class is a blueprint or template for creating objects, whereas an object is an instance of a class. A class defines the properties (data members) and behaviors (methods) that objects of that class will have. Objects are created based on the structure defined by the class and can interact with each other and with other parts of the program.
What is the access specifier public, private, and protected?

Answer: Access specifiers (public, private, and protected) define the visibility and accessibility of class members (variables and methods).
public: Members declared as public are accessible from outside the class.
private: Members declared as private are only accessible within the class itself and are not accessible from outside the class.
protected: Members declared as protected are accessible within the class itself and its subclasses (derived classes), but not from outside the class.
What is the difference between new and malloc()?

Answer:
new: new is an operator in C++ used for dynamic memory allocation. It not only allocates memory but also calls the constructor to initialize the memory allocated. It returns a pointer to the allocated memory.
malloc(): malloc() is a function in C used for dynamic memory allocation. It only allocates memory but does not call the constructor. It returns a void pointer (void*) to the allocated memory. To allocate memory for objects in C++, it's recommended to use new.
What is a friend function?

Answer: A friend function is a function that is not a member of a class but has access to the private and protected members of the class. It is declared with the friend keyword within the class definition. Friend functions are often used to allow external functions or classes to access private or protected members of a class.
What is an abstract class?

Answer: An abstract class is a class that cannot be instantiated and is used only as a base class for other classes. It may contain one or more pure virtual functions, making it an abstract class. Abstract classes provide a common interface for derived classes to implement and enforce a specific behavior.
What is a pure virtual function?

Answer: A pure virtual function is a virtual function in a base class that has no implementation and is declared using the syntax virtual returnType functionName() = 0;. Classes containing pure virtual functions are called abstract classes, and they