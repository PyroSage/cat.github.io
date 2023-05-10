// main.js
let count = 0;
function updateElement() {
    count++;
    var messageElement = document.getElementById("message");
    if(count > 10)
    {
        count = 0;
        messageElement.innerHTML = "You have exceeded the limit!!";
        return;
    }
    messageElement.innerHTML = "You have clicked the button " + count + " times.";
}

