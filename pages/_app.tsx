import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { SWRConfig } from 'swr'

import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';

import { AuthProvider, UiProvider} from '../context/'




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      

      
        <SWRConfig 
          value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
          }}
        >
           <AuthProvider>            
              <UiProvider>
                <ThemeProvider theme={ lightTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
              </UiProvider>
            
          </AuthProvider> 
        </SWRConfig>

    </SessionProvider>
  )
}

export default MyApp
