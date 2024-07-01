class SondaModel{
    constructor(){
        this.datos = [
            
        ]
    }

    postDato = async (data) => {
        try {
            if (data.id < 1 || data.id > 5 || data.temperatura < -20 || data.temperatura > 100){
                return "Datos no válidos"
            } else {
                this.datos.push(data)
                data.fechaHora = new Date()
                return data
            }
        } catch (error) {
            console.log(error);
        }
    }

    getDatos = async () => {
        try {
            const datos = await this.datos
            return datos
        } catch (error) {
            console.log(error);
        }
    }

    getDatosById = async (id) => {
        try {
            if(id < 1 || id > 5){
                return "Número de sonda incorrecto"
            } else {
                const dato = this.datos.filter((d) => d.id == id)
                if(dato.length > 0){
                    return dato
                } else {
                    return `La lista de datos de la sonda con id ${id} está vacía`
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    getEstadisticas = async () => {
        const stats = 
        {
            estadisticas: {
                cantidadTotalMuestras: this.datos.length,
                temperaturaSondas: {

                }
            }
        }

        for (let index = 1; index <= 5; index++) {
            const sondaTemperaturas = this.datos.filter((temp) => temp.id === index)
            const total = sondaTemperaturas.length
            const prom = sondaTemperaturas.reduce((sum, temp) => sum + temp.temperatura, 0) / total
            stats.estadisticas.temperaturaSondas[index] = {cantidad: total, promedio: prom}
        }

        return stats
    }

    

    

}

export default SondaModel