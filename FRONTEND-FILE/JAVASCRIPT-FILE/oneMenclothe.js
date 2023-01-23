let id = localStorage.getItem("id")
// console.log(id)
const matchid = async () => {
    try {
        const res = await fetch("http://localhost:4500/admin/mensProducts")
        if (res) {
            let data = await res.json()
            let match = data.filter((item) => {
                return item._id === id

            })
            matchdataShow(match)
            cartData(match)
        }
    } catch (error) {
        console.log("something went wrong in one clothe show")
    }
}
matchid()


const matchdataShow = (match) => {
    let obj = match[0]
    console.log(obj)
    let img = document.querySelector(".img")
    img.innerHTML = `
            <img src="${obj.image[0]}" alt="">
            <img src="${obj.image[1]}" alt="">
            <img src="${obj.image[2]}" alt="">
            <img src="${obj.image[3]}" alt="">
    `
    let title = document.querySelector(".title")
    title.innerText = obj.title
    document.querySelector(".rate").innerText = obj.rating
    document.querySelector(".stock").innerText = `(${obj.stock})`
    document.querySelector(".price").innerText = obj.price
    document.querySelector(".smallImg").innerHTML = `<img src="${obj.image[0]}" alt="">`
    document.querySelector(".price").innerText = obj.price
}

const cartData = (data) => {
    let cartdata = data[0]
    let cart = document.querySelector('.cartBtn')
    cart.addEventListener("click", async ()=>{
        // console.log(data)
        try {
            let res = await fetch("http://localhost:4500/cartProducts/addCart",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(cartdata)
            })
            if(res){
                let {msg} = await res.json()
                alert(msg)
            }
        } catch (error) {
            console.log("something went wrong in cart")

        }
    })
}

let log = document.querySelector(".logo")
log.addEventListener("click", ()=>{
    window.location.href = "./index.html"
})

