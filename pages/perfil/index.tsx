import { NextPage } from "next";
import { MainLayout } from "../../components/layouts";
import { useSession } from "next-auth/react";
import { Divider, Typography, Paper, Grid } from "@mui/material";
import ClientForm from "../../components/client/ClientForm"
import { AuthContext, UiContext } from '../../context/'
import {useContext} from 'react';
import router from 'next/router'
import {useEffect} from 'react';



const PerfilPage: NextPage = () => {

  const {user} = useContext(AuthContext);
  const {cliente, getCliente} = useContext(UiContext)
  const { status } = useSession()   

  console.log('cliente:', JSON.stringify(cliente))
  console.log('user:', JSON.stringify(user))

  if (status === "unauthenticated") {    
    router.push('/auth/login')
  }

  const clienteRegistro = async ()=> {

    if (user){
      const {id} = JSON.parse(JSON.stringify(user));
      await getCliente(id)
    }
    
  }

  useEffect(()=>{    
     clienteRegistro()
  },[])

  
  return (
    <MainLayout title={"Casa Cross"} pageDescription={"Perfil"}>

      <Paper elevation={4} sx={{padding: 3}}>
      
      <Typography variant="h1" component="h1">
        Bienvenido: {user?.name}
      </Typography>

      <Divider />
      {user && !cliente ? <ClientForm  /> : null} 

      {cliente ?<p>hay cliente</p> : null}     

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

