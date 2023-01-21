let add = document.querySelector(".add")
let total = document.querySelector(".totalProduct")
let show = document.querySelector(".appenddiv")


//---ALL PRODUCTS
let all = document.querySelector(".allProducts")
all.addEventListener("click", async () => {
    
    add.innerHTML = ""
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
   
    let data = allProductsData.map((item) => {
        return `
        <div class="allProductsShow">
        <img src="${item.image}" alt="">
        <div class="allProductsDetails">
            <span>TITLE :- <input type="text" name="" id="title" placeholder="title" value="${item.title}" required readonly></span>
            <span>CATEGORY :-  <input type="text" name="" id="category" placeholder="category" value="${item.category}" required readonly></span>
            <span>DESCRIPTION :-  <input type="text" name="" id="description" placeholder="description" value="${item.description}" required readonly></span>
            <span>DISCOUNT :- <input type="text" name="" id="discount" placeholder="discount" value="${item.discount}" required readonly></span>
            <span>BRAND :- <input type="text" name="" id="brand" placeholder="brand" value="${item.brand}" required readonly></span>
            <span>IMAGE-1 :-  <input type="text" name="" id="image1" placeholder="image1" value="${item.image[0]}" required readonly></span>
            <span>IMAGE-2 :- <input type="text" name="" id="image2" placeholder="image2" value="${item.image[1]}" required readonly></span>
            <span>IMAGE-3 :- <input type="text" name="" id="image3" placeholder="image3" value="${item.image[2]}" required readonly></span>
            <span>IMAGE-4 :-  <input type="text" name="" id="image4" placeholder="image4" value="${item.image[3]}" required readonly></span>
            <span>STOCK :-  <input type="text" name="" id="stock" placeholder="stock" value="${item.stock}" required readonly></span>
            <span>PRICE :- <input type="text" name="" id="price" placeholder="price" value="${item.price}" required readonly></span>
            <span>RATING :- <input type="text" name="" id="rating" placeholder="rating" value="${item.rating}" required readonly></span>
            <span>SIZE :-  <input type="text" name="" id="size" placeholder="size" value="${item.size}" required readonly></span>
            <span>COLOR :-  <input type="text" name="" id="color" placeholder="color" value="${item.color}" required readonly></span>              
        </div>
    </div>
        `
    })
    show.innerHTML = data.join("")
  
}


//=========================================================================================

//-----MENS PRODUCTS
let mens = document.querySelector(".mensProducts")
mens.addEventListener("click", async () => {
    
    total.innerText = ""
    add.innerHTML = ""
    add.innerHTML = `
        <div class="mens">
            <form action="" class="addProducts">
                <input type="text" name="" id="title" placeholder="title" required>
                <input type="text" name="" id="category" placeholder="category" required>
                <input type="text" name="" id="description" placeholder="description" required>
                <input type="text" name="" id="discount" placeholder="discount" required>
                <input type="text" name="" id="brand" placeholder="brand" required>
                <input type="text" name="" id="image1" placeholder="image1" required>
                <input type="text" name="" id="image2" placeholder="image2" required>
                <input type="text" name="" id="image3" placeholder="image3" required>
                <input type="text" name="" id="image4" placeholder="image4" required>
                <input type="text" name="" id="stock" placeholder="stock" required>
                <input type="text" name="" id="price" placeholder="price" required>
                <input type="text" name="" id="rating" placeholder="rating" required>
                <input type="text" name="" id="size" placeholder="size" required>
                <input type="text" name="" id="color" placeholder="color" required>
                <input type="submit">
            </form>
        </div>
    `
   
    try {
        const res = await fetch("http://localhost:4500/admin/mensProducts")
        if (res) {
            let menData = await res.json()
            // console.log(mensData)
            total.innerText = "TOTAL PRODUCT" + "~~>" + menData.length

            showMenData(menData)

           
        }
    } catch (error) {
        console.log("something went wrong in get men data")
    }

    //===========
    let form = document.querySelector(".mens>form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(image1, image2, image3, image4)
        let obj = {
            category : form.category.value,
            title: form.title.value,
            description : form.description.value,
            brand: form.brand.value,
            image: [form.image1.value, form.image2.value, form.image3.value, form.image4.value],
            discount : form.discount.value,
            price: form.price.value,
            rating: form.rating.value,
            size: form.size.value,
            color: form.color.value,
            stock : form.stock.value
        }
        addmensData(obj)
        // console.log(obj)
    })
})

