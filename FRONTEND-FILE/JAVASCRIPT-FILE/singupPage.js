
let register = document.querySelector(".clear")
let btntext = document.querySelector(".singin")
let pText = document.querySelector(".registerbtn>p")
let email = document.querySelector("#email")
let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let password = document.querySelector("#password")
let select =  document.querySelector("#select")

let singup = document.querySelector(".singin")
singup.addEventListener("click", ()=>{
    
    register.innerHTML = ""
    if(btntext.innerText=="SING IN"){
        btntext.innerText = "SING UP"
        pText.innerText = "FASHION INSIDER"
        register.innerHTML = `
        <p>A world of rewards and access.</p>
        <div class="logindiv">
            <p>Email Address</p>
            <input type="email" name="" id="email">
            <p>Password</p>
            <input type="password" name="" id="password">
            </div>
        <button class="login">SING IN</button>
        <a href="">Forgot Password</a>
        <div class="member">
        <p>Not a member ?</p>
        <a href="">Join For Free</a>
        </div>
        `
        let email = document.querySelector("#email")
        let password = document.querySelector("#password")
      
        let login = document.querySelector(".login")
        login.addEventListener("click", ()=>{
            let obj = {
                email : email.value,
                password : password.value,
            }
            matchEmail(obj)
        })

    }else if(btntext.innerText == "SING UP"){
        btntext.innerText = "SING IN"
        pText.innerText  = "Sign up with email"
        register.innerHTML = `
        <div class="email">
        <p>Email Address</p>
        <input type="email" name="" id="email">
    </div>
    <div class="name">
        <div class="first">
            <p>First Name</p>
            <input type="text" name="" id="firstname">
        </div>
        <div class="last">
            <p>Last Name</p>
            <input type="text" name="" id="lastname">
        </div>
    </div>


    <div class="pass">

        <div class="password">
            <p>Password</p>
            <input type="password" name="" id="password">
        </div>
        <div>
            <p>Country</p>
            <select name="" id="">
                <option value="">United States</option>
                <option value="">APO</option>
                <option value="">DPO</option>
                <option value="">FPO</option>
                <option value="">Australia</option>
                <option value="">Austria</option>
                <option value="">Barbados</option>
                <option value="">Belgium</option>
                <option value="">Belize</option>
                <option value="">Brazil</option>
                <option value="">Bulgaria</option>
                <option value="">Canada</option>
                <option value="">China</option>
                <option value="">cyprus</option>
                <option value="">Denmark</option>
                <option value="">EI Salvador</option>
                <option value="">Finland</option>
                <option value="">France</option>
                <option value="">Germany</option>
                <option value="">Greece</option>
                <option value="">Hong Kong</option>
                <option value="">Hungary</option>
                <option value="">Indonesia</option>
                <option value="">Ireland</option>
                <option value="">Israel</option>
                <option value="">Italy</option>
                <option value="">Jamaica</option>
                <option value="">Japan</option>
                <option value="">Liechtenstein</option>
                <option value="">Luxembourg</option>
                <option value="">Macau</option>
                <option value="">Mexico</option>
                <option value="">Monao</option>
                <option value="">Netherlands</option>
                <option value="">Norway</option>
                <option value="">Poland</option>
                <option value="">Portugal</option>
                <option value="">Singapore</option>
                <option value="">South Korea</option>
                <option value="">Spain</option>
                <option value="">Sweden</option>
                <option value="">Switzerland</option>
                <option value="">Taiwan</option>
                <option value="">Thailand</option>
                <option value="">Trinidad and Tobago</option>
                <option value="">United Kingdom</option>
            </select>
        </div>
    </div>

    <button class="create"  id="account">CREATE ACCOUNT</button>
    <p>By creating, you agree to
        <a href="">Express Insider Terms & conditions</a><br>
        <a href="">Privacy Policy</a> and
        <a href="">Terms & Conditions</a>
    </p>
        `
    }
})

let createAccount = document.getElementById("account")
createAccount.addEventListener("click", ()=>{
    console.log("hello")
})






