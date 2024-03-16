1. **What is a DBMS?** <br/><br/>
   - **Answer:** A DBMS (Database Management System) is a software system that enables users to define, create, maintain, and manipulate databases. It provides an interface between users and the database, ensuring efficient and secure storage, retrieval, and management of data.<br/><br/>

2. **What are the advantages of using a DBMS?**<br/><br/>
   - **Answer:** Advantages of using a DBMS include:
     - Data integrity: Ensuring data accuracy and consistency.
     - Data security: Implementing access controls and authentication mechanisms.
     - Data independence: Separating data from applications and providing a unified interface.
     - Concurrent access: Allowing multiple users to access and modify data simultaneously.
     - Data backup and recovery: Facilitating data backup and restoration in case of failures.<br/><br/>

3. **What is a database schema?**<br/><br/>
   - **Answer:** A database schema is a logical structure that represents the organization of data in a database. It defines the database's tables, fields, relationships, constraints, and indexes.<br/><br/>

4. **What is normalization, and why is it important?**<br/><br/>
   - **Answer:** Normalization is the process of organizing data in a database to reduce redundancy and dependency, thereby improving data integrity and efficiency. It ensures that each piece of data is stored only once and eliminates anomalies such as insertion, update, and deletion anomalies.<br/><br/>

5. **What are the different levels of normalization?**<br/><br/>
   - **Answer:** The different levels of normalization are:
     - First Normal Form (1NF)
     - Second Normal Form (2NF)
     - Third Normal Form (3NF)
     - Boyce-Codd Normal Form (BCNF)
     - Fourth Normal Form (4NF)
     - Fifth Normal Form (5NF)<br/><br/>

6. **What is a primary key?**<br/><br/>
   - **Answer:** A primary key is a unique identifier for each record in a database table. It uniquely identifies each row and ensures that no duplicate or null values are allowed.<br/><br/>

7. **What is a foreign key?**<br/><br/>
   - **Answer:** A foreign key is a column or combination of columns in a database table that establishes a relationship with a primary key or unique key in another table. It enforces referential integrity and maintains consistency between related tables.<br/><br/>

8. **What is a transaction?**<br/><br/>
   - **Answer:** A transaction is a logical unit of work performed in a database management system. It comprises one or more database operations (e.g., insert, update, delete) that must be executed as a single, indivisible unit. Transactions ensure data consistency and integrity by enforcing ACID properties (Atomicity, Consistency, Isolation, Durability).<br/><br/>

9. **What are ACID properties in DBMS?**<br/><br/>
   - **Answer:** ACID properties are:
     - Atomicity: Ensures that all operations within a transaction are completed successfully or rolled back if any operation fails.
     - Consistency: Ensures that the database remains in a consistent state before and after the transaction.
     - Isolation: Ensures that the execution of transactions concurrently does not interfere with each other.
     - Durability: Ensures that the changes made by a committed transaction persist even in the event of system failures.<br/><br/>

10. **What is a view in a database?**<br/><br/>
    - **Answer:** A view is a virtual table derived from one or more tables or other views in the database. It presents a subset of data or a transformation of data based on predefined criteria. Views are used to simplify complex queries, enforce security restrictions, and provide a customized presentation of data.<br/><br/>

11. **What is indexing, and why is it used?**<br/><br/>
    - **Answer:** Indexing is the process of creating an index on one or more columns of a database table to improve the speed of data retrieval and query performance. Indexes provide fast access to data by enabling the database management system to locate specific records quickly without scanning the entire table.<br/><br/>

12. **What is a stored procedure?**<br/><br/>
    - **Answer:** A stored procedure is a precompiled set of SQL statements stored in the database catalog. It can accept input parameters, perform complex operations, and return results to the application or user. Stored procedures enhance database security, improve performance, and promote code reusability and maintainability.<br/><br/>

13. **What is a trigger?**<br/><br/>
    - **Answer:** A trigger is a database object that automatically executes a set of SQL statements in response to specific events (e.g., insert, update, delete) occurring in a database table. Triggers are used to enforce business rules, maintain data integrity, and implement complex data validation and auditing logic.<br/><br/>

14. **What is a deadlock, and how can it be prevented?**<br/><br/>
    - **Answer:** A deadlock is a situation in which two or more transactions are waiting indefinitely for each other to release resources, preventing any of them from proceeding. Deadlocks can be prevented by using techniques such as deadlock detection, deadlock avoidance, and deadlock prevention.<br/><br/>

15. **What is the difference between a clustered and non-clustered index?**<br/><br/>
    - **Answer:** <br/><br/>
      - Clustered Index: A clustered index determines the physical order of data rows in a table based on the index key. Each table can have only one clustered index, and the data rows are physically sorted according to the clustered index key.
      - Non-Clustered Index: A non-clustered index does not affect the physical order of data rows in a table. It stores the index key values and pointers to the corresponding data rows, allowing for efficient retrieval of data based on the index key.<br/><br/>

16. **What is the difference between a DDL and DML?**<br/><br/>
    - **Answer:** 
      - DDL (Data Definition Language): DDL is used to define the structure of the database schema, such as creating, altering, or dropping database objects like tables, views, indexes, and constraints.
      - DML (Data Manipulation Language): DML is used to manipulate the data stored in the database, such as inserting, updating, deleting, and querying data records in tables.<br/><br/>

17. **What is a join in SQL, and what are its types?**<br/><br/>
    - **Answer:** A join in SQL combines rows from two or more tables based on a related column between them. The types of joins in SQL are:
      - Inner Join: Returns rows that have matching values in both tables.
      - Left Outer Join: Returns all rows from the left table and matching rows from the right table.
      - Right Outer Join: Returns all rows from the right table and matching rows from the left table.
      - Full Outer Join: Returns all rows when there is a match in either the left or right table.<br/><br/>

18. **What is the difference between a DELETE and TRUNCATE statement?**<br/><br/>
    - **Answer:** 
      - DELETE statement: Deletes one or more rows from a table based on specified conditions, and it can be rolled back using a transaction.
      - TRUNCATE statement: Removes all rows from a table, resetting the table to its initial state, and it cannot be rolled back. TRUNCATE is faster than DELETE as it does not generate individual delete operations for each row.<br/><br/>

19. **What is the purpose of the GROUP BY and HAVING clauses in SQL?**<br/><br/>
    - **Answer:** 
      - GROUP BY clause: Groups the result set based on one or more columns and allows applying aggregate functions<br/><br/>