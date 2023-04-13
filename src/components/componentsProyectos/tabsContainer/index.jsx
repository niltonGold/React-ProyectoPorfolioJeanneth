import React, { useState } from 'react'
import '../../componentsProyectos/tabsContainer/style.css';
import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { PowerBiList } from '../powerBiProyectsList';
import { ProyectosImportantesList } from '../proyecosImportantesProyectsList';
import { SqlList } from '../sqlProyectsList';

export const TabsContainer = () => {

  const [tabProyectosPrincipales, updateProyectosPrincipales] = useState( true );
  const [tabProyectosSQL,updateProyectosSQL] = useState( false );
  const [tabProyectosPowerBI, updateProyectosPowerBI] = useState( false );
  
  const handleClickProyectosPrincipales = () => {
    updateProyectosPrincipales( true );
    updateProyectosSQL( false );
    updateProyectosPowerBI( false );
  }

  const handleClickProyectosSQL = () => {
    updateProyectosPrincipales( false );
    updateProyectosSQL( true );
    updateProyectosPowerBI( false );
  }

  const handleClickProyectosPoweBI = () => {
    updateProyectosPrincipales( false );
    updateProyectosSQL( false );
    updateProyectosPowerBI( true );
  }


  return (
      <>
      <div className='tabsContainerProyectos'>
        
            <Box sx={{ width: '100%' }}>
                <AppBar position="static" sx={{ backgroundColor: '#DDE9F0', borderBottom: '#0274B6 solid 3px'  }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'center'}}>
                    

                    <div className='tabNavigatorProyectos'>
                        
                        <Stack className={ !tabProyectosPrincipales ? 'tabLinkProyectos_noClick' : 'tabLinkProyectos_cliked' }  onClick={handleClickProyectosPrincipales} >
                            Proyectos Principales
                        </Stack>

                    
                        <Stack className={ !tabProyectosSQL ? 'tabLinkProyectos_noClick' : 'tabLinkProyectos_cliked' }  onClick={handleClickProyectosSQL} >
                            Proyectos SQL
                        </Stack>

                        
                        <Stack className={ !tabProyectosPowerBI ? 'tabLinkProyectos_noClick' : 'tabLinkProyectos_cliked' }  onClick={handleClickProyectosPoweBI}>
                            Proyectos Power BI
                        </Stack>

                    </div>


                    </Toolbar>
            
                </AppBar>
            </Box>


            <div className={tabProyectosPrincipales ? 'proyects_enabled' : 'proyects_disabled'}>
              <ProyectosImportantesList/>
            </div>
        
            <div className={tabProyectosSQL ? 'proyects_enabled' : 'proyects_disabled'}>
              <SqlList/>
            </div>
        
            <div className={tabProyectosPowerBI ? 'proyects_enabled' : 'proyects_disabled'}>
              <PowerBiList/>
            </div>
            

      </div>
      </>
  )
}
