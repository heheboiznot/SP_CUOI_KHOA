var input = document.getElementById("input");
function saveInput() {
  localStorage.setItem("myInputValue", input.value);
 }
function myFunction() {
  saveInput()
  alert("successful login")
}
var savedValue = localStorage.getItem("myInputValue")
if (savedValue) {
  input.value = savedValue
}