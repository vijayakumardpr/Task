const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")
const invoice = document.getElementById("invoice-genarator")
const invoiceTotal = document.getElementById("invoice-total")
const reset = document.getElementById("invoice-footer")
const template = document.querySelector(".workshop-template")

let sum = 0

const serviceItems = [
  { service: "Wash Car", cost: 10 },
  { service: "Mow Lawn", cost: 20 },
  { service: "Pull Weeds", cost: 30 },
]

washCar.addEventListener("click", () => {
  const templateClone = template.content.cloneNode(true)
  const service = templateClone.querySelector(".services")
  service.textContent = `${serviceItems[0].service}`
  const cost = templateClone.querySelector(".service-cost")
  cost.textContent = `$${serviceItems[0].cost}`
  washCar.disabled = true
  // invoice.innerHTML += `
  // <div class="dummy">
  // <div> ${serviceItems[0].service} <span class="remove">remove<span></div>
  //  <div> $${serviceItems[0].cost} </div>
  // </div>
  //   `
  // washCar.disabled = true
  sum = sum + serviceItems[0].cost
  invoiceTotal.textContent = `$${sum}`
  const list = templateClone.querySelector(".service-list")
  const remove = templateClone.querySelector(".remove")
  remove.addEventListener("click", () => {
    invoice.removeChild(list)
    // list.remove()
    sum = sum - serviceItems[0].cost
    invoiceTotal.textContent = `$${sum}`
    washCar.disabled = false
  })
  // document.querySelector(".remove").addEventListener("click", () => {
  //   const dummy = document.querySelector(".dummy")
  //   console.log(dummy)
  //   dummy.remove()
  //   sum = sum - serviceItems[0].cost
  //   invoiceTotal.textContent = `$${sum}`
  //   washCar.disabled = false
  // })
  invoice.appendChild(templateClone)
})

mowLawn.addEventListener("click", () => {
  const templateClone = template.content.cloneNode(true)
  const service = templateClone.querySelector(".services")
  service.textContent = serviceItems[1].service
  const cost = templateClone.querySelector(".service-cost")
  cost.textContent = `$${serviceItems[1].cost}`

  mowLawn.disabled = true
  //   invoice.innerHTML += `
  //   <div class='dummy'>
  //   <div> ${serviceItems[1].service} <span class="remove1">remove<span></div>
  //   <div> $${serviceItems[1].cost} </div>
  //   </div>
  //    `
  //   mowLawn.disabled = true
  sum = sum + serviceItems[1].cost
  invoiceTotal.textContent = `$${sum}`
  const list = templateClone.querySelector(".service-list")
  const remove = templateClone.querySelector(".remove")
  remove.addEventListener("click", () => {
    invoice.removeChild(list)
    // list.remove()
    sum = sum - serviceItems[1].cost
    invoiceTotal.textContent = `$${sum}`
    mowLawn.disabled = false
  })
  //   document.querySelector(".remove1").addEventListener("click", () => {
  //     console.log("clicked")
  //     const dummy1 = document.querySelector(".dummy")
  //     dummy1.remove()
  //     sum = sum - serviceItems[1].cost
  //     invoiceTotal.textContent = `$${sum}`
  //     washCar.disabled = false
  //   })
  invoice.appendChild(templateClone)
})

pullWeeds.addEventListener("click", () => {
  const templateClone = template.content.cloneNode(true)
  const service = templateClone.querySelector(".services")
  service.textContent = serviceItems[2].service
  const cost = templateClone.querySelector(".service-cost")
  cost.textContent = `$${serviceItems[2].cost}`
  pullWeeds.disabled = true
  // invoice.innerHTML += `
  // <div class='dummy'>
  // <div> ${serviceItems[2].service} <span class="remove2">remove<span></div>
  // <div> $${serviceItems[2].cost} </div>
  // </div>
  // `
  // pullWeeds.disabled = true
  sum = sum + serviceItems[2].cost
  invoiceTotal.textContent = `$${sum}`
  const list = templateClone.querySelector(".service-list")
  const remove = templateClone.querySelector(".remove")
  remove.addEventListener("click", () => {
    invoice.removeChild(list)
    // list.remove()
    sum = sum - serviceItems[2].cost
    invoiceTotal.textContent = `$${sum}`
    pullWeeds.disabled = false
  })
  // document.querySelector(".remove2").addEventListener("click", () => {
  //   const dummy2 = document.querySelector(".dummy")
  //   dummy2.remove()
  //   sum = sum - serviceItems[2].cost
  //   invoiceTotal.textContent = `$${sum}`
  //   washCar.disabled = false
  // })
  invoice.appendChild(templateClone)
})

reset.addEventListener("click", () => {
  location.reload()
})
