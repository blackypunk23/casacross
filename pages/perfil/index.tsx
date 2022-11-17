import { NextPage } from "next";
import { MainLayout } from "../../components/layouts";

import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { IUser } from "../../interfaces";
import { Divider, Typography, Paper, Grid } from "@mui/material";
import ClientForm from "../../components/client/ClientForm"

import { dbCliente } from "../../database";
import { ICliente } from "../../interfaces/cliente";

import { ClientData } from "../../components/client/ClientData";
import { CarInfo } from "../../components/client";

import { AuthContext } from '../../context/'
import {useContext} from 'react';

interface Props {
  user?: IUser;
  // cliente?: ICliente ;
  // info: boolean;
}

const PerfilPage: NextPage<Props> = () => {

  const {user} = useContext(AuthContext);

  console.log('usuario', user)


  
  return (
    <MainLayout title={"Casa Cross"} pageDescription={"Perfil"}>

      <Paper elevation={4} sx={{padding: 3}}>
      
      <Typography variant="h1" component="h1">
        Bienvenido: {user?.name}
      </Typography>

      <Divider />

      {user ? <ClientForm userdata={user} /> : null}

      

      {/* {!info ?

      <ClientForm userdata={user} clientedata={cliente} />

      : 
      
      <ClientData clientedata={cliente} />
      
      } */}

      <Grid>

        
      </Grid>
        
      </Paper>

      
    </MainLayout>
  );
};

export default PerfilPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
  const session = await getSession({ req });
  // console.log({session});

  const { p = '/auth/login' } = query;
  

 
  if (!session ) {
    return {
        redirect: {
            destination: p.toString(),
            permanent: false
        }
    }
}
  return {
      props: { }
  }
}

