import { Container, Grid } from "@mui/material";
import {Form, Products} from "./components";

export const CartPage = () => {
  return (
    <section>
      <Container>
        <Grid container gap={5} marginTop={5}>
          <Products />
          <Form />
        </Grid>
      </Container>
    </section>
  );
};
