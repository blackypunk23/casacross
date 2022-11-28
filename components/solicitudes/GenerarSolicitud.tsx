import { FC, useContext, useState } from "react";
import { Box, Button, FormControl, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { AuthContext, UiContext } from "../../context";
import { useForm } from "react-hook-form";

type FormData = {
  user_id: string;
  nombre: string;
  telefono: string;
  direccion: string;
  mensaje: string;
  codigoproducto: string;
  vehiculo: string;
  placa: string;
  marca: string;
  modelo: string;
  year: number;
  vin: string;
};

const GenerarSolicitud: FC = () => {

  const { cliente, cars } = useContext(UiContext);
    

  console.log('cars a escoger:', cars)

//   const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      user_id: cliente.user_id,
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      direccion: "" || cliente.direccion,
      mensaje: "",
      codigoproducto: "",

      // placa: '',
      // marca: '',
      // modelo: '',
      // year: 0,
      // vin: ''
      
    },
  });

  const onSubmitSolicitud = (data: FormData) => {
    console.log("datos recibidos data ", data);

    data.placa = "Wiliam placa";

    console.log("data con placa", data);
  };

  return (
    <Box sx={{ pt: 2 }}>
      <form onSubmit={handleSubmit(onSubmitSolicitud)}>
        <Typography>Desde Form Generar</Typography>

        <Grid container spacing={1} sx={{ mt: 2 }}>

          <Grid item xs={12} sm={4}>
            <TextField
              label="nombre"
              variant="outlined"
              // defaultValue={cliente.nombre}
            //    fullWidth
              {...register("nombre", { required: "Este campo es requerido" })}
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="telefono"
              variant="outlined"
              // defaultValue={cliente.telefono}
            //    fullWidth
              {...register("telefono", { required: "Este campo es requerido" })}
              error={!!errors.telefono}
              helperText={errors.telefono?.message}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="direccion"
              variant="outlined"
              // defaultValue={cliente.direccion}
            //    fullWidth
              {...register("direccion", { required: "Este campo es requerido" })}
              error={!!errors.direccion}
              helperText={errors.direccion?.message}
            />
          </Grid>

          <Grid item xs={12} sm={4}>

          <FormControl fullWidth>
              <TextField
                select
                variant="outlined"
                label="Seleccionar Vehiculo"
                defaultValue={'Elige tu Vehiculo'}
                
                
                 fullWidth
                {...register("vehiculo", {
                  required: "Este campo es requierido",
                })}
                // error={!!!errors.vehiculo}
                helperText={errors.vehiculo?.message}
              >
                {cars.map((carro) => (
                  <MenuItem key={carro.placa} value={carro.placa}>
                    {`${carro.placa} - ${carro.marca}` }
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>




        </Grid>

        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          
        <Button
            type="submit"
            color="primary"
            className="circular-btn"
            size="large"
          >
            Generar Solitud
          </Button> 
          
        </Box>
      </form>
    </Box>
  );
};

export default GenerarSolicitud;
