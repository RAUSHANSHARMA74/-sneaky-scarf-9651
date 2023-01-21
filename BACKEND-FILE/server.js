
const express = require("express")
const {connection} =  require("./configFile/connection")
const {users} = require("./routerFile/userRouter")



const cors = require("cors")
const {admin} = require("./routerFile/adminRouter")

require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/admin", admin)

app.use("/users", users)



app.listen(process.env.port, async ()=>{
    try {
        await connection
        console.log("connect to DataBase")
    } catch (error) {
        console.log("something wrong in port")
    }
    console.log(`server in running on port ${process.env.port}`)
})