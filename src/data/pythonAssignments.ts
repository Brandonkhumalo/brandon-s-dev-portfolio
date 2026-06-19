export type PythonAssignment = {
  day: number;
  title: string;
  objective: string;
  instructions: string[];
  guide: string[];
  answer: string;
};

export const pythonAssignments: PythonAssignment[] = [
  {
    day: 1,
    title: "Introduction to Python, print(), Variables, and Data Types",
    objective: "Create a simple personal profile using variables and print it neatly.",
    instructions: [
      "Create variables for your name, age, city, course, and whether you are learning Python.",
      "Use at least four different data types: string, integer, boolean, and one more of your choice.",
      "Print each value with a clear label.",
      "Print the data type of at least three variables.",
    ],
    guide: [
      "Start by deciding which values are text and which values are numbers or True/False values.",
      "Remember that text values need quotation marks.",
      "Use print() with a label first, then the variable name.",
      "Use type() only after the variables already exist.",
    ],
    answer: `name = "Your Name"
age = 18
city = "Harare"
course = "Python Programming"
is_learning = True
height = 1.70

print("Name:", name)
print("Age:", age)
print("City:", city)
print("Course:", course)
print("Learning Python:", is_learning)
print("Height:", height)

print(type(name))
print(type(age))
print(type(is_learning))`,
  },
  {
    day: 2,
    title: "User Input, Type Conversion, and Basic Operators",
    objective: "Build a small calculator that uses numbers typed by the user.",
    instructions: [
      "Ask the user for two numbers.",
      "Convert both inputs so Python can do maths with them.",
      "Display addition, subtraction, multiplication, division, remainder, and power.",
      "Add one extra line that shows what the first number becomes after adding 10 to it.",
    ],
    guide: [
      "input() gives text, even when the user types digits.",
      "Use float() if you want to support decimal numbers.",
      "Keep each calculation in its own print() call so the output is easy to read.",
      "For the extra line, either create a new variable or update the first number with an assignment operator.",
    ],
    answer: `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)
print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)
print("Remainder:", num1 % num2)
print("Power:", num1 ** num2)

num1 += 10
print("First number after adding 10:", num1)`,
  },
  {
    day: 3,
    title: "Strings in Detail and String Formatting",
    objective: "Create a name and contact formatter that cleans messy user input.",
    instructions: [
      "Ask for first name, last name, city, and email.",
      "Remove extra spaces from names and city.",
      "Format the full name and city in title case.",
      "Make the email lowercase.",
      "Display the full name, uppercase full name, city, email, character count, and whether the email contains @.",
    ],
    guide: [
      "Clean each input before combining it with another value.",
      "Use string methods directly on the input result or store cleaned versions in new variables.",
      "Use an f-string where a sentence needs multiple values.",
      "For validation, think about a condition that returns True or False.",
    ],
    answer: `first_name = input("Enter first name: ").strip().title()
last_name = input("Enter last name: ").strip().title()
city = input("Enter city: ").strip().title()
email = input("Enter email: ").strip().lower()

full_name = first_name + " " + last_name

print("Full Name:", full_name)
print("Uppercase:", full_name.upper())
print("City:", city)
print("Email:", email)
print("Name Characters:", len(full_name))
print("Valid Email Symbol:", "@" in email)`,
  },
  {
    day: 4,
    title: "Conditions and Decision Making",
    objective: "Build a course access checker that reacts to age, payment, and email validity.",
    instructions: [
      "Ask for age, payment status, and email address.",
      "Convert payment into a boolean value.",
      "Check that the student is at least 12, has paid, and entered an email containing @.",
      "Show a different message for success, missing payment, invalid email, and age being too low.",
    ],
    guide: [
      "Convert age before comparing it with a number.",
      "Normalize yes/no input so YES, Yes, and yes behave the same way.",
      "Create simple boolean variables before the if statement.",
      "Order your elif checks so the most specific failure messages appear clearly.",
    ],
    answer: `age = int(input("Enter your age: "))
payment = input("Have you paid? yes/no: ").strip().lower()
email = input("Enter your email: ").strip().lower()

has_paid = payment == "yes"
email_is_valid = "@" in email

if age >= 12 and has_paid and email_is_valid:
    print("Access granted.")
elif age < 12:
    print("Access denied. You are too young.")
elif not email_is_valid:
    print("Access denied. Invalid email address.")
elif not has_paid:
    print("Access denied. Payment required.")
else:
    print("Access denied.")`,
  },
  {
    day: 5,
    title: "Project 1: Student Registration System",
    objective: "Combine input, strings, variables, booleans, and conditions in one registration program.",
    instructions: [
      "Collect full name, age, city, email, course, and payment status.",
      "Clean the text data before displaying it.",
      "Check that the email contains @ and ends with .com.",
      "Print a student profile.",
      "Decide whether registration succeeds.",
    ],
    guide: [
      "Treat each input field as one small problem before writing the final decision.",
      "Create separate boolean variables for payment and email validity.",
      "Print the profile first so you can inspect the data.",
      "Use one if/elif/else block for the access decision.",
    ],
    answer: `full_name = input("Enter your full name: ").strip().title()
age = int(input("Enter your age: "))
city = input("Enter your city: ").strip().title()
email = input("Enter your email: ").strip().lower()
course = input("Enter course name: ").strip().title()
payment = input("Have you paid? yes/no: ").strip().lower()

has_paid = payment == "yes"
email_is_valid = "@" in email and email.endswith(".com")

print("\\n--- Student Registration Profile ---")
print(f"Name: {full_name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Email: {email}")
print(f"Course: {course}")
print(f"Payment Status: {has_paid}")
print(f"Email Valid: {email_is_valid}")

if age >= 12 and has_paid and email_is_valid:
    print("Registration successful. Access granted.")
elif not email_is_valid:
    print("Registration failed. Invalid email address.")
elif age < 12:
    print("Registration failed. Student is too young.")
elif not has_paid:
    print("Registration failed. Payment is required.")
else:
    print("Registration failed.")`,
  },
  {
    day: 6,
    title: "Lists",
    objective: "Create and manage a list of school subjects.",
    instructions: [
      "Create a list with 5 subjects.",
      "Print the full list, the first subject, and the last subject.",
      "Add one new subject.",
      "Remove one subject.",
      "Sort the list and print how many subjects remain.",
    ],
    guide: [
      "Use square brackets for the original list.",
      "Remember that the first item is at index 0.",
      "Use one list method for adding and one list method for removing.",
      "Sort the list before checking its final length.",
    ],
    answer: `subjects = ["Maths", "English", "Science", "Computer", "History"]

print("All subjects:", subjects)
print("First subject:", subjects[0])
print("Last subject:", subjects[-1])

subjects.append("Geography")
subjects.remove("History")
subjects.sort()

print("Sorted subjects:", subjects)
print("Number of subjects:", len(subjects))`,
  },
  {
    day: 7,
    title: "Loops",
    objective: "Use loops to classify numbers as even or odd.",
    instructions: [
      "Loop through numbers from 1 to 20.",
      "For each number, check if it is even or odd.",
      "Print a sentence for every number.",
      "Add one example using break or continue.",
    ],
    guide: [
      "Use range() with a stop value that includes 20.",
      "The remainder operator helps you test even numbers.",
      "Place the condition inside the loop.",
      "Use continue when you want to skip one round, or break when you want to stop early.",
    ],
    answer: `for number in range(1, 21):
    if number == 13:
        continue

    if number % 2 == 0:
        print(number, "is even")
    else:
        print(number, "is odd")`,
  },
  {
    day: 8,
    title: "Lists and Loops Together",
    objective: "Ask for marks, store them in a list, and calculate a simple report.",
    instructions: [
      "Ask the user for 5 marks.",
      "Store the marks in a list.",
      "Calculate total, average, highest, lowest, passes, and fails.",
      "Print the complete marks report.",
    ],
    guide: [
      "Start with an empty list.",
      "Use a loop to avoid writing five input lines.",
      "After collecting marks, use built-in functions for total, highest, lowest, and count.",
      "Use a second loop to count passes and fails.",
    ],
    answer: `marks = []

for i in range(5):
    mark = int(input("Enter mark: "))
    marks.append(mark)

total = sum(marks)
average = total / len(marks)
passes = 0
fails = 0

for mark in marks:
    if mark >= 50:
        passes += 1
    else:
        fails += 1

print("Marks:", marks)
print("Total:", total)
print("Average:", average)
print("Highest:", max(marks))
print("Lowest:", min(marks))
print("Passes:", passes)
print("Fails:", fails)`,
  },
  {
    day: 9,
    title: "Tuples, Sets, and Dictionaries",
    objective: "Represent one student using the right collection types.",
    instructions: [
      "Create a tuple for fixed school terms.",
      "Create a set of unique course tags.",
      "Create a dictionary for one student profile.",
      "Include name, age, course, city, paid status, and a marks list.",
      "Loop through the dictionary and print each key and value.",
    ],
    guide: [
      "Use a tuple for values that should not change.",
      "Use a set where duplicates should disappear.",
      "Use a dictionary for real-world records with named fields.",
      "The items() method helps you loop through dictionary keys and values together.",
    ],
    answer: `terms = ("Term 1", "Term 2", "Term 3")
tags = {"python", "beginner", "python", "coding"}

student = {
    "name": "Anna",
    "age": 18,
    "course": "Python",
    "city": "Bulawayo",
    "paid": True,
    "marks": [80, 70, 90],
}

print("Terms:", terms)
print("Tags:", tags)

for key, value in student.items():
    print(key, ":", value)`,
  },
  {
    day: 10,
    title: "Project 2: Student Marks Report System",
    objective: "Build a report system that stores subjects, marks, calculations, and a grade.",
    instructions: [
      "Ask for the student name.",
      "Use a fixed list of 5 subjects.",
      "Collect one mark for each subject.",
      "Calculate total, average, highest, lowest, and grade.",
      "Store the report in a dictionary and print it neatly.",
    ],
    guide: [
      "Let the subjects list drive the input loop.",
      "Keep marks in a separate list using the same order as subjects.",
      "Calculate results only after all marks are collected.",
      "Use the same index to print each subject beside the matching mark.",
    ],
    answer: `student_name = input("Enter student name: ").strip().title()
subjects = ["Maths", "English", "Science", "Computer", "History"]
marks = []

for subject in subjects:
    mark = int(input(f"Enter mark for {subject}: "))
    marks.append(mark)

total = sum(marks)
average = total / len(marks)

if average >= 80:
    grade = "A"
elif average >= 70:
    grade = "B"
elif average >= 60:
    grade = "C"
elif average >= 50:
    grade = "D"
else:
    grade = "Fail"

student = {
    "name": student_name,
    "subjects": subjects,
    "marks": marks,
    "total": total,
    "average": average,
    "highest": max(marks),
    "lowest": min(marks),
    "grade": grade,
}

print("\\n--- Student Report ---")
print("Name:", student["name"])
for index in range(len(subjects)):
    print(f"{subjects[index]}: {marks[index]}")
print("Total:", student["total"])
print("Average:", student["average"])
print("Highest:", student["highest"])
print("Lowest:", student["lowest"])
print("Grade:", student["grade"])`,
  },
  {
    day: 11,
    title: "Functions",
    objective: "Create reusable calculator functions.",
    instructions: [
      "Create functions for add, subtract, multiply, and divide.",
      "Ask the user for two numbers.",
      "Call each function and print the result.",
      "Keep each function focused on one calculation.",
    ],
    guide: [
      "Define functions before calling them.",
      "Use parameters for the numbers instead of reading input inside every function.",
      "Return values from the functions, then print outside them.",
      "Test with simple numbers first so mistakes are easy to spot.",
    ],
    answer: `def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("Addition:", add(num1, num2))
print("Subtraction:", subtract(num1, num2))
print("Multiplication:", multiply(num1, num2))
print("Division:", divide(num1, num2))`,
  },
  {
    day: 12,
    title: "Function Practice and Program Organization",
    objective: "Rewrite the student report system using smaller functions.",
    instructions: [
      "Create functions for total, average, grade, and displaying the report.",
      "Collect name, subjects, and marks in the main part of the program.",
      "Use your functions to calculate and display the result.",
      "Avoid repeating calculation code.",
    ],
    guide: [
      "Give every function one clear job.",
      "Let calculation functions return values instead of printing.",
      "Let the display function receive the data it needs.",
      "Keep the main code readable from top to bottom.",
    ],
    answer: `def calculate_total(marks):
    return sum(marks)

def calculate_average(marks):
    return calculate_total(marks) / len(marks)

def get_grade(average):
    if average >= 80:
        return "A"
    elif average >= 70:
        return "B"
    elif average >= 60:
        return "C"
    elif average >= 50:
        return "D"
    return "Fail"

def display_report(name, subjects, marks):
    total = calculate_total(marks)
    average = calculate_average(marks)
    grade = get_grade(average)

    print("\\n--- Report ---")
    print("Name:", name)
    for index in range(len(subjects)):
        print(f"{subjects[index]}: {marks[index]}")
    print("Total:", total)
    print("Average:", average)
    print("Grade:", grade)

name = input("Enter student name: ").strip().title()
subjects = ["Maths", "English", "Science"]
marks = []

for subject in subjects:
    marks.append(int(input(f"Enter mark for {subject}: ")))

display_report(name, subjects, marks)`,
  },
  {
    day: 13,
    title: "Error Handling",
    objective: "Build a safe division calculator that does not crash on bad input.",
    instructions: [
      "Ask for two numbers.",
      "Divide the first number by the second.",
      "Handle non-number input.",
      "Handle division by zero.",
      "Keep asking until the user enters valid values.",
    ],
    guide: [
      "Put risky input conversion and division inside try.",
      "Use specific except blocks for clearer messages.",
      "Use a loop so the program can recover after an error.",
      "Break only after a successful calculation.",
    ],
    answer: `while True:
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        answer = num1 / num2
        print("Answer:", answer)
        break
    except ValueError:
        print("Invalid input. Please enter numbers only.")
    except ZeroDivisionError:
        print("You cannot divide by zero.")`,
  },
  {
    day: 14,
    title: "File Handling",
    objective: "Save a student profile into a text file.",
    instructions: [
      "Ask for name, age, course, city, and payment status.",
      "Open a text file safely using with open().",
      "Write each profile field on its own line.",
      "Print a success message after saving.",
    ],
    guide: [
      "Use write mode when you want to create or replace the file.",
      "Use newline characters so each field appears on a separate line.",
      "Keep the file writing block focused only on saving data.",
      "Run the program and check the created file.",
    ],
    answer: `name = input("Enter name: ")
age = input("Enter age: ")
course = input("Enter course: ")
city = input("Enter city: ")
paid = input("Has paid? yes/no: ")

with open("student_profile.txt", "w") as file:
    file.write(f"Name: {name}\\n")
    file.write(f"Age: {age}\\n")
    file.write(f"Course: {course}\\n")
    file.write(f"City: {city}\\n")
    file.write(f"Paid: {paid}\\n")

print("Student profile saved.")`,
  },
  {
    day: 15,
    title: "Project 3: Student Report Card Saved to File",
    objective: "Create a report card system that validates marks and saves reports.",
    instructions: [
      "Create a function that keeps asking until a mark is a number from 0 to 100.",
      "Create functions for total, average, grade, and saving the report.",
      "Ask for the student name and marks for five subjects.",
      "Print the report and append it to a text file.",
    ],
    guide: [
      "Start with the mark validation function because the project depends on clean marks.",
      "Use append mode for the file so previous reports are not deleted.",
      "Keep calculations separate from display and saving.",
      "Use the subject index when writing subject and mark pairs.",
    ],
    answer: `def get_valid_mark(subject):
    while True:
        try:
            mark = int(input(f"Enter mark for {subject}: "))
            if mark < 0 or mark > 100:
                print("Mark must be between 0 and 100.")
            else:
                return mark
        except ValueError:
            print("Invalid input. Please enter a number.")

def calculate_total(marks):
    return sum(marks)

def calculate_average(marks):
    return sum(marks) / len(marks)

def get_grade(average):
    if average >= 80:
        return "A"
    elif average >= 70:
        return "B"
    elif average >= 60:
        return "C"
    elif average >= 50:
        return "D"
    return "Fail"

def save_report(name, subjects, marks, total, average, grade):
    with open("student_report.txt", "a") as file:
        file.write("\\n--- Student Report ---\\n")
        file.write(f"Name: {name}\\n")
        for index in range(len(subjects)):
            file.write(f"{subjects[index]}: {marks[index]}\\n")
        file.write(f"Total: {total}\\n")
        file.write(f"Average: {average}\\n")
        file.write(f"Grade: {grade}\\n")

student_name = input("Enter student name: ").strip().title()
subjects = ["Maths", "English", "Science", "Computer", "History"]
marks = [get_valid_mark(subject) for subject in subjects]

total = calculate_total(marks)
average = calculate_average(marks)
grade = get_grade(average)

print("\\n--- Student Report ---")
print("Name:", student_name)
for index in range(len(subjects)):
    print(f"{subjects[index]}: {marks[index]}")
print("Total:", total)
print("Average:", average)
print("Grade:", grade)

save_report(student_name, subjects, marks, total, average, grade)
print("Report saved successfully.")`,
  },
  {
    day: 16,
    title: "Modules and Imports",
    objective: "Create a lucky draw program using Python modules.",
    instructions: [
      "Import the random and datetime modules.",
      "Create a list of at least five students.",
      "Randomly choose one winner.",
      "Print today's date and the winner.",
      "Append the result to a file.",
    ],
    guide: [
      "Import modules at the top of the file.",
      "Use a random module function that selects one item from a list.",
      "Use datetime to get today's date.",
      "Append to the file so every draw is kept.",
    ],
    answer: `import random
import datetime

students = ["John", "Mary", "Anna", "Peter", "Grace"]
winner = random.choice(students)
today = datetime.date.today()

print("Date:", today)
print("Winner:", winner)

with open("winner.txt", "a") as file:
    file.write(f"{today} - Winner: {winner}\\n")`,
  },
  {
    day: 17,
    title: "List Comprehension",
    objective: "Use list comprehension to create and filter number lists.",
    instructions: [
      "Create a list of numbers from 1 to 50.",
      "Create separate lists for even numbers, odd numbers, numbers divisible by 5, and squared numbers.",
      "Print every list with a clear label.",
      "Use list comprehension for each new list.",
    ],
    guide: [
      "Write the normal loop in your head first, then compress it into list comprehension.",
      "The expression before for decides what gets stored.",
      "The optional if at the end filters values.",
      "Use the remainder operator for even, odd, and divisible-by-5 checks.",
    ],
    answer: `numbers = [number for number in range(1, 51)]
even_numbers = [number for number in numbers if number % 2 == 0]
odd_numbers = [number for number in numbers if number % 2 != 0]
divisible_by_5 = [number for number in numbers if number % 5 == 0]
squares = [number * number for number in numbers]

print("Numbers:", numbers)
print("Even:", even_numbers)
print("Odd:", odd_numbers)
print("Divisible by 5:", divisible_by_5)
print("Squares:", squares)`,
  },
  {
    day: 18,
    title: "Working with Nested Data",
    objective: "Use a list of dictionaries to store multiple students and their marks.",
    instructions: [
      "Create a list of 3 student dictionaries.",
      "Each student must have name, course, and a marks list.",
      "Loop through the students.",
      "Calculate and print each student's average.",
    ],
    guide: [
      "Think of each dictionary as one student record.",
      "Put the dictionaries inside a list so you can process many records.",
      "Inside the loop, access the marks list through the dictionary key.",
      "Calculate each average inside the loop because each student has different marks.",
    ],
    answer: `students = [
    {"name": "John", "course": "Python", "marks": [80, 70, 90]},
    {"name": "Mary", "course": "Python", "marks": [60, 75, 85]},
    {"name": "Anna", "course": "Python", "marks": [90, 88, 92]},
]

for student in students:
    average = sum(student["marks"]) / len(student["marks"])
    print(student["name"], "-", student["course"], "- Average:", average)`,
  },
  {
    day: 19,
    title: "JSON Basics",
    objective: "Save a student profile to JSON and read it back.",
    instructions: [
      "Import the json module.",
      "Create a student dictionary with name, age, course, and city.",
      "Save it to a JSON file using indentation.",
      "Read the JSON file back into Python.",
      "Print the student's name and course.",
    ],
    guide: [
      "JSON works well with dictionaries and lists.",
      "Use dump() when writing Python data to a file.",
      "Use load() when reading JSON back from a file.",
      "After loading, access values using dictionary keys.",
    ],
    answer: `import json

student = {
    "name": "John",
    "age": 18,
    "course": "Python",
    "city": "Harare",
}

with open("student.json", "w") as file:
    json.dump(student, file, indent=4)

with open("student.json", "r") as file:
    data = json.load(file)

print("Name:", data["name"])
print("Course:", data["course"])`,
  },
  {
    day: 20,
    title: "Project 4: Student Database Using JSON",
    objective: "Build a small JSON-backed student database.",
    instructions: [
      "Create functions to load and save students.",
      "Create a function that adds one student with 3 marks.",
      "Calculate the student's average.",
      "Append the new student to the loaded list.",
      "Save the updated list and print all students.",
    ],
    guide: [
      "When loading, handle the case where the JSON file does not exist yet.",
      "Keep all students in a list because there can be many records.",
      "Store one student as a dictionary.",
      "Save after appending so the new record is remembered.",
    ],
    answer: `import json

def load_students():
    try:
        with open("students.json", "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_students(students):
    with open("students.json", "w") as file:
        json.dump(students, file, indent=4)

def add_student():
    name = input("Enter student name: ").strip().title()
    course = input("Enter course: ").strip().title()
    marks = []

    for i in range(3):
        while True:
            try:
                mark = int(input("Enter mark: "))
                marks.append(mark)
                break
            except ValueError:
                print("Invalid mark. Enter a number.")

    return {
        "name": name,
        "course": course,
        "marks": marks,
        "average": sum(marks) / len(marks),
    }

students = load_students()
students.append(add_student())
save_students(students)

print("\\n--- All Students ---")
for student in students:
    print(student["name"], "-", student["course"], "-", student["average"])`,
  },
  {
    day: 21,
    title: "Basic Object-Oriented Programming",
    objective: "Create a Product class with attributes and a method.",
    instructions: [
      "Create a Product class.",
      "Add name, price, and quantity attributes.",
      "Create a method that returns the total inventory value.",
      "Create one product object and print its name and total value.",
    ],
    guide: [
      "Use __init__ to receive values when the object is created.",
      "Store incoming values on self.",
      "A method inside the class can use self.price and self.quantity.",
      "Create the object after the class definition.",
    ],
    answer: `class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity

product = Product("Laptop", 500, 2)

print(product.name)
print(product.total_value())`,
  },
  {
    day: 22,
    title: "More OOP: Methods, Multiple Objects, and Class Practice",
    objective: "Create a bank account class with deposit, withdrawal, and balance methods.",
    instructions: [
      "Create a BankAccount class.",
      "Store the account holder and balance.",
      "Add deposit, withdraw, and show_balance methods.",
      "Create at least one account object.",
      "Test deposit, withdrawal, and insufficient balance behavior.",
    ],
    guide: [
      "Methods that change balance should update self.balance.",
      "Check the withdrawal amount before subtracting it.",
      "Keep messages clear so the user knows what happened.",
      "Call methods on the object, not on the class itself.",
    ],
    answer: `class BankAccount:
    def __init__(self, holder, balance):
        self.holder = holder
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient balance")

    def show_balance(self):
        print(f"{self.holder} has ${self.balance}")

account = BankAccount("Brandon", 100)
account.deposit(50)
account.withdraw(30)
account.show_balance()
account.withdraw(500)`,
  },
  {
    day: 23,
    title: "Working with Dates and Time",
    objective: "Create an assignment deadline calculator.",
    instructions: [
      "Ask for the assignment name.",
      "Ask how many days from today the deadline is.",
      "Display the assignment name, today's date, and the due date.",
      "Format at least one date in day/month/year format.",
    ],
    guide: [
      "Import datetime before using date tools.",
      "Get today's date from datetime.date.today().",
      "Use timedelta to move forward by a number of days.",
      "Use strftime when you want a custom display format.",
    ],
    answer: `import datetime

assignment_name = input("Enter assignment name: ")
days = int(input("Enter days until deadline: "))

today = datetime.date.today()
due_date = today + datetime.timedelta(days=days)

print("Assignment:", assignment_name)
print("Today:", today.strftime("%d/%m/%Y"))
print("Due date:", due_date.strftime("%d/%m/%Y"))`,
  },
  {
    day: 24,
    title: "Debugging and Code Reading",
    objective: "Fix a broken program by reading errors and checking logic.",
    instructions: [
      "Start with code that asks for name and age.",
      "Fix the type error when adding 1 to age.",
      "Fix the broken print statement.",
      "Add one debug print that helps confirm the converted age.",
      "Display the final message.",
    ],
    guide: [
      "Read the error message before changing code.",
      "Ask which values are strings and which values should be numbers.",
      "Check the print syntax carefully.",
      "Use a temporary debug print, then keep it only if it helps the output.",
    ],
    answer: `name = input("Enter name: ")
age = int(input("Enter age: "))

print("Debug age value:", age)

next_year = age + 1
print("Hello", name)
print("Next year you will be", next_year)`,
  },
  {
    day: 25,
    title: "Project 5: Bank Account System Using OOP",
    objective: "Build a menu-driven bank account system using OOP.",
    instructions: [
      "Create a BankAccount class with holder name and balance.",
      "Add deposit, withdraw, and show balance methods.",
      "Ask for the account holder name.",
      "Show a looped menu with deposit, withdraw, show balance, and exit.",
      "Handle invalid money inputs.",
    ],
    guide: [
      "Build and test the class before adding the menu.",
      "Use while True for the menu loop.",
      "Convert deposit and withdrawal amounts inside try blocks.",
      "Break the loop only when the user chooses exit.",
    ],
    answer: `class BankAccount:
    def __init__(self, holder_name, balance=0):
        self.holder_name = holder_name
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print("Deposit successful.")
        else:
            print("Amount must be greater than 0.")

    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be greater than 0.")
        elif amount > self.balance:
            print("Insufficient balance.")
        else:
            self.balance -= amount
            print("Withdrawal successful.")

    def show_balance(self):
        print(f"Account Holder: {self.holder_name}")
        print(f"Balance: ${self.balance}")

name = input("Enter account holder name: ").strip().title()
account = BankAccount(name)

while True:
    print("\\n--- Bank Menu ---")
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Show Balance")
    print("4. Exit")
    choice = input("Choose option: ")

    if choice == "1":
        try:
            amount = float(input("Enter amount: "))
            account.deposit(amount)
        except ValueError:
            print("Invalid amount.")
    elif choice == "2":
        try:
            amount = float(input("Enter amount: "))
            account.withdraw(amount)
        except ValueError:
            print("Invalid amount.")
    elif choice == "3":
        account.show_balance()
    elif choice == "4":
        print("Goodbye.")
        break
    else:
        print("Invalid option.")`,
  },
  {
    day: 26,
    title: "Intro to APIs and Requests",
    objective: "Send a basic request to the GitHub API and check if it worked.",
    instructions: [
      "Import the requests package.",
      "Send a GET request to the GitHub API homepage.",
      "Print whether the request succeeded.",
      "Print the status code.",
      "Do not print the full response text unless you are testing.",
    ],
    guide: [
      "Install requests first if your Python environment does not have it.",
      "Store the response in a variable.",
      "A status code of 200 usually means success.",
      "Use an if statement to turn the status code into a friendly message.",
    ],
    answer: `import requests

response = requests.get("https://api.github.com")

if response.status_code == 200:
    print("Request successful")
else:
    print("Request failed")

print("Status code:", response.status_code)`,
  },
  {
    day: 27,
    title: "Working with API JSON Data",
    objective: "Build a GitHub profile viewer.",
    instructions: [
      "Ask the user for a GitHub username.",
      "Request that user's profile from the GitHub API.",
      "If the request succeeds, display username, name, public repos, followers, and profile URL.",
      "If it fails, show a user not found message.",
    ],
    guide: [
      "Use an f-string to place the username inside the URL.",
      "Only call response.json() after confirming the request succeeded.",
      "API JSON becomes a dictionary in Python.",
      "Use the field names returned by GitHub, such as login and html_url.",
    ],
    answer: `import requests

username = input("Enter GitHub username: ")
response = requests.get(f"https://api.github.com/users/{username}")

if response.status_code == 200:
    data = response.json()
    print("Username:", data["login"])
    print("Name:", data["name"])
    print("Public Repos:", data["public_repos"])
    print("Followers:", data["followers"])
    print("Profile URL:", data["html_url"])
else:
    print("User not found")`,
  },
  {
    day: 28,
    title: "Virtual Environments and Project Structure",
    objective: "Split a calculator project into two Python files.",
    instructions: [
      "Create a folder called calculator_project.",
      "Inside it, create calculator.py and main.py.",
      "Put the calculation functions in calculator.py.",
      "Import those functions in main.py.",
      "Ask for two numbers and print the four basic calculations.",
    ],
    guide: [
      "Use one file for reusable logic and one file for running the program.",
      "Function names must match between the export file and the import line.",
      "Run main.py from inside the project folder.",
      "A virtual environment is useful when projects need their own packages.",
    ],
    answer: `# calculator.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

# main.py
from calculator import add, subtract, multiply, divide

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("Add:", add(num1, num2))
print("Subtract:", subtract(num1, num2))
print("Multiply:", multiply(num1, num2))
print("Divide:", divide(num1, num2))`,
  },
  {
    day: 29,
    title: "Final Project Planning",
    objective: "Plan the final Student Management System before writing the full code.",
    instructions: [
      "Write the features the system must have.",
      "Design the student dictionary structure.",
      "List the functions your program needs.",
      "Write pseudocode for the main menu.",
      "Create skeleton functions using pass.",
    ],
    guide: [
      "Focus on structure, not full implementation.",
      "Make sure every feature has a matching function.",
      "Use a list for all students and a dictionary for one student.",
      "Pseudocode should be simple English that explains the program flow.",
    ],
    answer: `features = [
    "Add a student",
    "View all students",
    "Search for a student",
    "Save students to JSON",
    "Load students from JSON",
    "Exit",
]

student_example = {
    "name": "John",
    "age": 18,
    "course": "Python",
    "marks": [80, 70, 90],
    "average": 80.0,
    "grade": "A",
}

def load_students():
    pass

def save_students(students):
    pass

def get_grade(average):
    pass

def add_student(students):
    pass

def view_students(students):
    pass

def search_student(students):
    pass

def main_menu():
    pass`,
  },
  {
    day: 30,
    title: "Final Project: Student Management System",
    objective: "Build a complete student management system with JSON storage.",
    instructions: [
      "Load students from a JSON file when the program starts.",
      "Create menu options to add, view, search, and exit.",
      "Validate number input for age and marks.",
      "Calculate average and grade for every new student.",
      "Save students after adding and again when exiting.",
    ],
    guide: [
      "Start from the skeleton created on Day 29.",
      "Build one function at a time and test it before moving on.",
      "Use JSON for persistence and functions for organization.",
      "Keep the menu loop small by calling helper functions.",
    ],
    answer: `import json

FILE_NAME = "students.json"

def load_students():
    try:
        with open(FILE_NAME, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_students(students):
    with open(FILE_NAME, "w") as file:
        json.dump(students, file, indent=4)

def get_grade(average):
    if average >= 80:
        return "A"
    elif average >= 70:
        return "B"
    elif average >= 60:
        return "C"
    elif average >= 50:
        return "D"
    return "Fail"

def get_valid_int(message):
    while True:
        try:
            return int(input(message))
        except ValueError:
            print("Invalid input. Please enter a number.")

def add_student(students):
    name = input("Enter student name: ").strip().title()
    age = get_valid_int("Enter student age: ")
    course = input("Enter course: ").strip().title()
    marks = []

    for i in range(3):
        while True:
            mark = get_valid_int(f"Enter mark {i + 1}: ")
            if mark < 0 or mark > 100:
                print("Mark must be between 0 and 100.")
            else:
                marks.append(mark)
                break

    average = sum(marks) / len(marks)
    student = {
        "name": name,
        "age": age,
        "course": course,
        "marks": marks,
        "average": average,
        "grade": get_grade(average),
    }
    students.append(student)
    save_students(students)
    print("Student added successfully.")

def view_students(students):
    if len(students) == 0:
        print("No students found.")
        return

    for student in students:
        print("\\nName:", student["name"])
        print("Age:", student["age"])
        print("Course:", student["course"])
        print("Marks:", student["marks"])
        print("Average:", student["average"])
        print("Grade:", student["grade"])

def search_student(students):
    search_name = input("Enter student name to search: ").strip().title()

    for student in students:
        if student["name"] == search_name:
            print("\\n--- Student Found ---")
            print("Name:", student["name"])
            print("Age:", student["age"])
            print("Course:", student["course"])
            print("Marks:", student["marks"])
            print("Average:", student["average"])
            print("Grade:", student["grade"])
            return

    print("Student not found.")

def main_menu():
    students = load_students()

    while True:
        print("\\n--- Student Management System ---")
        print("1. Add Student")
        print("2. View Students")
        print("3. Search Student")
        print("4. Exit")
        choice = input("Choose option: ")

        if choice == "1":
            add_student(students)
        elif choice == "2":
            view_students(students)
        elif choice == "3":
            search_student(students)
        elif choice == "4":
            save_students(students)
            print("Goodbye.")
            break
        else:
            print("Invalid option. Try again.")

main_menu()`,
  },
];
