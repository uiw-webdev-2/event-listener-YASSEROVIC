/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

 const message = document.getElementById("formName");
 const btn = document.getElementById('myButton');

// first click to alert with name
document.getElementById("myButton").addEventListener("click", function() {
    document.body.style.backgroundColor = 'salmon';
    document.getElementById("formName").style.visibility = "hidden";
    document.getElementById("myButton").style.visibility = "hidden";
    document.querySelector("h1").style.visibility = "hidden";
    alert("you type the Name : " + message.value);
    document.getElementById("buttonEdit").style.visibility = "visible";
    return false;
});
document.getElementById("buttonEdit").addEventListener("click", function() {
    document.body.style.backgroundColor = 'bisque';
    document.getElementById("formName").style.visibility = "visible";
    document.getElementById("myButton").style.visibility = "visible";
    document.querySelector("h1").style.visibility = "visible";
    document.getElementById("buttonEdit").style.visibility = "hidden";
    return false;
});