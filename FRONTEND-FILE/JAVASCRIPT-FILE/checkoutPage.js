

let checkoutbtn = document.querySelector(".checkoutbtn")
checkoutbtn.addEventListener("click", ()=>{
    let token = localStorage.getItem("token")
    if(token==""){
        window.location.href = "../HTML-FILE/finalCheckout.html"
    }else{
        alert("plz login first")
    }
})

async function getcartProducts(){
    try {
        let res = await fetch("http://localhost:4500/cartProducts")
        if(res){
            let data = await res.json()
            showdata(data)
        }
    } catch (error) {
        console.log("something went wrong in get cart data")
    }
}
getcartProducts()


function showdata(data){
    // console.log(data)
    let show = document.querySelector(".showProducts")
    show.innerHTML = ""

    let total = 0

    let alldata = data.map((item)=>{
        total += Number(item.price.replace(/[$,]/g, ''))
        return `
        <div class="append">
        <img src="${item.image}" alt="">
        <div class="showDetails">
            <p>${item.title}</p>
            <p>size: <b>${item.size}</b></p>
            <p>Color : <b>${item.color}</b></p>
            <p>Value : <b>${item.price}</b></p>
            <p>Buy 1, Get 1 50% Off</p>
        </div>
        <div class="shiping">
            <p>Shipping</p>
            <p>Arrives within 5-7 Business DaysU.S. Standard</p>
            <p>Change Shipping Method at Checkout</p>
        </div>
        <div class="pickup">
            <p>Pickup</p>
            <p><a href="">Select Your Store </a> to view availability.</p>
        </div>
        
    </div>
    <div class="handle">
        <div>
            <p class="qulity">Qty: <button class="dec">-</button> <b class="q">1</b> <button class="inc" data-price="${item.price}">+</button></p>
            <p class="price">${item.price}</p>
        </div>
        <div>
            <p>Edit</p>
            <p>Remove</p>
            <p>Save for Later</p>
        </div>

    </div>
        `
    })
    // console.log(total)
    document.querySelector(".totalPrice").innerText = "$" + total
    document.querySelector(".totalP").innerText = "$" + total
    show.innerHTML = alldata.join("")
    let x = 1
    let incbtn = document.querySelectorAll(".inc")
    for(let btn of incbtn){
        btn.addEventListener("click", ()=>{
            x++
            let allq = document.querySelectorAll(".q")
            for(let q of allq){
                q.innerText = x
            }
           
            // let price = btn.dataset.price
            // console.log(price)
        })
    }
    let decbtn = document.querySelectorAll(".dec")
    for(let btn of decbtn){
        btn.addEventListener("click", ()=>{
            let qall = document.querySelectorAll(".q")
            for(let q of qall){
                if(q.innerText<=1){
                    return
                }
                x--
                q.innerText = x
            }
           
            // let price = btn.dataset.price
            // console.log(price)
        })
    }
   
}