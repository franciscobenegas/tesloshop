import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { ShopLayout } from "../../components/layouts/ShopLayout";
import { CartList, OrderSummary } from "../../components/cart";

const CartPage = () => {
  return (
    <ShopLayout
      title="Carrito - 3"
      pageDescription={"Carrito de compras de la tienda"}
    >
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={12}>
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
