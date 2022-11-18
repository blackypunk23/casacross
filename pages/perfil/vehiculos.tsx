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
     
      


      <Grid>

        <CarInfo />

        
 
      </Grid> 
        
      </Paper>

      
    </MainLayout>
  );
};

export default VehiculosPage;
