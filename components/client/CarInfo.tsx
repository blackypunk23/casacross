import  { FC, useContext} from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { UiContext } from "../../context";



type FormData = {
  user_id : string,
  placa: string,
  marca: string,
  modelo: string,
  year: number
  vin: string
}

interface Props {
  id: string; 
}


export const CarInfo: FC<Props> = ( {id}) => {

  const { crearCar } = useContext(UiContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
       user_id: id,
       placa: '',
       marca: '',
       modelo: '',
       year: 1990,
       vin: ''      
    },
  });

  const onSubmitCar = (data: FormData) => {
    console.log('onSubmit', data);
    crearCar(data)
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
            Guardar Datos
          </Button>
        </Box>
      </form>
    </Box>

    
    
  )
}
