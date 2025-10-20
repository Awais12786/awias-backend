import express from "express"
const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"

app.use(cros({
  origin:process.env.CROS_ORIGAN,
  Credential:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}