// this is the container for the list of items
const groceries = document.getElementById("list")
// this is the box that takes the input
const inputBox = document.getElementById("inputBox")
//this is the add to list button
const addToList = document.getElementById("addToList")
// adds event listener so that when u click 'add to list' button it calls addItem function
addToList.addEventListener("click", () => {
    addItem()
})

// function to add item to list
const addItem = () => {
    // if the input box is empty an alert tells you to write an item in
    if (inputBox.value === '') {
        console.log("empty")
        alert("Please enter an item.");
        return
        //inserts a list item into <ul></ul> tag with the users input.
    } else { groceries.innerHTML += 
        `<li class="list-group-item">
        <input
        type="checkbox"
        class="form-check-input me-1" />
        <label for="" class="form-check-label"
        >${inputBox.value}</label
        >
        <a class="float-end">Remove</a>
        </li>`
    }   
    // takes out value from the input box once submitted
    inputBox.value = ""
}