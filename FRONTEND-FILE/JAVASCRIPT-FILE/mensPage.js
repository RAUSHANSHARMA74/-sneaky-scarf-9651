let img = document.querySelectorAll("img")
for(let image of img){
    image.addEventListener("click", ()=>{
        // console.log("hello")
        window.location.href = "../HTML-FILE/allMensClothes.html"
    })
}

let log = document.querySelector(".logo")
log.addEventListener("click", ()=>{
    window.location.href = "./index.html"
})
