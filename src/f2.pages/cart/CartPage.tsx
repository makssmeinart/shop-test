import { Container, Grid } from "@mui/material";
import { Products } from "./components";
import { Form } from "./components/form/Form";

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
