import SondaModel from "../models/DAO/sondaModelsMemory.js"

class SondaServices {
    constructor(){
        this.model = new SondaModel
    }

    postDato = async (data) => {
        const dato = await this.model.postDato(data)
        return dato
    }

    getDatos = async () => {
        const datos = await this.model.getDatos()
        return datos
    }

    getDatosById = async (id) => {
        const datos = await this.model.getDatosById(id)
        return datos
    }

    getEstadisticas = async () => {
        const estadisticas = await this.model.getEstadisticas()
        return estadisticas
    }

}

export default SondaServices