import { API_ENDPOINTS } from "../api/apiConfig";
import { apiCall } from "../cutomApiCall";
export const getAllProducts = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS, "GET");
};

export const weeklyBestProduct = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.WEEK_BEST_PRODUCT, "GET");
};
export const recentAddProduct = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.RECENT_ADD_PRODUCT, "GET");
};

export const mostPopularProduct = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.MOST_POPULAR_PRODUCT, "GET");
};
export const authSellerProducts = async (sellerId) => {
  return await apiCall(
    API_ENDPOINTS.PRODUCT.AUTH_SELLER_PRODUCTS.replace("{id}", sellerId),
    "GET"
  );
};


export const getCategories = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.GET_Catrgory, "GET");
};
export const POST_PRODUCT = async () => {
  return await apiCall(API_ENDPOINTS.PRODUCT.POST_PRODUCT, "POST");
};
export const GetCountries = async () => {
  return await apiCall(API_ENDPOINTS.PUBLIC.GetCountries, "GET");
};

export const sellerLogin = async (data) => {
  return await apiCall(API_ENDPOINTS.AUTH.Seller_Login, "POST", data);
};
export const buyerLogin = async (data) => {
  return await apiCall(API_ENDPOINTS.AUTH.Buyer_Login, "POST", data);
};

export const verifyUser = async(token) => {
  return apiCall(API_ENDPOINTS.AUTH.Verify_User, "GET", null, token);
}
export const popularSearches = async() => {
  return apiCall(API_ENDPOINTS.PUBLIC.getPopularSearches, "GET",);
}
export const topBar = async() => {
  return apiCall(API_ENDPOINTS.PUBLIC.getopBar, "GET",);
}
export const getBlogs = async() => {
  return apiCall(API_ENDPOINTS.PUBLIC.getBlogs, "GET",);
}

