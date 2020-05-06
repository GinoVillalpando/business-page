document.addEventListener('change', function(event) {

    // variables that hold our event targets and values along with getting elements from DOM and manipulation
    let size = event.target;
    let item = event.target.value
    let textarea = document.getElementById("message")
    let text = document.createTextNode("I want to buy: " + item + " size: " + size.name + " ");

    if(size.checked) {

        // if Checkbox is checked..
        let textNode = textarea.appendChild(text).innerHTML;

    } else {

        // else the checkbox has been unchecked then reloads the location of the page
        this.location.reload(true);

    }
});