import "reflect-metadata";
import express, { response, Router } from 'express';
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
    return response.json({message: "Hello World PORRA!"});
})

app.post("/", (request, response) => {
    return response.json({message: "CARALHO"});
})

app.listen(3333, () => console.log("Server is running!"));

//teste