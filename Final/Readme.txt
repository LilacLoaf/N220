Final Project
https://lilacloaf.github.io/N220/Final/Readme.txt
Features:
    Login Form: 
    Reference Username and Password inputs from HTML document - take inputs and push them into an object for the account
    Logic: 
        Tell the user to input a valid username and password that fits the following criteria
            - Username / Password is not empty - If input is empty, display an error message asking to provide a value - if input = "", send error
            - Password contains - set a variable for the password input contents
                + at least 8 characters - if string.value.length < 8, display an error message informing the user of the criteria using prompt()
                (if password.value.length <=)
                + at least 1 Capital letter 
                    - set all characters in the string to lowercase, and then check if that matches with what was input. If it matches, display an error message informing the user of the criteria using prompt()
                + at least 1 number 
                    - if the input isNaN, the password doesn't contain a number. Display an error message informing the user of the criteria using prompt()
            (All if statements are run through a function when the login button is selected)

    Dashboard:
        Display the username of the account that is logged in - reference the Username property of an Object that makes up the Account 
            - generates a <p> tag using appendchild
            - Username property contains an array that creates a new object that contains that specific username's tasks, and generates the dashboard based on them
            - check if a username is taken, if it is, don't create anything and use the premade username
        Give a button for logging out - Use a flag variable to display the Login and Dashboard screens, flip the variable back when Logout button is clicked 
            - If variable = 1, display login screen, If variable = 2, proceed to second screen
        Show all tasks and state of completion
             - Tasks are objects that are pushed into an array and displayed using a for loop. 
             - State of completion tied to an object property that displays complete or incomplete as a separate <p> tag using appendchild


    Tasks: 
        Allow users to add new tasks - Add Task button that runs a function that creates a pop up to ask for the name of the new task, which will become the name of a new task object in an array 
            - tasks are objects inside of an array
            - properties display inside the DOM using appendchild 
            - tasks are given an extra property to identify them (array.length +1)
        Allow users to mark a task as complete - Flag variable that references completion property of object, Button flips the property from complete to incomplete and vice versa 
            - if variable = 1, task's title is marked as incomplete, if variable = 2, title is marked as complete
        Allow users to remove a task from the list - Remove Task button that uses IndexOf to find task's name, and splices it out, removing the task entirely
            - set a variable to the name of the task, use array.IndexOf(taskname) to find the spot in the array, then splice it out
        Allow users to change the text of the task - button that prompts the user to input the new name of the task 
            - Changes the property of the tasks object to the new input, if nothing is input then don't change the name
        Allow users to assign an additional property of the task
            - List of categories from an array is assigned to the user's object, which is displayed in a dropdown menu
            - Use a For loop to check which value of the array is the current selected, and display that category

    Additional Features:
         Allow users to manage options for the additional property
            - Button that asks the user to input a new value into the category array using prompt()
        Tie tasks to the user signed in
            - task property is nested into the username property
        Allow users to see only tasks that they have created
            - tasks are only displayed when the correct username property is displaying