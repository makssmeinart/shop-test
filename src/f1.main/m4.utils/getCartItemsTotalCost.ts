import { CartProductType } from "../m2.bll/reducer/cart/cartReducer";

export const getCartItemsTotalCost = (products: CartProductType[]) => {
    let cost = 0

    products.forEach(prod => {
        for(let i = 0; i < prod.quantity; i++) {
            cost += prod.cost
        }
    })

    return cost
};
