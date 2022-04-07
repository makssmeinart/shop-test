import {CommonInput, CurrentForm, FormWrapper} from "./styles";
import {Button, Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCartProducts} from "../../../../f1.main/m2.bll/selectors/selectors";

export const Form = () => {
  const cartProduct = useSelector(selectCartProducts);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const payload = {
      userInfo: {
        name: e.target[0].value,
        surname: e.target[1].value,
        address: e.target[2].value,
        phone: e.target[3].value,
      },
      productInfo: cartProduct,
    };

    console.log(payload);
  };

  return (
    <FormWrapper item xs>
      <CurrentForm onSubmit={handleSubmit}>
        <Grid container gap={3} flexDirection={"column"}>
          <CommonInput type={"text"} placeholder={"Name"} />
          <CommonInput type={"text"} placeholder={"Surname"} />
          <CommonInput type={"text"} placeholder={"Address"} />
          <CommonInput type={"number"} placeholder={"Phone"} />
          <Button type={"submit"} variant={"contained"}>
            Order
          </Button>
        </Grid>
      </CurrentForm>
    </FormWrapper>
  );
};
