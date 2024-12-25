import { apiCall } from "../cutomApiCall";
import { API_ENDPOINTS } from "../api/apiConfig";

export const getAllProducts = () =>
  apiCall(API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS, "GET");

export const getProductById = ()=>
  apiCall(API_ENDPOINTS.PRODUCT_DETAILS.GET_SPECIFIC_PRODUCT_DETAILS, "GET");

export const getChatDetails = async(chatId, token) => apiCall(API_ENDPOINTS.PUBLIC.GetChatDetails + chatId, "GET", token);