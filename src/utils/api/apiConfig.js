import Buyer from "../../pages/buy&seller/Buyer";

const API_DOMAIN = 'https://api.lot24.ma/api/';


export const API_ENDPOINTS = {
    PRODUCT: {
        GET_ALL_PRODUCTS: API_DOMAIN + 'get-product',
        SEARCH_PRODUCT: API_DOMAIN + 'get-product?search=',
        GET_Catrgory: API_DOMAIN + 'category',
        GET_SubCatrgory: API_DOMAIN + 'get-subcategory',
        GET_Brand: API_DOMAIN + 'brand',

        POST_PRODUCT: API_DOMAIN + 'store-product',
        EDIT_PRODUCT: API_DOMAIN + 'edit-product/1',
        UPDATE_PRODUCT: API_DOMAIN + 'update-product/1',
        DELETE_PRODUCT: API_DOMAIN + 'delete-product/1',

        WEEK_BEST_PRODUCT: API_DOMAIN + 'week-best-offer',
        RECENT_ADD_PRODUCT: API_DOMAIN + 'recent-add-products',
        MOST_POPULAR_PRODUCT: API_DOMAIN + 'most-populer-products',
        AUTH_SELLER_PRODUCTS: API_DOMAIN + 'sellerproduct/{id}',
    },
    PUBLIC: {
        GetCountries: API_DOMAIN + 'country',
        GetChatDetails: API_DOMAIN + 'messages/', // chat id as param
        getPopularSearches: API_DOMAIN + 'popularsearch/list', // chat id as param
        getopBar: API_DOMAIN + 'topbar/list', // chat id as param
        getBlogs: API_DOMAIN + 'blog/list', // chat id as param
        getSocialMedia: API_DOMAIN + 'get-socialmedia', // chat id as param
        getTermsAndCondition: API_DOMAIN + 'Terms/condition/page', // chat id as param
        getRefundPolicy: API_DOMAIN + 'Refund/Policy/page', // chat id as param
        getPrivacyPolicy: API_DOMAIN + 'Privacy/Policy/page', // chat id as param
        getAboutUs: API_DOMAIN + 'Aboutus/page', // chat id as param
        getContactInfo: API_DOMAIN + 'get/contactInfo', // chat id as param
    },
    SUBCRIPTION: {
        SHOW_Subcription: API_DOMAIN + 'show-subscription',
    },
    PRODUCT_DETAILS: {
        GET_SPECIFIC_PRODUCT_DETAILS: + 'get-product/detail/23',
    },
    AUTH: {
        Buyer_Login: API_DOMAIN + 'buyer-login',
        Seller_Login: API_DOMAIN + 'seller-login',
        Verify_User: API_DOMAIN + 'get/authdata',
    }


}

export default API_DOMAIN;
