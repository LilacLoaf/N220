/*
    Create a variable to track the list of todo items
    Create the addItem function that:
        Gets the input from "item"
        Adds it to the list of todo items
        Updates the "list" ul tag to show all the items currently in the list
        - Each item should be shown added as a li tag in the string ("<li>" + item + "</li>" or `<li>${item}</li>`)
*/

let todoItems = [];

let ul = document.getElementById("list");
let item = document.getElementById("item");

function addItem() {
  let input = document.getElementById("item");
  let value = input.value;

  if (value) {
    todoItems.push(value);
    console.log(todoItems);
  }
  document.getElementById("list").innerHTML += "<li>" + item.value + "</li>";
}

function summarizeList() {
  const elements = document.getElementById("summary");
  const totalItems = todoItems.length;
  const firstItem = totalItems > 0 ? todoItems[0] : "";
  const lastItem = totalItems > 0 ? todoItems[totalItems - 1] : "";

  const displayLastItem = totalItems === 1 ? firstItem : lastItem;

  const summary = `
        Total Items: ${totalItems}<br />
        First Item: ${firstItem}<br />
        Last Item: ${displayLastItem}
    `;
  elements.innerHTML = summary;
}

/*    Create the summarizeList function that outputs the following to the summary p tag
    - these lines should be split with br tags ("<br />")
        "Total Items: "
        - This should show the total number of items in the list
        "First Item: "
        - This should show the first item in the list
        "Last Item: "
        - This should show the last item in the list. If the list has only 1 item then this will be the same as the first item.
        what*/
