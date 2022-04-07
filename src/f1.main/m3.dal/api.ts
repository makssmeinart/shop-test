import {collection, getDocs} from "firebase/firestore";
import {db} from "../m2.bll/firebase/config";
import {ProductType} from "../m2.bll/reducer/products/productsReducer";

export const productsApi = {
  fetchProducts: async () => {
    const colRef = collection(db, "products");
    return getDocs(colRef).then((snapshot) => {
      let data: ProductType[] = [];

      snapshot.docs.forEach((prod) => {
        const prodData = prod.data()

        data.push({
          cost: prodData.cost,
          cover: prodData.cover,
          description: prodData.description,
          title: prodData.title,
          id: prod.id,
        });
      });

      return data;
    });
  },
};
