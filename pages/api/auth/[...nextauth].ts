import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { dbUsers } from '../../../database';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [    
    // ...add more providers here
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com'  },
        password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña'  },
      },
      async authorize(credentials) {
        console.log({credentials})
        // return { name: 'Juan', correo: 'juan@google.com', role: 'admin' };
       
        const data =  await dbUsers.checkUserEmailPassword( credentials!.email, credentials!.password );
        console.log('retornando del dbUser', JSON.parse(JSON.stringify(data)))
        return JSON.parse(JSON.stringify(data))
      }
    }),
    GithubProvider({
      // clientId: process.env.GITHUB_ID,
      // clientSecret: process.env.GITHUB_SECRET,
      clientId: 'ca349e1b9b67b2480420',
      clientSecret:'867c44c507144f8cb571ae9e838d2673a35d3b0f'
    }),
  ],

  // Custom Pages
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register'
  },

  // Callbacks
  jwt: {
    // secret: process.env.JWT_SECRET_SEED, // deprecated
  },
  
  session: {
    maxAge: 2592000, /// 30d
    strategy: 'jwt',
    updateAge: 86400, // cada día
  },


  callbacks: {

    async jwt({ token, account, user }) {
      // console.log({ token, account, user });

      if ( account ) {
        token.accessToken = account.access_token;

        switch( account.type ) {

          case 'oauth': 
            token.user = await dbUsers.oAUthToDbUser( user?.email || '', user?.name || '' );
          break;

          case 'credentials':
            token.user = user;
          break;
        }

      }

      return token;
    },


    async session({ session, token, user }){
      // console.log({ session, token, user });
        
      // session = token.accessToken ;
      
      // session.user = token
      
      

      //  console.log('ddddddd: ' + JSON.stringify( session));

      // return JSON.parse(JSON.stringify(session)) ;
      // if(token){

      //   session.user = token.user as any
      // }
      // session.accessToken = token.accessToken;
       session.user = token.user as any;

        return await JSON.parse(JSON.stringify(session))

      
     
    }
    

  }

});