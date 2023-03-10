

let url = "https://fashion-style-backend.onrender.com"
async function getMenProducts() {
    try {
        let res = await fetch(`${url}/admin/womensProducts`)
        if (res) {
            let allProducts = await res.json()
            showData(allProducts)
            sortMethod(allProducts)
        }
    } catch (error) {

    }
}
getMenProducts()

function sortMethod(data) {
    console.log(typeof Number(data[0].price.replace(/[$,]/g, '')))
    let select = document.querySelector("#select")
    select.addEventListener("change", () => {
        if(select.value=="lth"){
            data.sort((a, b)=>{return Number(a.price.replace(/[$,]/g, ''))-Number(b.price.replace(/[$,]/g, '')) })
        }else if(select.value == "all"){
            showData(data)
        }
        else{
            data.sort((a, b)=>{return Number(b.price.replace(/[$,]/g, ''))-Number(a.price.replace(/[$,]/g, '')) })
        }
       showData(data)
       
    })
}



// show all data
function showData(allProducts) {
    let show = document.querySelector(".allclothes")
    let data = allProducts.map((item) => {
        return `
        <div>
            <img src="${item.image}" alt="">
            <p>Online Only</p>
            <p>${item.title}</p>
            <p>${item.price}</p>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>${item.rating}</span>
                <span>(${item.stock})</span>
            </div>
        </div>
        `
    })
    // console.log(data.join(""))
    show.innerHTML = data.join("")
}



let log = document.querySelector(".logo")
log.addEventListener("click", ()=>{
    window.location.href = "../index.html"
})