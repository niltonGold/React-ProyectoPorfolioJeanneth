import React from 'react';
import '../../componentsConoceme/cardsConocemeList/style.css';
import pasiones from '../../../images/imagesConoceme/pasiones.jpg';
import habilidades from '../../../images/imagesConoceme/habilidades.jpg';
import caracteristicas from '../../../images/imagesConoceme/caracteristicas.jpg';
import { CardConoceme } from '../cardConoceme';

export const CardsConocemeList = () => {

  /* Contenido de los Cards de Conoceme  */
  
      const cardsConocemeContenido = [
        {
          imagen: pasiones,
          tituloimagen: 'Pasiones',
          // tecnologiasUsadas: 'Jupyter Lab, Python',
          parrafo: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  ullaboris nisi ut aliquip ex ea commodo.',
        },
        {
          imagen: habilidades,
          tituloimagen: 'Habilidades',
          // tecnologiasUsadas: 'Python, pandas',
          parrafo: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  quis nostrudullamco laboris nisi ut aliquip ex ea commodo.',
        },
        {
          imagen: caracteristicas,
          tituloimagen: 'Caracteristicas Especiales',
          parrafo: 'consectetur adipiscing elit, sed do eiusmod tempor incididun quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',    
        }
      ]
  
  return (
    <div className='CardsConocemeList_container'>
      {
        cardsConocemeContenido.map( ( e, i ) =>
          <CardConoceme
            key={ i }
            imagenFondoCard={ e.imagen }
            tituloTextoImagenCard={ e.tituloimagen }
            parrafo={ e.parrafo }
          />
        )
      }
    
    
    </div>
  )
}
