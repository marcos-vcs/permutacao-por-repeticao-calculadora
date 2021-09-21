var reportedValue = document.getElementById('reportedValue')
var confirmButton = document.getElementById('submit')

confirmButton.disabled = true

function calculate() {

}

function enableConfirmButton() {
  if (confirmButton.value.length > 1) confirmButton.disabled = false
  else confirmButton.disabled = true
}

$(document).ready(function () {
  console.log('ready boys')
  reportedValue.addEventListener('keyup', enableConfirmButton)
  confirmButton.addEventListener('click', calculate)
})