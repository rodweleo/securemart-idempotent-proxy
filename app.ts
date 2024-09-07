import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { fetchAllProducts } from "./functions/fetchAllProducts";
import { fetchCategoryProducts } from "./functions/fetchCategoryProducts";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*"
}))

app.get("/proxy", (req, res) => {

    res.send("Server is getting requests");
})

app.get("/proxy/products", async (req, res) => {
    try{
        const response = await fetchAllProducts();
        res.send(response);
    }catch(e){
        res.send([])
    }
})

app.get("/proxy/products/category/:id", async (req, res) => {

    const {id} = req.params;

    if(!id){
        res.send([]);
    }

    try{
        const response = await fetchCategoryProducts(id);
        res.send(response);
    }catch(e){
        res.send([])
    }
    
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`[server]: server is listening in port ${PORT}`);
})