function showMenData(menData){

    let data = menData.map((item) => {
        return `
        <div class="show">
        <img src="${item.image}" alt="">
        <div class="change">
            <div class="input">
                <input type="text" name="" id="title" placeholder="title" value="${item.title}" required>
                <input type="text" name="" id="category" placeholder="category" value="${item.category}" required>
                <input type="text" name="" id="description" placeholder="description" value="${item.description}" required>
                <input type="text" name="" id="discount" placeholder="discount" value="${item.discount}" required>
                <input type="text" name="" id="brand" placeholder="brand" value="${item.brand}" required>
                <input type="text" name="" id="image1" placeholder="image1" value="${item.image[0]}" required>
                <input type="text" name="" id="image2" placeholder="image2" value="${item.image[1]}" required>
                <input type="text" name="" id="image3" placeholder="image3" value="${item.image[2]}" required>
                <input type="text" name="" id="image4" placeholder="image4" value="${item.image[3]}" required>
                <input type="text" name="" id="stock" placeholder="stock" value="${item.stock}" required>
                <input type="text" name="" id="price" placeholder="price" value="${item.price}" required>
                <input type="text" name="" id="rating" placeholder="rating" value="${item.rating}" required>
                <input type="text" name="" id="size" placeholder="size" value="${item.size}" required>
                <input type="text" name="" id="color" placeholder="color" value="${item.color}" required>
            </div>
            <div class="btn">
                <button class="update" data-id="${item._id}">UPDATE</button>
                <button class="delete" data-id="${item._id}">DELETE</button>
            </div>
        </div>
    </div>
        `
    })

    // console.log(data.join(""))
    show.innerHTML = data.join("")



    //=========DELETE MEN PRODUCT====>
    let deletebtn = document.querySelectorAll(".delete")
    for(let btn of deletebtn){
        btn.addEventListener("click", ()=>{
            let id = btn.dataset.id
            deleteManProduct(id)
        })
    }


    //===========UPDATE MEN PRODUCTS ============
    let updatebtn = document.querySelectorAll(".update")
    for(let update of updatebtn){
        update.addEventListener("click", ()=>{
            let id = update.dataset.id
            
            console.log(event)
        })
    }

}
//======ADD MEN PRODUCTS=====>
async function addmensData(obj) {
    try {
        const res = await fetch("http://localhost:4500/admin/addMen", {
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
        console.log("something went wrong in add men data")
    }
}


//=======DELETE MEN PRODUCT
async function deleteManProduct(id) {
    try {
        const res = await fetch(`http://localhost:4500/admin/menDelete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res) {
            let { msg } = await res.json()
            alert(msg)
            setTimeout(() => {
                window.location.href = "adminPage.html"
            }, 1000);
        }
    } catch (error) {
        console.log("something went wrong in delete men data")
    }
}

//============================================================================================

//WOMENS PRODUCTS
let womens = document.querySelector(".womensProducts")
womens.addEventListener("click", async () => {
    total.innerText = ""

    let add = document.querySelector(".add")
    add.innerHTML = ""
    add.innerHTML = `
        <div class="women">
            <form action="" class="addProducts">
                <input type="text" name="" id="title" placeholder="title" required>
                <input type="text" name="" id="category" placeholder="category" required>
                <input type="text" name="" id="description" placeholder="description" required>
                <input type="text" name="" id="discount" placeholder="discount" required>
                <input type="text" name="" id="brand" placeholder="brand" required>
                <input type="text" name="" id="image1" placeholder="image1" required>
                <input type="text" name="" id="image2" placeholder="image2" required>
                <input type="text" name="" id="image3" placeholder="image3" required>
                <input type="text" name="" id="image4" placeholder="image4" required>
                <input type="text" name="" id="stock" placeholder="stock" required>
                <input type="text" name="" id="price" placeholder="price" required>
                <input type="text" name="" id="rating" placeholder="rating" required>
                <input type="text" name="" id="size" placeholder="size" required>
                <input type="text" name="" id="color" placeholder="color" required>
                <input type="submit">
            </form>
        </div>
    `
   
    try {
        const res = await fetch("http://localhost:4500/admin/womensProducts")
        if (res) {
            let womensData = await res.json()
            total.innerText = "TOTAL PRODUCT" + "~~>" + womensData.length

            showWomenProducts(womensData)
           

        }
    } catch (error) {
        console.log("something went wrong in get mens data")
    }

    let form = document.querySelector(".women>form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let obj = {
            category : form.category.value,
            title: form.title.value,
            description : form.description.value,
            brand: form.brand.value,
            image: [form.image1.value,form.image2.value,form.image3.value,form.image4.value],
            discount : form.discount.value,
            price: form.price.value,
            rating: form.rating.value,
            size: form.size.value,
            color: form.color.value,
            stock : form.stock.value,
        }
        addwomensProducts(obj)
    })
})

//==========ADD WOMEN PRODUCTS========>
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

//=======SHOW WOMEN PRODUCT========>
function  showWomenProducts(womensData){
    let data = womensData.map((item) => {
        return `
        <div class="show">
        <img src="${item.image}" alt="">
        <div class="change">
            <div class="input">
                <input type="text" name="" id="title" placeholder="title" value="${item.title}" required>
                <input type="text" name="" id="category" placeholder="category" value="${item.category}" required>
                <input type="text" name="" id="description" placeholder="description" value="${item.description}" required>
                <input type="text" name="" id="discount" placeholder="discount" value="${item.discount}" required>
                <input type="text" name="" id="brand" placeholder="brand" value="${item.brand}" required>
                <input type="text" name="" id="image1" placeholder="image1" value="${item.image[0]}" required>
                <input type="text" name="" id="image2" placeholder="image2" value="${item.image[1]}" required>
                <input type="text" name="" id="image3" placeholder="image3" value="${item.image[2]}" required>
                <input type="text" name="" id="image4" placeholder="image4" value="${item.image[3]}" required>
                <input type="text" name="" id="stock" placeholder="stock" value="${item.stock}" required>
                <input type="text" name="" id="price" placeholder="price" value="${item.price}" required>
                <input type="text" name="" id="rating" placeholder="rating" value="${item.rating}" required>
                <input type="text" name="" id="size" placeholder="size" value="${item.size}" required>
                <input type="text" name="" id="color" placeholder="color" value="${item.color}" required>
            </div>
            <div class="btn">
                <button class="update" data-id="${item._id}">UPDATE</button>
                <button class="delete" data-id="${item._id}">DELETE</button>
            </div>
        </div>
    </div>
        `
    })
    show.innerHTML = data.join("")


    //==============DELETE WOMEN PRODUCTS========>
    let deletebtn = document.querySelectorAll(".delete")
    for(let btn of deletebtn){
        btn.addEventListener("click", ()=>{
            let id = btn.dataset.id
            deletewOMENProduct(id)
        })
    }

    //============UPDATE BUTTON===============>
    let updatebtn = document.querySelectorAll(".update")
    for(let update of updatebtn){
        update.addEventListener("click", ()=>{
            let id = btn.dataset.id
            let title = event.path[2].children[0].children[0]
            let description = event.path[2].children[0].children[1]
            let story = event.path[2].children[0].children[2]
            let author = event.path[2].children[0].children[3]
        //   console.log(first, second, third , forth)
            // console.log(event.target.innerText)
            if(event.target.innerText=="UPDATE"){
                event.target.innerText = "SAVE"
                title.removeAttribute("readonly");
                description.removeAttribute("readonly");
                story.removeAttribute("readonly");
                author.removeAttribute("readonly");
                title.focus();description.focus();story.focus();author.focus();
            }else{
                event.target.innerText = "UPDATE"
                title.readOnly = true; description.readOnly = true;
                story.readOnly = true; author.readOnly = true;
                let obj = {title, description, story, author}
                // console.log(obj)
                editUpdate(id, obj)
            }
        })
    }


}




//=======DELETE MEN PRODUCT
async function deletewOMENProduct(id) {
    try {
        const res = await fetch(`http://localhost:4500/admin/womenDelete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res) {
            let { msg } = await res.json()
            alert(msg)
            setTimeout(() => {
                window.location.href = "adminPage.html"
            }, 1000);
            
        }
    } catch (error) {
        console.log("something went wrong in delete women data")
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