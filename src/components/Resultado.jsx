import useCotizador from "../hooks/useCotizador"
import { useCallback, useMemo, useRef } from "react"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {
    const {resultadoCotizador, datos} = useCotizador()
    const yearRef = useRef(datos.year)

    const [nombreMarca] = useCallback( 
        MARCAS.filter(marca => marca.id === Number(datos.marca)), 
        [resultadoCotizador] 
    )
    const [nombrePlan] = useCallback(
        PLANES.filter(plan => plan.id === Number(datos.plan)), 
        [resultadoCotizador] 
    )
  return (
    <>
        {resultadoCotizador && (
            <div className="bg-gray-100 text-center mt-5 p-5 shadow">
                <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
                <p><span className="font-bold">Marca: </span>{nombreMarca.nombre}</p>
                <p><span className="font-bold">Plan: </span>{nombrePlan.nombre}</p>
                <p><span className="font-bold">Año del coche: </span>{yearRef.current}</p>
                <p className="text-2xl"><span className="font-bold">Resultado: </span>{resultadoCotizador}</p>
                
            </div>
        )}
    </>
    
  )
}

export default Resultado