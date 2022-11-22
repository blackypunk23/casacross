import { NextPage } from "next";
import { MainLayout } from "../../components/layouts";
import { useSession } from "next-auth/react";
import { Divider, Typography, Paper, Grid } from "@mui/material";
import ClientForm from "../../components/client/ClientForm"
import { AuthContext } from '../../context/'
import {useContext} from 'react';
import router from 'next/router'


const PerfilPage: NextPage = () => {

  const {user} = useContext(AuthContext);
  const { status } = useSession()   

  if (status === "unauthenticated") {    
    router.push('/auth/login')
  }

  
  return (
    <MainLayout title={"Casa Cross"} pageDescription={"Perfil"}>

      <Paper elevation={4} sx={{padding: 3}}>
      
      <Typography variant="h1" component="h1">
        Bienvenido: {user?.name}
      </Typography>

      <Divider />

      {user ? <ClientForm  /> : null}

      

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

// export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
//   const session = await getSession({ req });
  
//   console.log('props',{session});

//   const { p = '/auth/login' } = query;
  

 
//   if (!session ) {
//     return {
//         redirect: {
//             destination: p.toString(),
//             permanent: false
//         }
//     }
// }
//   return {
//       props: { }
//   }
// }

