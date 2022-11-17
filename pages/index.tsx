import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { MainLayout } from '../components/layouts'


const HomePage: NextPage = () => {

  return(
    <MainLayout title='Casa Cross' pageDescription='Clientes CC' >
    <Typography variant='h1' component='h1'>CC</Typography>
  </MainLayout>


  )


}

export default HomePage;