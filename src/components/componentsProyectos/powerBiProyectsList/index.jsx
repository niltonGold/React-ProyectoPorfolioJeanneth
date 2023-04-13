import React from 'react';
import './style.css';
import { ProyectCard } from '../proyectCard';
import imagenToysrUs from '../../../images/imagesProyectos/toys-r-us.jpg';
import santander from '../../../images/imagesProyectos/santander.png';
import mbit from '../../../images/imagesProyectos/mbit.png';

export const PowerBiList = () => {

  /* Proyectos en Power Bi */
      const proyectosPowerBiLis = [
        {
          imagen: imagenToysrUs,
          tituloimagen: 'Toys R Us Toys R Us Toys R Us',
          tecnologiasUsadas: 'Power Bi, Excel y Python',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        },
        {
          imagen: santander,
          tituloimagen: 'Banco Santander',
          tecnologiasUsadas: 'Python',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        },
        {
          imagen: mbit,
          tituloimagen: 'MBIT',
          tecnologiasUsadas: 'Jupyter Lab',
          descripcion: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          enlaceGitHub: 'https://github.com/',
          enlaceProyecto: 'https://app.powerbi.com/view?r=eyJrIjoiYjI5NGVkYWYtODVkYS00OTljLWE2NWQtYmQ4MTQ4OGU4OGZiIiwidCI6IjJlNzBiMzk1LWU5MjAtNDVjMi04NGNkLWFhZmZiYWY5NTA4MCIsImMiOjl9',
        }
      ]

  return (
    <div className='powerList_container'>
    
        {
          proyectosPowerBiLis.map( ( e, i ) =>
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

