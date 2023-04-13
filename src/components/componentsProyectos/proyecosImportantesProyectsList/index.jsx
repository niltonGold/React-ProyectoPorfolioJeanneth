import React from 'react';
import './style.css';
import machineLearning from '../../../images/imagesProyectos/machinelearning.jpg';
import seaborn from '../../../images/imagesProyectos/seaborn.png';
import bbva from '../../../images/imagesProyectos/bbva.jpg';
import { ProyectCard } from '../proyectCard';

export const ProyectosImportantesList = () => {

   /* Proyectos Importantes */
      const proyectosImportantes = [
        {
          imagen: machineLearning,
          tituloimagen: 'Machine Learning',
          tecnologiasUsadas: 'Jupyter Lab, Python',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        },
        {
          imagen: seaborn,
          tituloimagen: 'SeaBorn',
          tecnologiasUsadas: 'Python, pandas',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        },
        {
          imagen: bbva,
          tituloimagen: 'BBVA',
          tecnologiasUsadas: 'Jupyter Lab, Python',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        }
      ]
  
  return (
    <div className='proyectosImportantesList_container'>
      {
        proyectosImportantes.map( ( e, i ) => 
          <ProyectCard
            key={i}
            imagenFondoCard={e.imagen}
            tituloTextoImagenCard={e.tituloimagen}
            tecnologiasUsadas={e.tecnologiasUsadas}
            descripcion={e.descripcion}
            enlaceGithub={e.enlaceGitHub}
            enlaceProyecto={e.enlaceProyecto} /> 
          )
      }
    </div>
  )
}
