import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
// mongodb://localhost:27017/
// mongodb+srv://keepnotes:9919979949@cluster0.zzjoq.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect("mongodb://localhost:27017/keepnotes", {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("DB connected"))
// mongodb+srv://keepnotes:<db_password>@cluster0.zzjoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://keepnotes:9919979949@cluster0.zzjoq.mongodb.net/dabatabasetest1?retryWrites=true&w=majority", 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log("DB connected"));


const keeperSchema = mongoose.Schema({
    title: String,
    description: String
})

const Keeper = new mongoose.model("Keeper", keeperSchema)


app.get("/api/getAll", (req, res) => {
    Keeper.find({}, (err, keeperList) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).send(keeperList)
        }
    })
})

app.post("/api/addNew", (req, res) => {
    const { title, description } = req.body
    const keeperObj = new Keeper({
        title,
        description
    })
    keeperObj.save( err => {
        if(err){
            console.log(err)
        }
        Keeper.find({}, (err, keeperList) => {
            if(err){
                console.log(err)
            } else {
                res.status(200).send(keeperList)
            }
        })
    })

})

app.post("/api/delete", (req, res) => {
    const { id } = req.body
    Keeper.deleteOne({ _id: id}, () => {
        Keeper.find({}, (err, keeperList) => {
            if(err){
                console.log(err)
            } else {
                res.status(200).send(keeperList)
            }
        })
    })

})

app.listen( 3001, () => {
    console.log("Backend created at port 3001")
})