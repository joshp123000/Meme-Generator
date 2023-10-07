
    let userIn = document.getElementById("Meme")
    const addmeme = document.getElementById("memes")
    const meme = document.querySelectorAll('.rgb')
    function randomcolor(){
        const red = Math.floor(Math.random()* 256)
        const green = Math.floor(Math.random()* 256)
        const blue = Math.floor(Math.random()* 256)
        return `rgb(${red},${green},${blue})`
    }
    setInterval(function(){
        for(let rgb of meme){
            rgb.style.color = randomcolor();
            }
    }, 500)
    userIn.addEventListener("submit",function(event){
        event.preventDefault()
        const userInT = document.getElementById("top-text").value
        const userInB = document.getElementById("bottom-text").value
        const userInI = document.getElementById("image-link").value
        if(userInT === "" || userInB === "" || userInI === ""){
            return
        }
        console.log(userInI)
        console.log(userInT)
        console.log(userInB)
        //create div with correct class
        const newDiv = document.createElement("div")
        newDiv.classList.add('container')

        const newDivT = document.createElement("p")
        const newDivB = document.createElement("p")
        newDivT.classList.add("txtpositiont")
        newDivB.classList.add("txtpositionb")
        newDivT.innerText = userInT
        newDivB.innerText = userInB
        

        const newDivI = document.createElement("img")
        newDivI.src= userInI
        newDivI.classList.add('resizeimg')
        const newbutton = document.createElement("button")
        newbutton.innerText = "REMOVE"
        newbutton.classList.add("hidebutton")
        newDiv.appendChild(newDivT)
        newDiv.appendChild(newbutton)
        newDiv.appendChild(newDivB)
        newDiv.append(newDivI)
        addmeme.appendChild(newDiv)
        userIn.reset() 
        newbutton.addEventListener("click", function(e){
            e.target.parentElement.remove()
        })
})
  
