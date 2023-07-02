import './App.css';
import Testimonios from './componentes/Testimonio';


function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestro alumnos sobre FreeCodeCamo </h1>

        <Testimonios
          nombre ='Emma Bostian'
          pais ='Suecia'
          imagen='persona1'
          cargo ='Ingeniera de software'
          empresa ='Spotify'
          testimonio = 'Siempre tenia problemas para aprender javascript pero gracias a frecodecamp logre y ahora estoy trbajando en una buena empresa, gracias freecodecamp'
        />

          <Testimonios
          nombre ='Inna Whatsonn'
          pais ='Singapur'
          imagen='persona2'
          cargo ='Ingeniera de software'
          empresa ='Amazon'
          testimonio = 'Siempre tenia problemas para aprender javascript pero gracias a frecodecamp logre y ahora estoy trbajando en una buena empresa, gracias freecodecamp'
        />

          <Testimonios
          nombre ='Amy Goodman'
          pais ='Escocia'
          imagen='persona3'
          cargo ='Ingeniera de software'
          empresa ='Alibaba'
          testimonio = 'Siempre tenia problemas para aprender javascript pero gracias a frecodecamp logre y ahora estoy trbajando en una buena empresa, gracias freecodecamp'
        />
      </div>
    </div>
  );
}

export default App;
