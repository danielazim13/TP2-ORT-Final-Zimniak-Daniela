import SondaServices from "../services/sondaServices.js"

class SondaController {
    constructor(){
        this.services = new SondaServices()
    }

    postDato = async (req, res) => {
        try {
            const data = req.body
            const dato = await this.services.postDato(data)
            res.send(dato)
        } catch (error) {
            console.log("Error: ", error)
            res.status(500).send({ statusCode: 500, message: "Internal server error." })
        }
    }

    getDatos = async (req, res) => {
        try {
           const datos = await this.services.getDatos()
           res.send(datos)
        } catch (error) {
            console.log("Error: ", error)
            res.status(500).send({ statusCode: 500, message: "Internal server error." })
        }
    }

    getDatosById = async (req, res) => {
        try {
            const { id } = req.params
            const datos = await this.services.getDatosById(id)
           res.send(datos)
        } catch (error) {
            console.log("Error: ", error)
            res.status(500).send({ statusCode: 500, message: "Internal server error." })
        }
    }

    getEstadisticas = async (req, res) => {
        try {
           const estadisticas = await this.services.getEstadisticas()
           res.send(estadisticas)
        } catch (error) {
            console.log("Error: ", error)
            res.status(500).send({ statusCode: 500, message: "Internal server error." })
        }
    }

}

export default SondaController
