const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const {read_file, write_file} = require("./fs/api")
const uuid = require("uuid")

dotenv.config()
const PORT = process.env.PORT || 4000

const server = express()

//////////////////////////////// GET ////////////////////////////////

server.get("/register", (req, res) => {
  const register = read_file("register.json")
  res.status(200).json(register)
})

/////////////////////////////// POST ////////////////////////////////

server.post("/register_post", (req, res) => {
  const register = read_file("register.json")

  register.push({
    // id: uuid.v4(),
    ...req.body,
  })

  write_file("register.json", register)

  res.status(200).send({
    msg: "Registration"
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})