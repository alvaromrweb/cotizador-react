import { createContext, useState } from "react";
import { getAumentoMarca, getAumentoPlan } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const [resultadoCotizador, setResultadoCotizador] = useState('')
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000

        const yearDiff = new Date().getFullYear() - datos.year
        resultado -= yearDiff * (resultado * 0.03)
        resultado += resultado * (getAumentoMarca(datos.marca) / 100)
        resultado += resultado * (getAumentoPlan(datos.plan) / 100)
        resultado = parseFloat(resultado.toFixed(2))
        resultado = resultado.toLocaleString('es-ES', {
            style:'currency',
            currency:'EUR'
        })
        setResultadoCotizador(resultado)

        setCargando(true)
        setTimeout(() => {
            setCargando(false)
        }, 2000);

        

    }

    return(
        <CotizadorContext.Provider 
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultadoCotizador,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext