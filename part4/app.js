const config = require("./utils/config")
const express = require("express")
const cors = require("cors")
const blogsController = require("./controllers/blogs")
const middleware = require("./utils/middleware")
const logger = require("./utils/logger")
const mongoose = require("mongoose")

const app = express()

logger.info("Trying to connect to MongoDB")

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB")
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use("/api/blogs", blogsController)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app