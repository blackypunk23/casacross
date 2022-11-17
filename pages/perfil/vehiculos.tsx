import { NextPage } from "next";
import { MainLayout } from "../../components/layouts";

import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { IUser, ICar  } from "../../interfaces";
import { Divider, Typography, Paper, Grid } from "@mui/material";

import { CarInfo } from "../../components/client";
import ListCars from "../../components/client/ListCars";
import { dbCarsList } from "../../database";

// interface Props {
//   user: IUser;
//   idcliente: string;
//   cars: ICar[]
// }

const VehiculosPage: NextPage = () => {
  
  return (
    <MainLayout title={"Casa Cross"} pageDescription={"Perfil"}>

      <Paper elevation={4} sx={{padding: 3}}>
{/*       
      <Typography variant="h1" component="h1">
        Bienvenido: {user.name}
      </Typography>

      <Divider />


      <Grid>

        

        <CarInfo id={idcliente} />
        <Divider sx={{p: 1}} />
        <ListCars usercars={cars}/>
      </Grid> */}
        
      </Paper>

      
    </MainLayout>
  );
};

export default VehiculosPage;
