import { Module, QuizQuestion } from '../types'

export const pythonModules: Module[] = [
  {
    id: 'module-1',
    moduleNumber: 1,
    title: 'Introduction to Python and Setting Up Your Environment',
    description: 'Get started with Python and set up your development environment',
    lessons: [
      {
        id: 'lesson-1-1',
        moduleId: 'module-1',
        lessonNumber: 1,
        title: 'What is Python and Why Learn It?',
        content: `Python is a high-level, interpreted programming language known for its simplicity and readability. 
        It was created by Guido van Rossum and first released in 1991. Python is used in web development, data science, 
        machine learning, automation, and many other fields. Learning Python is an excellent choice because:
        - Simple and readable syntax
        - Large community and extensive libraries
        - Versatile applications
        - High demand in the job market`,
        completed: false,
      },
      {
        id: 'lesson-1-2',
        moduleId: 'module-1',
        lessonNumber: 2,
        title: 'Installing Python on Windows, macOS, and Linux',
        content: `Steps to install Python:
        1. Visit python.org and download the latest version
        2. Run the installer
        3. Make sure to check "Add Python to PATH"
        4. Verify installation by opening terminal/command prompt and typing: python --version
        For different OS:
        - Windows: Download .exe installer
        - macOS: Use brew or download .pkg installer
        - Linux: Use package manager (apt, yum, etc.)`,
        completed: false,
      },
      {
        id: 'lesson-1-3',
        moduleId: 'module-1',
        lessonNumber: 3,
        title: 'Introduction to Integrated Development Environments (IDEs)',
        content: `Popular IDEs and editors for Python:
        - VS Code: Lightweight, free, highly customizable
        - PyCharm: Professional IDE with powerful features
        - Thonny: Perfect for beginners
        - IDLE: Built-in Python editor
        - Jupyter Notebook: Great for data science
        
        Recommended for beginners: VS Code + Python extension
        Setup: Install VS Code, then install the Python extension by Microsoft`,
        completed: false,
      },
      {
        id: 'lesson-1-4',
        moduleId: 'module-1',
        lessonNumber: 4,
        title: 'Writing and Running Your First Python Program: "Hello, World!"',
        content: `Your first program:
        
        print("Hello, World!")
        
        How to run it:
        1. Create a file named hello.py
        2. Write: print("Hello, World!")
        3. Open terminal in that directory
        4. Type: python hello.py
        5. See the output: Hello, World!
        
        Congratulations! You've written your first Python program!`,
        completed: false,
      },
      {
        id: 'lesson-1-5',
        moduleId: 'module-1',
        lessonNumber: 5,
        title: 'Understanding Basic Syntax and Code Structure',
        content: `Python syntax rules:
        - Indentation: Python uses indentation to define code blocks
        - Comments: Use # for single-line comments
        - Multi-line strings: Use triple quotes """ """
        - Statements: Each line is a statement
        - No semicolons needed
        
        Example:
        # This is a comment
        x = 5
        print(x)  # Print the value
        
        Key points:
        - Python is case-sensitive
        - Use meaningful variable names
        - Follow PEP 8 style guide`,
        completed: false,
      },
    ],
  },
  {
    id: 'module-2',
    moduleNumber: 2,
    title: 'Variables, Data Types, and Operators',
    description: 'Learn about variables and different data types in Python',
    lessons: [
      {
        id: 'lesson-2-1',
        moduleId: 'module-2',
        lessonNumber: 1,
        title: 'Understanding Variables: Naming Conventions and Assignment',
        content: `Variables store data values. In Python, no need to declare type.
        
        Assignment:
        name = "John"
        age = 25
        height = 5.9
        
        Naming conventions:
        - Use lowercase with underscores (snake_case)
        - Start with letter or underscore, not number
        - Use descriptive names
        - Avoid Python keywords
        
        Good: student_age, user_name
        Bad: sa, un, 1variable, class`,
        completed: false,
      },
      {
        id: 'lesson-2-2',
        moduleId: 'module-2',
        lessonNumber: 2,
        title: 'Exploring Data Types: Integers, Floats, Strings, and Booleans',
        content: `Python's main data types:
        
        1. Integer (int): Whole numbers
           age = 25
           count = -10
        
        2. Float: Decimal numbers
           price = 19.99
           height = 5.9
        
        3. String (str): Text
           name = "Alice"
           message = 'Hello World'
        
        4. Boolean (bool): True or False
           is_student = True
           is_adult = False
        
        Check type using type():
        print(type(25))  # <class 'int'>
        print(type(19.99))  # <class 'float'>`,
        completed: false,
      },
      {
        id: 'lesson-2-3',
        moduleId: 'module-2',
        lessonNumber: 3,
        title: 'Working with Operators: Arithmetic, Comparison, and Logical',
        content: `Arithmetic operators:
        + Addition: 5 + 3 = 8
        - Subtraction: 5 - 3 = 2
        * Multiplication: 5 * 3 = 15
        / Division: 6 / 2 = 3.0
        // Floor division: 7 // 2 = 3
        % Modulus: 7 % 2 = 1
        ** Exponentiation: 2 ** 3 = 8
        
        Comparison operators:
        == Equal: 5 == 5 → True
        != Not equal: 5 != 3 → True
        < Less than: 5 < 10 → True
        > Greater than: 5 > 3 → True
        <= Less or equal: 5 <= 5 → True
        >= Greater or equal: 5 >= 3 → True
        
        Logical operators:
        and: Both conditions true
        or: At least one condition true
        not: Negates condition`,
        completed: false,
      },
      {
        id: 'lesson-2-4',
        moduleId: 'module-2',
        lessonNumber: 4,
        title: 'String Manipulation: Concatenation, Slicing, and Formatting',
        content: `String operations:
        
        Concatenation:
        first_name = "John"
        last_name = "Doe"
        full_name = first_name + " " + last_name
        
        Slicing:
        text = "Python"
        print(text[0])    # P
        print(text[0:3])  # Pyt
        print(text[-1])   # n
        
        String methods:
        text.upper()      # PYTHON
        text.lower()      # python
        text.replace("P", "J")  # Jython
        
        Formatting:
        age = 25
        message = f"I am {age} years old"
        message = "I am {} years old".format(age)`,
        completed: false,
      },
      {
        id: 'lesson-2-5',
        moduleId: 'module-2',
        lessonNumber: 5,
        title: 'Introduction to Comments and Code Documentation',
        content: `Comments explain your code. They are not executed.
        
        Single-line comment:
        # This is a comment
        x = 5  # This is also a comment
        
        Multi-line comment:
        """
        This is a multi-line comment
        Useful for longer explanations
        """
        
        Documentation strings (docstrings):
        def greet(name):
            """
            This function greets someone.
            Args:
                name: Person's name
            """
            print(f"Hello, {name}!")
        
        Best practices:
        - Comment why, not what
        - Keep comments up-to-date
        - Use clear, concise language`,
        completed: false,
      },
    ],
  },
  {
    id: 'module-3',
    moduleNumber: 3,
    title: 'Control Flow: Making Decisions and Repeating Actions',
    description: 'Master conditional statements and loops',
    lessons: [
      {
        id: 'lesson-3-1',
        moduleId: 'module-3',
        lessonNumber: 1,
        title: 'Introduction to Conditional Statements: if, elif, and else',
        content: `Conditional statements execute different code based on conditions.
        
        if statement:
        age = 18
        if age >= 18:
            print("You are an adult")
        
        if-else:
        if age >= 18:
            print("You are an adult")
        else:
            print("You are a minor")
        
        if-elif-else:
        if age < 13:
            print("Child")
        elif age < 18:
            print("Teenager")
        else:
            print("Adult")
        
        Nested if:
        if age >= 18:
            if age >= 65:
                print("Senior citizen")
            else:
                print("Adult")`,
        completed: false,
      },
      {
        id: 'lesson-3-2',
        moduleId: 'module-3',
        lessonNumber: 2,
        title: 'Using Comparison Operators in Conditional Statements',
        content: `Comparison operators in conditions:
        
        == (equal):
        if name == "John":
            print("Hello John!")
        
        != (not equal):
        if age != 18:
            print("Not 18")
        
        > and <:
        if score > 80:
            print("Pass")
        
        >= and <=:
        if price <= 100:
            print("Affordable")
        
        Multiple conditions:
        if age >= 18 and has_license:
            print("Can drive")
        
        if country == "USA" or country == "Canada":
            print("North America")
        
        not operator:
        if not is_weekend:
            print("Work day")`,
        completed: false,
      },
      {
        id: 'lesson-3-3',
        moduleId: 'module-3',
        lessonNumber: 3,
        title: 'Understanding Loops: for Loops and while Loops',
        content: `Loops repeat code multiple times.
        
        for loop:
        for i in range(5):
            print(i)  # Prints 0, 1, 2, 3, 4
        
        Loop through list:
        fruits = ["apple", "banana", "cherry"]
        for fruit in fruits:
            print(fruit)
        
        while loop:
        count = 0
        while count < 5:
            print(count)
            count += 1
        
        Loop with string:
        for char in "Python":
            print(char)
        
        Loop with range:
        for i in range(1, 10, 2):  # start, stop, step
            print(i)  # Prints 1, 3, 5, 7, 9`,
        completed: false,
      },
      {
        id: 'lesson-3-4',
        moduleId: 'module-3',
        lessonNumber: 4,
        title: 'Controlling Loop Execution: break and continue Statements',
        content: `Control loop flow with break and continue.
        
        break: Exit loop immediately
        for i in range(10):
            if i == 5:
                break
            print(i)  # Prints 0, 1, 2, 3, 4
        
        continue: Skip current iteration
        for i in range(5):
            if i == 2:
                continue
            print(i)  # Prints 0, 1, 3, 4
        
        Practical example:
        password = ""
        while password != "secret":
            password = input("Enter password: ")
            if password == "exit":
                break
            if password == "secret":
                print("Access granted!")
        
        Find first even number:
        for num in [1, 3, 5, 8, 10]:
            if num % 2 == 0:
                print(f"Found: {num}")
                break`,
        completed: false,
      },
      {
        id: 'lesson-3-5',
        moduleId: 'module-3',
        lessonNumber: 5,
        title: 'Practical Exercise: Building a Simple Number Guessing Game',
        content: `Create a number guessing game:
        
        import random
        
        secret = random.randint(1, 10)
        guess = None
        attempts = 0
        
        while guess != secret:
            guess = int(input("Guess a number (1-10): "))
            attempts += 1
            
            if guess < secret:
                print("Too low!")
            elif guess > secret:
                print("Too high!")
            else:
                print(f"Correct! You took {attempts} attempts")
        
        Learning points:
        - Input/output
        - Loops and conditions
        - Variables and logic
        - User interaction`,
        completed: false,
      },
    ],
  },
  {
    id: 'module-4',
    moduleNumber: 4,
    title: 'Data Structures: Organizing Your Data',
    description: 'Learn about lists, tuples, dictionaries, and sets',
    lessons: [
      {
        id: 'lesson-4-1',
        moduleId: 'module-4',
        lessonNumber: 1,
        title: 'Introduction to Lists: Creating, Accessing, and Modifying Lists',
        content: `Lists are ordered, mutable collections.
        
        Creating lists:
        numbers = [1, 2, 3, 4, 5]
        fruits = ["apple", "banana", "cherry"]
        mixed = [1, "two", 3.0, True]
        empty = []
        
        Accessing elements:
        print(fruits[0])    # apple
        print(fruits[-1])   # cherry
        print(fruits[1:3])  # ["banana", "cherry"]
        
        Modifying lists:
        fruits[0] = "orange"
        fruits.append("mango")
        fruits.insert(1, "blueberry")
        fruits.remove("cherry")
        fruits.pop()  # Remove last
        
        List methods:
        len(fruits)     # Length
        fruits.sort()   # Sort
        fruits.reverse()  # Reverse
        fruits.count("apple")  # Count`,
        completed: false,
      },
      {
        id: 'lesson-4-2',
        moduleId: 'module-4',
        lessonNumber: 2,
        title: 'List Operations: Adding, Removing, and Sorting Elements',
        content: `Advanced list operations:
        
        Adding elements:
        list1 = [1, 2, 3]
        list1.append(4)       # Add single element
        list1.extend([5, 6])  # Add multiple elements
        list1 = list1 + [7]   # Concatenation
        
        Removing elements:
        list1.remove(3)       # Remove by value
        list1.pop(0)          # Remove by index
        list1.clear()         # Remove all
        del list1[0]          # Delete by index
        
        Sorting:
        numbers = [3, 1, 4, 1, 5, 9]
        numbers.sort()        # Ascending [1, 1, 3, 4, 5, 9]
        numbers.sort(reverse=True)  # Descending
        
        List comprehension:
        squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
        evens = [x for x in range(10) if x % 2 == 0]`,
        completed: false,
      },
      {
        id: 'lesson-4-3',
        moduleId: 'module-4',
        lessonNumber: 3,
        title: 'Introduction to Tuples: Immutable Sequences',
        content: `Tuples are ordered, immutable collections.
        
        Creating tuples:
        point = (3, 4)
        colors = ("red", "green", "blue")
        single = (1,)  # Note: comma needed for single element
        mixed = (1, "two", 3.0)
        
        Accessing elements:
        print(colors[0])    # red
        print(colors[-1])   # blue
        
        Tuple unpacking:
        x, y = point  # x=3, y=4
        r, g, b = colors
        
        Advantages over lists:
        - Faster iteration
        - Can be used as dictionary keys
        - Protect data from modification
        
        Converting:
        list_form = list(point)    # Convert to list
        tuple_form = tuple([1,2,3])  # Convert to tuple`,
        completed: false,
      },
      {
        id: 'lesson-4-4',
        moduleId: 'module-4',
        lessonNumber: 4,
        title: 'Introduction to Dictionaries: Key-Value Pairs',
        content: `Dictionaries store key-value pairs.
        
        Creating dictionaries:
        person = {
            "name": "John",
            "age": 30,
            "city": "New York"
        }
        
        Accessing values:
        print(person["name"])      # John
        print(person.get("age"))   # 30
        print(person.get("email", "N/A"))  # Default value
        
        Modifying dictionaries:
        person["age"] = 31         # Update
        person["email"] = "john@example.com"  # Add
        del person["city"]         # Delete
        person.pop("age")          # Remove and return
        
        Dictionary methods:
        person.keys()     # Get all keys
        person.values()   # Get all values
        person.items()    # Get key-value pairs
        
        Iterating:
        for key in person:
            print(f"{key}: {person[key]}")`,
        completed: false,
      },
      {
        id: 'lesson-4-5',
        moduleId: 'module-4',
        lessonNumber: 5,
        title: 'Working with Sets: Unique Elements and Set Operations',
        content: `Sets store unique, unordered elements.
        
        Creating sets:
        numbers = {1, 2, 3, 4, 5}
        fruits = {"apple", "banana", "cherry"}
        empty = set()  # Note: {} creates dict, not set
        
        Set operations:
        numbers.add(6)
        numbers.remove(3)  # Raises error if not found
        numbers.discard(3)  # No error if not found
        
        Set algebra:
        set1 = {1, 2, 3}
        set2 = {3, 4, 5}
        
        union = set1 | set2              # {1, 2, 3, 4, 5}
        intersection = set1 & set2       # {3}
        difference = set1 - set2         # {1, 2}
        symmetric = set1 ^ set2          # {1, 2, 4, 5}
        
        Checking membership:
        2 in set1  # True
        6 in set1  # False`,
        completed: false,
      },
    ],
  },
  {
    id: 'module-5',
    moduleNumber: 5,
    title: 'Functions: Reusable Code Blocks',
    description: 'Create and use functions effectively',
    lessons: [
      {
        id: 'lesson-5-1',
        moduleId: 'module-5',
        lessonNumber: 1,
        title: 'Defining Functions: Parameters and Return Values',
        content: `Functions organize code into reusable blocks.
        
        Basic function:
        def greet():
            print("Hello!")
        
        greet()  # Call function
        
        With parameters:
        def greet(name):
            print(f"Hello, {name}!")
        
        greet("Alice")
        
        With return value:
        def add(a, b):
            return a + b
        
        result = add(5, 3)  # result = 8
        
        Multiple parameters:
        def calculate(a, b, operation):
            if operation == "+":
                return a + b
            elif operation == "-":
                return a - b
        
        Default parameters:
        def greet(name, greeting="Hello"):
            print(f"{greeting}, {name}!")
        
        greet("Bob")        # Hello, Bob!
        greet("Bob", "Hi")  # Hi, Bob!`,
        completed: false,
      },
      {
        id: 'lesson-5-2',
        moduleId: 'module-5',
        lessonNumber: 2,
        title: 'Calling Functions and Passing Arguments',
        content: `Different ways to call functions:
        
        Positional arguments:
        def power(base, exponent):
            return base ** exponent
        
        power(2, 3)  # 8
        
        Keyword arguments:
        power(exponent=3, base=2)  # 8
        power(base=2, exponent=3)  # 8
        
        Mixed arguments:
        power(2, exponent=3)  # 8
        
        Variable number of arguments:
        def sum_all(*numbers):
            total = 0
            for num in numbers:
                total += num
            return total
        
        sum_all(1, 2, 3, 4, 5)  # 15
        
        Keyword variable arguments:
        def print_info(**kwargs):
            for key, value in kwargs.items():
                print(f"{key}: {value}")
        
        print_info(name="John", age=30, city="NYC")`,
        completed: false,
      },
      {
        id: 'lesson-5-3',
        moduleId: 'module-5',
        lessonNumber: 3,
        title: 'Understanding Scope: Local and Global Variables',
        content: `Scope determines where variables can be accessed.
        
        Global variables:
        x = 10  # Global scope
        
        def func():
            print(x)  # Can access global x
        
        func()  # Prints 10
        
        Local variables:
        def func():
            y = 20  # Local scope
            print(y)
        
        func()      # Prints 20
        print(y)    # Error: y not defined
        
        Global keyword:
        x = 10
        
        def change_x():
            global x
            x = 20
        
        change_x()
        print(x)  # 20
        
        Scope hierarchy:
        - Local scope (inside function)
        - Enclosing scope (nested function)
        - Global scope (module level)
        - Built-in scope (Python built-ins)`,
        completed: false,
      },
      {
        id: 'lesson-5-4',
        moduleId: 'module-5',
        lessonNumber: 4,
        title: 'Built-in Functions: Exploring Common Python Functions',
        content: `Python provides many useful built-in functions:
        
        Type and conversion:
        type(5)          # <class 'int'>
        int("5")         # 5
        float("3.14")    # 3.14
        str(100)         # "100"
        bool(1)          # True
        
        Length and size:
        len([1, 2, 3])   # 3
        len("hello")     # 5
        max([1, 5, 3])   # 5
        min([1, 5, 3])   # 1
        sum([1, 2, 3])   # 6
        
        Iteration:
        range(5)         # 0, 1, 2, 3, 4
        enumerate(["a", "b", "c"])  # (0,"a"), (1,"b"), (2,"c")
        zip([1,2], ["a","b"])  # (1,"a"), (2,"b")
        
        Sorting and grouping:
        sorted([3, 1, 2])  # [1, 2, 3]
        reversed([1, 2, 3])  # Iterator for [3, 2, 1]
        
        Others:
        abs(-5)          # 5
        round(3.7)       # 4
        pow(2, 3)        # 8`,
        completed: false,
      },
      {
        id: 'lesson-5-5',
        moduleId: 'module-5',
        lessonNumber: 5,
        title: 'Practical Exercise: Creating a Function to Calculate the Area of a Shape',
        content: `Create shape calculation functions:
        
        import math
        
        def rectangle_area(length, width):
            return length * width
        
        def circle_area(radius):
            return math.pi * radius ** 2
        
        def triangle_area(base, height):
            return 0.5 * base * height
        
        def calculate_area(shape, *args):
            if shape == "rectangle":
                return rectangle_area(*args)
            elif shape == "circle":
                return circle_area(*args)
            elif shape == "triangle":
                return triangle_area(*args)
        
        # Usage:
        print(calculate_area("rectangle", 5, 4))   # 20
        print(calculate_area("circle", 3))         # 28.27
        print(calculate_area("triangle", 6, 4))    # 12
        
        Learning points:
        - Function organization
        - Parameter passing
        - Return values
        - Code reusability`,
        completed: false,
      },
    ],
  },
  {
    id: 'module-6',
    moduleNumber: 6,
    title: 'Working with Files: Reading and Writing Data',
    description: 'Handle files and manage data persistence',
    lessons: [
      {
        id: 'lesson-6-1',
        moduleId: 'module-6',
        lessonNumber: 1,
        title: 'Opening and Closing Files: Different Modes (Read, Write, Append)',
        content: `File modes in Python:
        
        'r' - Read (default): Open for reading
        'w' - Write: Open for writing (overwrites)
        'a' - Append: Open for appending to end
        'x' - Create: Create new file (fails if exists)
        'b' - Binary: Add for binary mode (rb, wb, etc)
        't' - Text: Add for text mode (rt, wt, etc)
        
        Opening and closing:
        file = open("data.txt", "r")
        content = file.read()
        file.close()
        
        Context manager (recommended):
        with open("data.txt", "r") as file:
            content = file.read()
        # File automatically closed
        
        Reading modes:
        with open("file.txt", "r") as f:
            content = f.read()        # Read entire file
            lines = f.readlines()     # Read as list of lines
            line = f.readline()       # Read one line
        
        Writing modes:
        with open("file.txt", "w") as f:
            f.write("Hello World")
        
        Appending:
        with open("file.txt", "a") as f:
            f.write("\\nNew line")`,
        completed: false,
      },
      {
        id: 'lesson-6-2',
        moduleId: 'module-6',
        lessonNumber: 2,
        title: 'Reading Data from Files: Line by Line and Entire File',
        content: `Different reading techniques:
        
        Read entire file:
        with open("data.txt", "r") as f:
            content = f.read()
        print(content)
        
        Read as lines:
        with open("data.txt", "r") as f:
            lines = f.readlines()
        for line in lines:
            print(line.strip())
        
        Read line by line:
        with open("data.txt", "r") as f:
            for line in f:
                print(line.strip())
        
        Read with readline():
        with open("data.txt", "r") as f:
            line = f.readline()
            while line:
                print(line.strip())
                line = f.readline()
        
        Practical example:
        def count_lines(filename):
            count = 0
            with open(filename, "r") as f:
                for line in f:
                    count += 1
            return count
        
        File processing:
        with open("numbers.txt", "r") as f:
            numbers = [int(line) for line in f]
        total = sum(numbers)`,
        completed: false,
      },
      {
        id: 'lesson-6-3',
        moduleId: 'module-6',
        lessonNumber: 3,
        title: 'Writing Data to Files: Creating and Modifying Files',
        content: `Different writing techniques:
        
        Write to new file:
        with open("output.txt", "w") as f:
            f.write("Hello, World!")
        
        Write multiple lines:
        with open("output.txt", "w") as f:
            f.write("Line 1\\n")
            f.write("Line 2\\n")
            f.write("Line 3\\n")
        
        Write list of lines:
        lines = ["First line", "Second line", "Third line"]
        with open("output.txt", "w") as f:
            f.writelines(["Line 1\\n", "Line 2\\n"])
        
        Append to file:
        with open("output.txt", "a") as f:
            f.write("\\nAppended line")
        
        Write formatted data:
        data = {"name": "John", "age": 30}
        with open("data.txt", "w") as f:
            f.write(str(data))
        
        Practical: CSV writing
        import csv
        
        rows = [
            ["Name", "Age", "City"],
            ["John", "30", "NYC"],
            ["Jane", "28", "LA"]
        ]
        
        with open("data.csv", "w") as f:
            writer = csv.writer(f)
            writer.writerows(rows)`,
        completed: false,
      },
      {
        id: 'lesson-6-4',
        moduleId: 'module-6',
        lessonNumber: 4,
        title: 'Handling File Errors: Using try and except Blocks',
        content: `Error handling for file operations:
        
        FileNotFoundError:
        try:
            with open("missing.txt", "r") as f:
                content = f.read()
        except FileNotFoundError:
            print("File not found!")
        
        Multiple exceptions:
        try:
            with open("data.txt", "r") as f:
                data = int(f.read())
        except FileNotFoundError:
            print("File not found")
        except ValueError:
            print("Invalid data format")
        
        General exception:
        try:
            with open("file.txt", "r") as f:
                content = f.read()
        except Exception as e:
            print(f"Error: {e}")
        
        Finally block:
        try:
            file = open("file.txt", "r")
            data = file.read()
        except FileNotFoundError:
            print("File not found")
        finally:
            if 'file' in locals():
                file.close()
        
        Check if file exists:
        import os
        if os.path.exists("file.txt"):
            with open("file.txt", "r") as f:
                print(f.read())`,
        completed: false,
      },
      {
        id: 'lesson-6-5',
        moduleId: 'module-6',
        lessonNumber: 5,
        title: 'Practical Exercise: Creating a Simple Text Editor',
        content: `Create a simple text editor:
        
        def text_editor():
            filename = input("Enter filename: ")
            
            try:
                with open(filename, "r") as f:
                    content = f.read()
                print("File loaded successfully!")
            except FileNotFoundError:
                content = ""
                print("New file created")
            
            while True:
                print("\\n1. View content")
                print("2. Add text")
                print("3. Save and exit")
                choice = input("Choose: ")
                
                if choice == "1":
                    print(content)
                elif choice == "2":
                    new_text = input("Enter text: ")
                    content += "\\n" + new_text
                elif choice == "3":
                    with open(filename, "w") as f:
                        f.write(content)
                    print("File saved!")
                    break
        
        text_editor()
        
        Learning points:
        - File I/O operations
        - Error handling
        - User interaction
        - Data persistence`,
        completed: false,
      },
    ],
  },
  {
    id: 'module-7',
    moduleNumber: 7,
    title: 'Introduction to Modules and Packages',
    description: 'Use and create reusable modules',
    lessons: [
      {
        id: 'lesson-7-1',
        moduleId: 'module-7',
        lessonNumber: 1,
        title: 'What are Modules and Packages?',
        content: `Modules and packages organize code:
        
        Module: A file containing Python code
        - File: math_utils.py (module name: math_utils)
        - Can contain functions, classes, variables
        - Promotes code reusability
        
        Package: Directory of modules
        - Subdirectory with __init__.py
        - Example: myproject/
                   ├── __init__.py
                   ├── utils/
                   │   ├── __init__.py
                   │   └── helpers.py
                   └── main.py
        
        Benefits:
        - Code organization
        - Avoid naming conflicts
        - Code reusability
        - Easier maintenance
        
        Standard library modules:
        - math, random, datetime
        - os, sys, json
        - requests, numpy, pandas`,
        completed: false,
      },
      {
        id: 'lesson-7-2',
        moduleId: 'module-7',
        lessonNumber: 2,
        title: 'Importing Modules: import, from, and as',
        content: `Different import methods:
        
        Basic import:
        import math
        print(math.pi)
        print(math.sqrt(16))
        
        Import specific items:
        from math import pi, sqrt
        print(pi)
        print(sqrt(16))
        
        Import with alias:
        import math as m
        print(m.pi)
        
        from math import pi as PI
        print(PI)
        
        Import all (use carefully):
        from math import *
        print(pi)  # Available directly
        
        Import from custom module:
        from mymodule import my_function
        my_function()
        
        Relative imports (in packages):
        from . import sibling_module
        from ..parent import another_module
        
        Best practices:
        - Use explicit imports
        - Avoid import *
        - Use aliases for clarity`,
        completed: false,
      },
      {
        id: 'lesson-7-3',
        moduleId: 'module-7',
        lessonNumber: 3,
        title: 'Exploring the Python Standard Library: math, datetime, random',
        content: `Useful standard library modules:
        
        math module:
        import math
        math.pi              # 3.14159...
        math.sqrt(16)        # 4.0
        math.ceil(4.3)       # 5
        math.floor(4.7)      # 4
        math.factorial(5)    # 120
        
        datetime module:
        from datetime import datetime, timedelta
        
        now = datetime.now()
        print(now)
        
        birthday = datetime(1990, 5, 15)
        age = now - birthday
        
        tomorrow = now + timedelta(days=1)
        next_week = now + timedelta(weeks=1)
        
        random module:
        import random
        
        random.randint(1, 10)      # Random int 1-10
        random.choice([1,2,3,4,5]) # Random from list
        random.shuffle([1,2,3])    # Shuffle list
        random.random()            # 0.0 to 1.0
        
        Practical example:
        import random
        secret = random.randint(1, 100)
        print(f"Guess: {secret}")`,
        completed: false,
      },
      {
        id: 'lesson-7-4',
        moduleId: 'module-7',
        lessonNumber: 4,
        title: 'Installing External Packages using pip',
        content: `Installing packages with pip:
        
        Basic installation:
        pip install package_name
        pip install requests
        pip install numpy
        
        Install specific version:
        pip install package_name==1.2.3
        pip install requests==2.28.0
        
        Upgrade package:
        pip install --upgrade package_name
        pip install -U requests
        
        Install from requirements file:
        pip install -r requirements.txt
        
        Uninstall:
        pip uninstall package_name
        
        List installed packages:
        pip list
        
        Create requirements.txt:
        pip freeze > requirements.txt
        
        Popular packages:
        - requests: HTTP requests
        - numpy: Numerical computing
        - pandas: Data analysis
        - flask: Web framework
        - django: Web framework
        - matplotlib: Data visualization
        
        Virtual environments (best practice):
        python -m venv myenv
        source myenv/bin/activate  # Linux/Mac
        deactivate`,
        completed: false,
      },
      {
        id: 'lesson-7-5',
        moduleId: 'module-7',
        lessonNumber: 5,
        title: 'Practical Exercise: Using the datetime Module to Calculate Time Differences',
        content: `Calculate time differences with datetime:
        
        from datetime import datetime, timedelta
        
        # Calculate age:
        def calculate_age(birth_date):
            today = datetime.now()
            return today.year - birth_date.year - (
                (today.month, today.day) < (birth_date.month, birth_date.day)
            )
        
        birthday = datetime(1990, 5, 15)
        age = calculate_age(birthday)
        print(f"Age: {age}")
        
        # Days until event:
        def days_until(event_date):
            today = datetime.now().date()
            delta = event_date - today
            return delta.days
        
        # Count down:
        def countdown(target_date):
            now = datetime.now()
            delta = target_date - now
            
            days = delta.days
            seconds = delta.seconds
            hours = seconds // 3600
            minutes = (seconds % 3600) // 60
            
            print(f"{days}d {hours}h {minutes}m")
        
        Learning points:
        - Working with dates
        - Time calculations
        - Practical applications
        - DateTime operations`,
        completed: false,
      },
    ],
  },
]

