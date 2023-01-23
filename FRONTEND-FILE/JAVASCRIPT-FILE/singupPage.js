
let register = document.querySelector(".clear")
let btntext = document.querySelector(".singin")
let pText = document.querySelector(".registerbtn>p")


let singup = document.querySelector(".singin")
singup.addEventListener("click", () => {

    register.innerHTML = ""
    if (btntext.innerText == "SING IN") {
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
        login.addEventListener("click", () => {
            let obj = {
                email: email.value,
                password: password.value,
            }
            if(obj.email=="admin@gmail.com" && obj.password=="admin"){
                window.location.href = "../HTML-FILE/adminPage.html"
            }else{
                matchEmail(obj)
            }
        })

    } else if (btntext.innerText == "SING UP") {
        btntext.innerText = "SING IN"
        pText.innerText = "Sign up with email"
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
            <option value="United States">United States</option>
            <option value="APO">APO</option>
            <option value="DPO">DPO</option>
            <option value="FPO">FPO</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Barbados">Barbados</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Brazil">Brazil</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="cyprus">cyprus</option>
            <option value="Denmark">Denmark</option>
            <option value="EI Salvador">EI Salvador</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Mexico">Mexico</option>
            <option value="Monao">Monao</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Norway">Norway</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Singapore">Singapore</option>
            <option value="South Korea">South Korea</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Thailand">Thailand</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="United Kingdom">United Kingdom</option>
            </select>
        </div>
    </div>

    <button class="create" >CREATE ACCOUNT</button>
    <p>By creating, you agree to
        <a href="">Express Insider Terms & conditions</a><br>
        <a href="">Privacy Policy</a> and
        <a href="">Terms & Conditions</a>
    </p>
        `

        let registerbtn = document.querySelector(".create")
        registerbtn.addEventListener("click", () => {
            let email = document.querySelector("#email")
            let firstname = document.querySelector("#firstname")
            let lastname = document.querySelector("#lastname")
            let password = document.querySelector("#password")
            let select = document.querySelector("#select")

            let obj = {
                email: email.value,
                name: firstname.value + " " + lastname.value,
                password: password.value
            }
            // console.log(obj)
            regiseruser(obj)
        })
    }
})

let email = document.querySelector("#email")
let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let password = document.querySelector("#password")
let select = document.querySelector("#select")

let createAccount = document.querySelector(".create")
createAccount.addEventListener("click", () => {
    let obj = {
        email: email.value,
        name: firstname.value + " " + lastname.value,
        password: password.value,
        country: select.value
    }
    // console.log(obj)
    regiseruser(obj)

})
//register user
let regiseruser = async (obj) => {
    try {
        let res = await fetch("http://localhost:4500/users/register", {
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
        console.log("something went wrong in login data")
    }
}



// login user
let matchEmail = async (obj) => {
    try {
        let res = await fetch("http://localhost:4500/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res) {
            let { msg } = await res.json()
            alert(msg)
            if(msg=="login succesfull"){
                window.location.href = "../index.html"
            }
        }
    } catch (error) {
        console.log("something went wrong in login data")
    }
}







let log = document.querySelector(".logo")
log.addEventListener("click", ()=>{
    window.location.href = "./index.html"
})
