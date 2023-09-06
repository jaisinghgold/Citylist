

const express = require("express")
const app = express()
const dotenv= require("dotenv")
const cors = require("cors")
dotenv.config()
const citys = require("./city")

const port = process.env.PORT || 6000;
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
app.use(cors({origin:"http://localhost:3000"}))

// app.post('/search', async(req, res)=>{
//     console.log(req.body)
// })

app.get('/search',(req, res)=>{
    try {

        let {key} = req.query
        console.log(key);
        let newcitys = citys.filter((ele)=>{
        return key ? ele.toLowerCase().startsWith(key.toLowerCase()) : ele
    })
    if(newcitys.length<=0) return res.send({status:false, message:"No city found"})
    // console.log(req.query.key)
    res.status(200).send({status:true, newcitys})
    } catch (error) {
        console.log(error.message)
    }
})


app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}`)
})