import type { NextApiResponse, NextApiRequest} from 'next';

import nodemailer from "nodemailer";

type Data = | { message: string} 

export default function handler( req: NextApiRequest, res: NextApiResponse){

    switch( req.method) {
        case 'POST' :
            return enviarEmail(req, res)
        default: 
            res.status(400).json({
                message: 'Bad request'
            })   
    }
}

const  enviarEmail = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    console.log(req.body);

    const  { nombre, correo, asunto, tipo} = req.body

    let texto;

    switch(tipo){
        case 'Bienvenida' : {   

            texto = `Gracias ${nombre} por registrarte como cliente`

        }
        break
    }

    
    const transporter = nodemailer.createTransport({
        host: 'mail.casacross.net',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'info@casacross.net',
          pass: "C@sa2023!!",
        },
        logger: true
      });


      try {

        const info = await transporter.sendMail({
            from: '"No Reply" <info@casacross.net>',
            to: `${correo}`,
            subject: `${asunto}`,
            text: `${texto}`,
            html: `<strong>${texto}</strong>`,
            headers: { 'x-myheader': 'test header' }
          });
        
          console.log("Message sent: %s", info.response);

          return res.status(200).json({
                message: 'Envio Exitoso'
             })
        
      } catch (error) {

        console.log(error);
         return res.status(500).json({
            message: 'Revisar logs del servidor'
     })
        
      }

      
    }
