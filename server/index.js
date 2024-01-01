const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('mongoose')
const UserModel = require("./models/Users")

const app = express()
app.use(cors())
app.use(express.json())




app.use(cors({
  origin: ["https://crud-app-front-three.vercel.app",
    // "https://crud-app-front-three.vercel.app/add",
    // "https://crud-app-front-three.vercel.app/createUser",
    // "https://crud-app-front-three.vercel.app/updateUser/:id",
    // "https://crud-app-front-three.vercel.app/deleteUser/:id"
  ],
  methods: ["POST", "DELETE", "GET", "DELETE", "PUT"],
  credentials: true
}));


mongoose.connect("mongodb+srv://idamhamedsafa:88safa88@cluster0.scmgzk3.mongodb.net/CrudApp")

app.get("/", (req, res) => {
  res.send("Welcome to the CRUD app!");
});

app.get("/add", (req, res) => {
  UserModel.find({})
    .then(data => {
      res.send(data)
      console.log(data)
    })
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      enroll: req.body.enroll,
      // image: req.body.image
    }
  )
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then(user => res.json(user))
    .catch(err => res.json(err));
})



app.listen(8000, () => { console.log("server running on port 8000") })
