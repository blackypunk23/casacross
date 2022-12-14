import React, { FC, useContext, useEffect, useState } from "react";
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
import { AuthContext, UiContext } from "../../context";
import { useRouter } from 'next/router';


type FormData = {
  user_id: string;
  nombre: string;
  empresa: string;
  cedula: string;
  telefono: string;
  direccion: string; 
};

const ClientForm:FC = () => {

  const { user } = useContext(AuthContext);
    const {crearCliente, cliente} = useContext(UiContext); 

  let userdata = JSON.parse(JSON.stringify(user)); 

  const empresas = ["BANPRO","ALMEXSA","PROVALORES"]
  const [btnguardar, setBtnguardar] = useState(true);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
     
      user_id: userdata.id,
      nombre: userdata.name,
      empresa:  "",
      cedula:   "",
      telefono:  "",
      direccion: "",
     
    },
  });

    const onSubmitClientForm = (data: FormData) => {
    console.log('datos a guardar', data)
    crearCliente(data);
    setBtnguardar(false)
    router.push('/perfil/vehiculos')
  };

  return (
    <Box sx={{ pt: 2 }}>
      <Typography variant="h6">
        Queremos conocerte mejor por favor ingresa los siguientes datos{" "}
      </Typography>

      <form onSubmit={handleSubmit(onSubmitClientForm)}>
        <Typography variant="h1" component="h1">
          Datos Generales
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
              <TextField
                select
                variant="outlined"
                label="Empresa"
                defaultValue={empresas[0]}
                
                
                // fullWidth
                {...register("empresa", {
                  required: "Este campo es requierido",
                })}
                // error={!!!errors.empresa}
                helperText={errors.empresa?.message}
              >
                {empresas.map((emp) => (
                  <MenuItem key={emp} value={emp}>
                    {emp}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="cedula"
              variant="outlined"
              // defaultValue={cliente.cedula}
              fullWidth
              {...register("cedula", { required: "Este campo es requerido" })}
              error={!!errors.cedula}
              helperText={errors.cedula?.message}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="Telefono"
              variant="outlined"
              fullWidth
              {...register("telefono", { required: "Este campo es requerido" })}
              error={!!errors.telefono}
              helperText={errors.telefono?.message}
            />
          </Grid>

          <Grid item xs={12} sm={10}>
            <TextField
              label="Direccion de envio"
              variant="outlined"
              fullWidth
              {...register("direccion")}
              error={!!errors.direccion}
              helperText={errors.direccion?.message}
            />
          </Grid>


        </Grid>

        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          
        { btnguardar ? <Button
            type="submit"
            color="primary"
            className="circular-btn"
            size="large"
          >
            Guardar Datos
          </Button> : null}
          
        </Box>
      </form>
    </Box>
  );
};

export default ClientForm;