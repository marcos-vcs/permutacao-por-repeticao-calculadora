let reportedValue = document.getElementById('reportedValue')
let divResult = document.getElementById('divResult')
let textValues = document.getElementById('textValues')
let resultNumeric = document.getElementById('resultNumeric')
let result = document.getElementById('divResult')
let alert = document.getElementById('alert')

setHidden(divResult, alert)


let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string"
  } else if (string.length < 2) {
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    if (string.indexOf(char) != i)
      continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation)
    }
  }
  return permutationsArray
}

function setVisible(...elements) {
  for (const element of elements) {
    if (element.length && element.length > 0)
      for (let i = 0; i < element.length; i++) { setVisible(element[i]) }
    else element.style.display = ''
  }
}

function setHidden(...elements) {
  for (const element of elements) {
    if (element.length && element.length > 0)
      for (let i = 0; i < element.length; i++) { setHidden(element[i]) }
    else element.style.display = 'none'
  }
}

function verifyValue() {
  if (reportedValue.value.length > 1) {
    setVisible(divResult)
    setHidden(alert)

    var permutationsArray = findPermutations(reportedValue.value)
    textValues.value = permutationsArray
    resultNumeric.innerText = `É possível obter ${permutationsArray.length} possibilidades.`

  } else if (reportedValue.value.length === 0) {
    setHidden(divResult)
    setHidden(alert)
  } else {
    setHidden(divResult)
    setVisible(alert)
  }
}

$(document).ready(function () {
  console.log('ready boys')
  reportedValue.addEventListener('keyup', verifyValue)
})