document.addEventListener('change', function(event) {
    let size = event.target;
    let item = event.target.value
    let textarea = document.getElementById("message")
    let text = document.createTextNode("I want to buy: " + item + " size: " + size.name + " ");

    if(size.checked) {
        // Checkbox is checked..
        let textNode = textarea.appendChild(text).innerHTML;

    } else {
        // if the checkbox has been unchecked then replaces the textarea value with no value
        this.location.reload(true);

    }
});