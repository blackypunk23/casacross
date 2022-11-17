
import {FC}from 'react'
import { GetServerSideProps } from 'next/types';
import { getSession } from 'next-auth/react';
import { dbCarsList } from '../../database';
import { ICar } from '../../interfaces';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, ListItem, Paper, Typography } from '@mui/material';
import Logocc from '../../public/cc/CC-logo-White.png'
import Image from 'next/image'

 interface Props {
  usercars: ICar[];
  
}

interface Propscar {
 
  car: ICar;

}
const ListCars:FC<Props> = ( {usercars} ) => {

  console.log('desde list cars', usercars)
  return (
    <Paper elevation={3} sx={{p: 3}}>

      <Typography variant='h6' align={'center'} sx={{p:1}} > Lista de Vehiculos Registrados</Typography>
      
      <Grid container spacing={2} >

        {usercars ? 
          
          usercars.map( (carrito) => (
            <CardCar key={carrito.placa}  car={carrito} />
          ))
        :
        <Typography variant='h6' align={'center'} > Aun no registras ningun autmovil</Typography> }

      </Grid>

    </Paper>
  )
}

export default ListCars


const CardCar:FC<Propscar> = ({car}) => {

  const {placa, marca, modelo,  year, vin } = car

  return (
    <Card sx={{ maxWidth: 250, padding: 1}}>
      <CardMedia sx={{}}>
        
        <Image
          src={Logocc}
          width={250}
          alt='car'
          
          // layout="fill"
          // objectFit='cover'
        />

        </CardMedia>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {placa}
        </Typography>


        <Typography variant="body2" color="text.secondary">
          <ListItem>{`Marca: ${marca}`}</ListItem>
          <ListItem>{`Modelo: ${modelo}`}</ListItem>
          <ListItem>{`Año: ${year}`}</ListItem>
          <ListItem>{`VIN: ${vin}`}</ListItem>
        </Typography>

      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )

}




