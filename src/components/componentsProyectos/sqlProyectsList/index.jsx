import React from 'react';
import './style.css';

import microsoft from '../../../images/imagesProyectos/microsoft.jpg';
import basesdedatos from '../../../images/imagesProyectos/basesdedatos.jpg';
import googlecloud from '../../../images/imagesProyectos/googlecloud.jpg';
import { ProyectCard } from '../proyectCard';

export const SqlList = () => {

   /* Proyectos SQL */
      const proyectossQL = [
        {
          imagen: microsoft,
          tituloimagen: 'Microsoft',
          tecnologiasUsadas: 'Jupyter Lab, Python',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        },
        {
          imagen: basesdedatos,
          tituloimagen: 'Bases de Datos',
          tecnologiasUsadas: 'Python, pandas',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        },
        {
          imagen: googlecloud,
          tituloimagen: 'Google Cloud',
          tecnologiasUsadas: 'Jupyter Lab, Python',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        }
      ]
  
  return (
    <div className='sqlList_container'>
      {
        proyectossQL.map( ( e, i ) => 
          <ProyectCard
            key={i}
            imagenFondoCard={e.imagen}
            tituloTextoImagenCard={e.tituloimagen}
            tecnologiasUsadas={e.tecnologiasUsadas}
            descripcion={e.descripcion}
            enlaceGithub={e.enlaceGitHub}
            enlaceProyecto={e.enlaceProyecto}/>
        )
      }
    </div>
  )
}
