import React from 'react';
import './App.css';

const App = () => {
 const [paises, setPaises] = React.useState([])
 console.log(paises)
  React.useEffect(() => {
    obtenerDatos()
  }, [])
  const obtenerDatos = async() => {
    const data = await fetch('https://restcountries.com/v3.1/all')
    const countries = await data.json()
    setPaises(countries)
  }
  return(
    <div>
      <h1>Paises</h1>
      
      <ul>
        {paises.map((pais) => {
          return <li>
            <img src={pais.flags.png} alt=""></img>
            <h2>{pais.name.common}</h2>
            <ul>
              <li><span className='negrita'>Population:</span> {pais.population}</li>
              <li><span className='negrita'>Region:</span> {pais.region}</li>
              <li><span className='negrita'>Capital:</span> {pais.capital}</li>
            </ul>
          </li>
        })}
      </ul>
    </div>
  )
}

export default App;
