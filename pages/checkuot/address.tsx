import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts";

const AddressPage = () => {
  return (
    <ShopLayout title="Direccion" pageDescription="Direccion de Envio">
      <Typography variant="h1" component="h1" sx={{ mb: 5 }}>
        Direccion
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direccion" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Direccion 2 (Opcional)" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Codigo Postal" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Pais</InputLabel>
            <Select variant="filled" label="Pais" value={1}>
              <MenuItem value={1}> Paraguay </MenuItem>
              <MenuItem value={2}> Brasil </MenuItem>
              <MenuItem value={3}> Argentina </MenuItem>
              <MenuItem value={4}> Uruguay </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Telefono" fullWidth />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button color="secondary" className="circular-btn" size="large">
          Revisar Pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
