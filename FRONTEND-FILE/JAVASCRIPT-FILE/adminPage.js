

//---ALL PRODUCTS
let all = document.querySelector(".allProducts")
all.addEventListener("click", async () => {
    let add = document.querySelector(".add")
    add.innerHTML = ""

    let total = document.querySelector(".totalProduct")
    total.innerText = ""

    let show = document.querySelector(".appenddiv")
    show.innerHTML = ""
    try {
        const res = await fetch("http://localhost:4500/admin/allProducts")
        if (res) {
            let allProductsData = await res.json()
            // console.log(allProductsData)
            total.innerText = "TOTAL PRODUCT" + "~~>" + allProductsData.length
            showAllProductsData(allProductsData)
        }
    } catch (error) {
        console.log("something went wrong in all products")
    }
})


function showAllProductsData(allProductsData){
    console.log("hello")
    let show = document.querySelector(".appenddiv")
    let data = allProductsData.map((item) => {
        return `
         <div class="show">
            <img src="${item.image}" alt="">
            <div class="change">
                <input type="text" name="" id="" value="${item.title}" readonly>
                <input type="text" name="" id="" value="${item.brand}" readonly>
                <input type="text" name="" id="" value="${item.size}" readonly>
                <input type="text" name="" id="" value="${item.color}" readonly>
                <input type="text" name="" id="" value="${item.rating}" readonly>
                <input type="text" name="" id="" value="${item.price}" readonly>
               
            </div>
        </div>
        `
    //     <div class="btn">
    //     <button class="update" data-id="${item._id}" >UPDATE</button>
    //     <button class="delete" data-id="${item._id}" >DELETE</button>
    // </div>
    })
    show.innerHTML = data.join("")
    let deleteBtn = document.querySelectorAll(".delete")
    for(let btn of deleteBtn){
        btn.addEventListener("click", ()=>{
            let id = btn.dataset.id
            console.log(id)
            deleteId(id)
        })
    }
}

