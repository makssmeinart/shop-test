import { cartReducer, cartSlice, InitStateType } from "./cartReducer";

let initState: InitStateType;

beforeEach(() => {
  initState = [
    {
      id: "prod1",
      cover: "",
      cost: 100,
      description: "desc1",
      title: "Product 1",
      quantity: 2,
    },
    {
      id: "prod2",
      cover: "",
      cost: 50,
      description: "desc2",
      title: "Product 2",
      quantity: 0,
    },
  ];
});

test("Added item to cart", () => {
  const newProd = {
    id: "prod3",
    cover: "",
    cost: 250,
    description: "desc3",
    title: "Product 3",
    quantity: 0,
  };

  const action1 = cartSlice.actions.addProductToCart(newProd);
  const action2 = cartSlice.actions.addProductToCart(initState[0]);

  const endState1 = cartReducer(initState, action1);
  const endState2 = cartReducer(initState, action2);

  expect(endState1.length).toBe(3);
  expect(endState1[2].id).toBe("prod3");
  expect(endState1[2].quantity).toBe(1);
  expect(endState2[0].quantity).toBe(3)
});

export default {};
