import React from "react";
import { ShopLayout } from "../../components/layouts";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import NextLink from "next/link";

const SummaryPage = () => {
  return (
    <ShopLayout
      title="Resumen de Compra"
      pageDescription="Resumen de la Orden de Compras"
    >
      <Typography variant="h1" component="h1" sx={{ mb: 5 }}>
        Resumen de la Orden
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable={false} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 Productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Direccion de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography>Francisco Benegas</Typography>
              <Typography>San Lorenzo - Barcequillo</Typography>
              <Typography>Pirizal c/ Def. del Chaco</Typography>
              <Typography>Paraguay</Typography>
              <Typography>0982 252-333</Typography>

              <Divider />
              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
