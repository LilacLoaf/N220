Final Project
https://lilacloaf.github.io/N220/Final 
Features:
    Login Form: 
    Reference Username and Password inputs from HTML document - take inputs and push them into an object for the account
    Logic: 
        Tell the user to input a valid username and password that fits the following criteria
            - Username / Password is not empty - If input is empty, display an error message asking to provide a value - (if-else statement)
            - Password contains
                + at least 8 characters - if string.length < 8, display an error message informing the user of the criteria - (if-else)
                + at least 1 Capital letter - set all characters in the string to lowercase, and then check if that matches with what was input. If it matches, display an error message informing the user of the criteria (if-else)
                + at least 1 number - 
            (All if statements are run through a function when the login button is selected)

    Dashboard:
    Display the username of the account that is logged in - reference the Username property of the account's object
    Give a button for logging out - Use a flag variable to display the Login and Dashboard screens, flip the variable back when Logout button is clicked
    Show all tasks and state of completion - Tasks 


    Tasks: 
        Allow users to add new tasks - Add Task button that runs a function that creates a pop up to ask for the name of the new task, which will become the name of a new task in an array
        Allow users to mark a task as complete - Flag variable that references completion property of object, Button flips the property from complete to incomplete and vice versa
        Allow users to remove a task from the list - Remove Task button that 

    Login Form
        Password must be an input type password
        Password must be at least 8 characters long
        Password must contain at least 1 number
        Password must contain at least 1 capital number
        Username and password must NOT be empty
        Inform users if the username or password is invalid based on criteria above
        They should only be informed for what needs corrected
    Dashboard
        Show who is logged in
        Give a button for logging out
        Show all tasks and signify which are marked as complete
    Tasks
        Allow users to add new tasks to the list
        Allow users to mark a task as complete
        Allow users to remove a task from the list
        Allow users to change the text of the task
        Allow users to assign an additional property of the task
    Additional Features
        Allow users to manage options for the additional property
        Tie tasks to the user signed in
        Allow users to see only tasks that they have created
