import express from "express"
import SondaController from "../controllers/sondaControllers.js"

class Router {
    constructor(){
        this.router = express.Router()
        this.controller = new SondaController()
    }

    start(){
        this.router.post("/sonda", this.controller.postDato)
        this.router.get("/sonda", this.controller.getDatos)
        this.router.get("/sonda/:id", this.controller.getDatosById)
        this.router.get("/estadisticas", this.controller.getEstadisticas)

        return this.router
    }
}

export default Router