const express =require("express");

const server = require("../Controllers/Data")

const dataRouter = express.Router()

dataRouter.route("/datahome")
.get(server.dataControllers)

module.exports = dataRouter;