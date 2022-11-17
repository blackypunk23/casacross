import React, { FC } from 'react'
import { ICliente } from '../../interfaces';
import { Paper, Typography } from '@mui/material';



interface Props {
    
    clientedata: ICliente; 
   
  }

export const ClientData: FC <Props > = ({clientedata}) => {

    console.log(`desde info data client ${clientedata}`)

    // const { nombre, empresa, telefono, direccion, sexo  } = clientedata

  return (

    <Paper elevation={5}>
        <Typography variant='h1' component='h1'> aa </Typography>

    </Paper>
    


  )
}
