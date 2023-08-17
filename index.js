// storin buttons to variables for use
const result = document.querySelector('#result')
const clearBtn = document.querySelector('#btn')
const numButtons = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const equal = document.querySelector('.equal')
const decimal = document.querySelector('#dot')
const decValue = decimal.value
const allButton = document.querySelectorAll('input')

allButton.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('design-btn')
    setTimeout(() => {
      button.classList.remove('design-btn')
    }, 200)
  })
})
// attaching event listener to each numbers using foreach method
numButtons.forEach(numButton => {
  let numValue = numButton.value
  numButton.addEventListener('click', () => {
    result.value += numValue
  })
})

// attachin event listener to the operators
operators.forEach(operator => {
  let opValue = operator.value
  operator.addEventListener('click', () => {
    result.value += opValue
  })
})
// attaching event listener to the equal to operand for calculation
equal.addEventListener('click', () => {
  if (result.value.length >= 1) {
    var p = result.value
    var q = eval(p)
    result.value = q
    
  }
})

decimal.addEventListener('click', () => {
  result.value += decValue
})
// attaching event listener to c button to clear field
clearBtn.addEventListener('click', () => {
  result.value = ''
})

// This function display values
const display = (value) => {
  result.value += value
}
const keyboardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '/', '*', '.']

document.addEventListener('keypress', e => {
  keyboardNum.forEach(keypress => {
    if (e.key.includes(keypress)) {
      let numValue = e.key
      result.value += numValue
      
    } else if (!e.key.includes(keypress) && e.key == '=' || e.key == 'Enter') {
      if (result.value.length >= 1) {
        var p = result.value
        var q = eval(p)
        result.value = q
      }
    } else if (e.key == 'c') {
      result.value = ''
    }
  })
})
