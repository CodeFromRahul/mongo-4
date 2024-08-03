import express from "express"
import admin from "./src/routes/admin.routes.js"
import bodyParser from "body-parser"
import { admin } from "./src/database/index.database.js";

const port = 3000;
const app = express();

app.use(bodyParser.json())

app.use("/admin",admin)

app.listen(port,()=>{
    console.log(`app is running on port${port}`)
})