export const pythonQuiz: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the correct way to create a variable in Python?',
    options: [
      'variable_name = value',
      'variable_name: value',
      'variable_name @ value',
      'set variable_name = value',
    ],
    correctAnswer: 0,
    explanation: 'In Python, variables are created using the equals sign (=) for assignment.',
  },
  {
    id: 'q2',
    question: 'Which data type is used to store text in Python?',
    options: ['int', 'str', 'float', 'bool'],
    correctAnswer: 1,
    explanation: 'The str (string) data type is used to store text values in Python.',
  },
  {
    id: 'q3',
    question: 'What will be the output of: print(5 + 3 * 2)?',
    options: ['16', '11', '25', '13'],
    correctAnswer: 1,
    explanation: 'Following order of operations (PEMDAS), multiplication is done first: 3*2=6, then 5+6=11.',
  },
  {
    id: 'q4',
    question: 'Which keyword is used to create a function in Python?',
    options: ['function', 'def', 'define', 'func'],
    correctAnswer: 1,
    explanation: 'The def keyword is used to define a function in Python.',
  },
  {
    id: 'q5',
    question: 'What is the correct way to access the first element of a list?',
    options: ['list[1]', 'list[0]', 'list[first]', 'list.-1'],
    correctAnswer: 1,
    explanation: 'Python uses zero-based indexing, so the first element is at index 0.',
  },
  {
    id: 'q6',
    question: 'Which loop repeats a block of code a specific number of times?',
    options: ['if loop', 'while loop', 'for loop', 'until loop'],
    correctAnswer: 2,
    explanation: 'The for loop is commonly used to iterate a specific number of times, while while loop continues until a condition is false.',
  },
  {
    id: 'q7',
    question: 'What does the break statement do in a loop?',
    options: [
      'Continues to the next iteration',
      'Exits the loop immediately',
      'Pauses the loop',
      'Restarts the loop',
    ],
    correctAnswer: 1,
    explanation: 'The break statement exits (terminates) the current loop immediately.',
  },
  {
    id: 'q8',
    question: 'Which data structure stores key-value pairs?',
    options: ['list', 'tuple', 'dictionary', 'set'],
    correctAnswer: 2,
    explanation: 'A dictionary (dict) stores data as key-value pairs in Python.',
  },
  {
    id: 'q9',
    question: 'What is the correct syntax for a dictionary in Python?',
    options: [
      '{"key": value}',
      '{"key" = value}',
      '[key: value]',
      '{key: value}',
    ],
    correctAnswer: 0,
    explanation: 'Dictionaries use curly braces with "key": value syntax.',
  },
  {
    id: 'q10',
    question: 'Which method adds an element to the end of a list?',
    options: ['add()', 'insert()', 'append()', 'push()'],
    correctAnswer: 2,
    explanation: 'The append() method adds an element to the end of a list.',
  },
  {
    id: 'q11',
    question: 'What will be returned by the function below without a return statement?\nfunc(): print("Hello")',
    options: ['"Hello"', 'Hello', 'None', 'Undefined'],
    correctAnswer: 2,
    explanation: 'Functions without an explicit return statement return None by default.',
  },
  {
    id: 'q12',
    question: 'Which file mode is used to write data, overwriting existing content?',
    options: ['"r"', '"w"', '"a"', '"x"'],
    correctAnswer: 1,
    explanation: 'The "w" mode opens a file for writing and overwrites any existing content.',
  },
  {
    id: 'q13',
    question: 'What does the len() function return when applied to a list?',
    options: [
      'The maximum value in the list',
      'The number of elements in the list',
      'The first element of the list',
      'The last element of the list',
    ],
    correctAnswer: 1,
    explanation: 'The len() function returns the number of elements (length) in a list.',
  },
  {
    id: 'q14',
    question: 'Which of the following is an immutable data structure in Python?',
    options: ['list', 'dictionary', 'tuple', 'set'],
    correctAnswer: 2,
    explanation: 'Tuples are immutable (cannot be changed after creation), while lists, dictionaries, and sets are mutable.',
  },
  {
    id: 'q15',
    question: 'How do you import a specific function from a module?',
    options: [
      'import module.function',
      'from module import function',
      'import function from module',
      'from module export function',
    ],
    correctAnswer: 1,
    explanation: 'The correct syntax is "from module import function" to import specific items from a module.',
  },
]
