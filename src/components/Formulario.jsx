import { MARCAS } from "../constants"
import { YEARS } from "../constants"
import { PLANES } from "../constants"
import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()
    

    const handleSubmit = (e) => {
        e.preventDefault()

        setError('')

        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            
        }

        cotizarSeguro()
    }

  return (
    <>
        {error && <Error />}

        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block mb-4 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select name="marca" className="w-full p-3 bg-white border border-gray-200" onChange={handleChangeDatos} value={datos.marca}>
                    <option value="">Selecciona marca</option>
                    {MARCAS.map(marca => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-4 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select name="year" className="w-full p-3 bg-white border border-gray-200" onChange={handleChangeDatos} value={datos.year}>
                    <option value="">Selecciona año</option>
                    {YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-4 font-bold text-gray-400 uppercase">
                    Plan
                </label>
                <div className="flex gap-3 items-center">
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input type="radio" name="plan" value={plan.id} onChange={handleChangeDatos} />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input type="submit" value="Cotizar" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" />

            
        </form>
    </>
  )
}

export default Formulario