async function deleteId(id){
    try {
        let res = await fetch(`http://localhost:4500/admin/allProductsDelete/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        if(res){
            let {msg} = await res.json()
            alert(msg)
        }
    } catch (error) {
        console.log("something went wrong in delete products")
    }
}


//=========================================================================================

//-----MENS PRODUCTS
let mens = document.querySelector(".mensProducts")
mens.addEventListener("click", async () => {
    let total = document.querySelector(".totalProduct")
    total.innerText = ""
    let add = document.querySelector(".add")
    add.innerHTML = ""
    add.innerHTML = `
        <div class="mens">
            <form action="" class="addmensProducts">
                <input type="text" name="" id="title" placeholder="title" required>
                <input type="text" name="" id="brand" placeholder="brand" required>
                <input type="text" name="" id="image" placeholder="image" required>
                <input type="text" name="" id="price" placeholder="price" required>
                <input type="text" name="" id="rating" placeholder="rating" required>
                <input type="text" name="" id="size" placeholder="size" required>
                <input type="text" name="" id="color" placeholder="color" required>
                <input type="submit">
            </form>
        </div>
    `
    let show = document.querySelector(".appenddiv")
    try {
        const res = await fetch("http://localhost:4500/admin/mensProducts")
        if (res) {
            let mensData = await res.json()
            // console.log(mensData)
            total.innerText = "TOTAL PRODUCT" + "~~>" + mensData.length
            let data = mensData.map((item) => {
                return `
                 <div class="show">
                    <img src="${item.image}" alt="">
                    <div class="change">
                        <input type="text" name="" id="" value="${item.title}" readonly>
                        <input type="text" name="" id="" value="${item.brand}" readonly>
                        <input type="text" name="" id="" value="${item.size}" readonly>
                        <input type="text" name="" id="" value="${item.color}" readonly>
                        <input type="text" name="" id="" value="${item.rating}" readonly>
                        <input type="text" name="" id="" value="${item.price}" readonly>
                        <div class="btn">
                            <button class="update">UPDATE</button>
                            <button class="delete">DELETE</button>
                        </div>
                    </div>
                </div>
                `
            })

            console.log(data.join(""))
            show.innerHTML = data.join("")
        }
    } catch (error) {
        console.log("something went wrong in get mens data")
    }

    //===========
    let form = document.querySelector(".mens>form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let obj = {
            title: form.title.value,
            brand: form.brand.value,
            image: form.image.value,
            price: form.price.value,
            rating: form.rating.value,
            size: form.size.value,
            color: form.color.value
        }
        addmensData(obj)
    })
})


async function addmensData(obj) {
    try {
        const res = await fetch("http://localhost:4500/admin/addMens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res) {
            let { msg } = await res.json()
            alert(msg)
        }
    } catch (error) {
        console.log("something went wrong in add mens data")
    }
}

//============================================================================================



//WOMENS PRODUCTS
let womens = document.querySelector(".womensProducts")
womens.addEventListener("click", async () => {
    let total = document.querySelector(".totalProduct")
    total.innerText = ""

    let add = document.querySelector(".add")
    add.innerHTML = ""
    add.innerHTML = `
        <div class="womens">
            <form action="" class="addwomensProducts">
                <input type="text" name="" id="title" placeholder="title" required>
                <input type="text" name="" id="brand" placeholder="brand" required>
                <input type="text" name="" id="image" placeholder="image" required>
                <input type="text" name="" id="price" placeholder="price" required>
                <input type="text" name="" id="rating" placeholder="rating" required>
                <input type="text" name="" id="size" placeholder="size" required>
                <input type="text" name="" id="color" placeholder="color" required>
                <input type="submit">
            </form>
        </div>
    `
    let show = document.querySelector(".appenddiv")
    try {
        const res = await fetch("http://localhost:4500/admin/womensProducts")
        if (res) {
            let womensData = await res.json()
            total.innerText = "TOTAL PRODUCT" + "~~>" + womensData.length
            let data = womensData.map((item) => {
                return `
                 <div class="show">
                    <img src="${item.image}" alt="">
                    <div class="change">
                        <input type="text" name="" id="" value="${item.title}" readonly>
                        <input type="text" name="" id="" value="${item.brand}" readonly>
                        <input type="text" name="" id="" value="${item.size}" readonly>
                        <input type="text" name="" id="" value="${item.color}" readonly>
                        <input type="text" name="" id="" value="${item.rating}" readonly>
                        <input type="text" name="" id="" value="${item.price}" readonly>
                        <div class="btn">
                            <button class="update">UPDATE</button>
                            <button class="delete">DELETE</button>
                        </div>
                    </div>
                </div>
                `
            })
            show.innerHTML = data.join("")

        }
    } catch (error) {
        console.log("something went wrong in get mens data")
    }

    let form = document.querySelector(".womens>form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let obj = {
            title: form.title.value,
            brand: form.brand.value,
            image: form.image.value,
            price: form.price.value,
            rating: form.rating.value,
            size: form.size.value,
            color: form.color.value
        }
        addwomensProducts(obj)
    })
})


async function addwomensProducts(obj) {
    try {
        const res = await fetch("http://localhost:4500/admin/addWomen", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res) {
            let { msg } = await res.json()
            alert(msg)
        }
    } catch (error) {
        console.log("something went wrong in add mens data")
    }
}



//========================================================================================










//CHECKOUT PRODUCTS
let checkout = document.querySelector(".checkoutProducts")
checkout.addEventListener("click", () => {
    let show = document.querySelector(".appenddiv")
    show.innerHTML = ""
    console.log("hello")
})


//ALL USERS
let users = document.querySelector(".allUsers")
users.addEventListener("click", () => {
    let show = document.querySelector(".appenddiv")
    show.innerHTML = ""
    console.log("hello")
})