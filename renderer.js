const zerorpc = require("zerorpc")
let client = new zerorpc.Client()

client.connect("tcp://127.0.0.1:4242")

client.invoke("echo", "server ready", (error, res) => {
  if(error || res !== 'server ready') {
    console.error(error)
  } else {
    console.log("server is ready")
  }
})
    
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let result = document.querySelector('#res')
let sum = document.querySelector('#btnEd')

sum.addEventListener('click', () => {
  client.invoke("calc", num1.value + "+" + num2.value, (error, res) => {
    if(error) {
      console.error(error)
    } else {
      result.value = res
    }
  })
})

sum.dispatchEvent(new Event('button'))

// let formula = document.querySelector('#formula')
// let result = document.querySelector('#result')

// formula.addEventListener('input', () => {
//   client.invoke("calc", formula.value, (error, res) => {
//     if(error) {
//       console.error(error)
//     } else {
//       result.textContent = res
//     }
//   })
// })

// formula.dispatchEvent(new Event('input'))