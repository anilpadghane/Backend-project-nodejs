const express =require("express");

const server = require("../Controllers/data")

const dataRouter = express.Router()

dataRouter.route("/home")
.get(server.apiControllers)

module.exports = dataRouter;