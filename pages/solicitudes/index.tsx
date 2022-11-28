import { Paper, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import router from "next/router";
import { useContext, useEffect } from "react";
import { MainLayout } from "../../components/layouts";
import GenerarSolicitud from "../../components/solicitudes/GenerarSolicitud";
import { AuthContext, UiContext } from "../../context";
import { useSession } from "next-auth/react";


const SolictudesPage: NextPage = () => {

 
  const {user} = useContext(AuthContext);
  const {cliente, getCliente, listarCars, cars} = useContext(UiContext)
  const { status } = useSession()   

  console.log('cliente Sol:', JSON.stringify(cliente))
  console.log('user Sol:', JSON.stringify(user))

  if (status === "unauthenticated") {    
    router.push('/auth/login')
  }

  const clienteRegistro =  ()=> {

    if (user){
      const {id} = JSON.parse(JSON.stringify(user));
      getCliente(id);
      listarCars(id);
    }
    
  }

  useEffect(()=>{    
     clienteRegistro()
  },[])



  return (
    
    <MainLayout title="Solicitudes de Repuestos" pageDescription="Solicitudes de Repuestos" >

        <Paper elevation={4} sx={{padding :  3}}>

        {/* <Grid container spacing={2}  > */}

        <Typography>{user?.name}</Typography>
        <Typography>ced: {cliente.cedula}</Typography>
        

         {user && cliente && cars ? <GenerarSolicitud /> : null} 


        {/* </Grid> */}



        </Paper>

    </MainLayout>
  )
}

export default SolictudesPage;












