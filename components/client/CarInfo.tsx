import  { FC, useContext} from "react";
import {  Typography,  Box,  Grid,  TextField,  Button,} from "@mui/material";
import { useForm } from "react-hook-form";
import { AuthContext, UiContext } from "../../context";



type FormData = {
  user_id : string,
  placa: string,
  marca: string,
  modelo: string,
  year: number
  vin: string
}




export const CarInfo: FC = ( ) => {

   const { user } = useContext(AuthContext);
  // console.log('from caringo',user)
  const {crearCar} = useContext(UiContext); 

  // let userdata = JSON.parse(JSON.stringify(user)); 

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<FormData>({
    defaultValues: {
       user_id: '',
       placa: '',
       marca: '',
       modelo: '',
       year: 1990,
       vin: ''      
    },
  });

  const onSubmitCar = (data: FormData) => {
const { placa, marca, modelo, year, vin } = data
let userdata = JSON.parse(JSON.stringify(user)); 
    let newdata = {
      user_id: userdata.id ,
      placa,
      marca, modelo, year, vin 

    }
    console.log('onSubmit', newdata);
     crearCar(newdata)

     resetField("placa")
     resetField("marca")
     resetField("modelo")
     resetField("year")
     resetField("vin")

  };


 
  return (

    <Box sx={{ pt: 2 }}>
      <Typography variant="h6">
        Registra tus vehiculos para tener una atencion mas personalizada
      </Typography>

      <form onSubmit={handleSubmit(onSubmitCar)}>
        
        <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid item xs={12} sm={2}>
            <TextField
              label="placa"
              variant="outlined"
              fullWidth
              {...register("placa", { required: "Este campo es requerido" })}
              error={!!errors.placa}
              helperText={errors.placa?.message}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <TextField
              label="marca"
              variant="outlined"
              // defaultValue={cliente.marca}
              fullWidth
              {...register("marca", { required: "Este campo es requerido" })}
              error={!!errors.marca}
              helperText={errors.marca?.message}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <TextField
              label="modelo"
              variant="outlined"
              fullWidth
              {...register("modelo", { required: "Este campo es requerido" })}
              error={!!errors.modelo}
              helperText={errors.modelo?.message}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <TextField
              type={'number'}
              label="Año"
              variant="outlined"
              fullWidth
              {...register("year", {
                required: "Este campo es requerido",
              })}
              error={!!errors.year}
              helperText={errors.year?.message}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="vin"
              variant="outlined"
              // defaultValue={cliente.vin}
              fullWidth
              {...register("vin", { required: "Este campo es requerido" })}
              error={!!errors.vin}
              helperText={errors.vin?.message}
            />
          </Grid>

        
        </Grid>

        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          <Button
            type="submit"
            color="primary"
            className="circular-btn"
            size="large"
          >
            Agregar Vehiculo
          </Button>
        </Box>
      </form>
    </Box>

    
    
  )
}
