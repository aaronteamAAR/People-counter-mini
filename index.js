let count = 0
let countEL = document.getElementById("count-el")
let saveEL  = document.getElementById("save-el")


function increment() {
    count += 1

countEL.innerText = count

}
function save() {
  console.log(count);


  let showcase = count + "  -  "

  saveEL.textContent += showcase
}
