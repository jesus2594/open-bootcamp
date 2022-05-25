import React, {useState, useContext} from 'react'

/* 
@returns Componente1
dispone de un contexto que va a tener un valor
que recibe desde el padre
*/
const miContexto = React.createContext(null)
const Componente1 = () => {

    //inicializamos un estado vacio que va a rellenarse con los datos de contexto padre
    const state = useContext(miContexto)

  return (
    <div>
        <h1>
            El token es: {state.token}
        </h1>
        {/* pintamos el componente */}
        <Componente2></Componente2>
    </div>
  )
}
const Componente2 = () => {

    const state = useContext(miContexto)

  return (
    <div>
        <h2>
            La sesion es: {state.sesion}
        </h2>
    </div>
  )
}


export default function MiComponenteConContexto ()  {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        )
    }


  return (
    <miContexto.Provider value={sessionData}>
        {/* Todo lo que este aqui adentro puede leer los datos de sessionData
        ademas, si se actualiza, los componentes de aqui, tambien lo actualizaran    
         */}
         <h1>*** Ejemplo de useState() y useContext()***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  )
}



