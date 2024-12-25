import { productActions } from "./productSlice";
export const fetchProductDetails = (id) => {
  const productDetailsUrl = `http://127.0.0.1:8000/api/get-product/detail/${id}`;
  return async (dispatch) => {
    const products = async () => {
      const response = await fetch(productDetailsUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    };
    try {
      const myData = await products();
      dispatch(productActions.setProducts(myData));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
};

// export const storeProduct = async (data) => {
//   try {
//     const response = await fetch("https://lot24.ma/api/store-product", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer YOUR_ACCESS_TOKEN",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log("Response:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
