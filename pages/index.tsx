import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import router from 'next/router';

import { MainLayout } from '../components/layouts'



const HomePage: NextPage = () => {

  const { status } = useSession()   

  if (status === "unauthenticated") {    
    router.push('/auth/login')
  }

  return(
    <MainLayout title='Casa Cross' pageDescription='Clientes CC' >
    {/* <Typography variant='h1' component='h1'>CC</Typography> */}
  </MainLayout>



  )


}

export default HomePage;


