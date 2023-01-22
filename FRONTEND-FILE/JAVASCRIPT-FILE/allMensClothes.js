let globalData = []
async function getMenProducts() {
    try {
        let res = await fetch("http://localhost:4500/admin/mensProducts")
        if (res) {
            let allProducts = await res.json()
            showData(allProducts)
            sortMethod(allProducts)
            globalData = [...allProducts]
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
///FILTER PROPERTY
function shirts(){
    let select = document.querySelector("#shirts").value
    let data = globalData.filter((item)=>{
        return item.title.toLowerCase().includes(select.toLowerCase())
    })
    console.log(data)
    showData(data)
}


function length(){
    let select = document.querySelector("#length").value
    let data = globalData.filter((item)=>{
        return item.title.toLowerCase().includes(select.toLowerCase())
    })
    showData(data)
}

function fit(){
    let select = document.querySelector("#fit").value
    let data = globalData.filter((item)=>{
        return item.title.toLowerCase().includes(select.toLowerCase())
    })
    showData(data)
}
function type(){
    let select = document.querySelector("#type").value
    let data = globalData.filter((item)=>{
        return item.title.toLowerCase().includes(select.toLowerCase())
    })
    showData(data)
}
function price(){
    let select = document.querySelector("#price").value
    let data = globalData.filter((item)=>{
        return  Number(select)<item.price.replace(/[$,]/g, '')
    })
    showData(data)
    // console.log(data)
}

function size(){
    let select = document.querySelector("#size").value
    let data = globalData.filter((item)=>{
        return item.size.toLowerCase().includes(select.toLowerCase())
    })
    showData(data)
    // console.log(data)
}




// show all data
function showData(allProducts) {
    let show = document.querySelector(".allclothes")
    let data = allProducts.map((item) => {
        return `
        <div>
            <img src="${item.image}" data-id="${item._id}" alt="">
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
    let selectImg = document.querySelectorAll(".allclothes img")
    for(let img of selectImg){
        img.addEventListener("click", ()=>{
            let id = img.dataset.id
            localStorage.setItem("id", id)
            setTimeout(() => {
                window.location.href = "oneMenClothe.html"
            }, 0);
        })
    }
}




