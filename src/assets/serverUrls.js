import serverHostName from './serverHost';

export const addProductUrl = serverHostName+"/admin-panel/products/new-product-detail";
export const getAllProductsDetailsUrl = serverHostName+"/admin-panel/products/load-all-products";
export const deleteProduct = serverHostName+"/admin-panel/products/delete-product/"; // this requires params
export const editSpecificProduct = serverHostName+"/admin-panel/products/edit-specific-product/"; // this requires params
export const updateProducts = serverHostName+"/admin-panel/products/update-products/"; // this requires params
export const signUpUserUrl = serverHostName+"/registration/signup";
export const signUpUserByFirebaseUrl = serverHostName+"/registration/signup/firebase-credentials";
export const loginUserUrl = serverHostName+"/registration/login";
export const verifyTokenUrl = serverHostName+"/registration/login/token-verification/";
export const newPassword = serverHostName+"/registration/login/new-password";
export const allUsers = serverHostName+"/users/";
export const allUsersByPage = serverHostName+"/users/";
export const makeAdmin = serverHostName+"/users/make-admin/";
export const makeManager = serverHostName+"/users/make-manager/";
export const makeDealers = serverHostName+"/dealership/make-new/";
export const deleteUser = serverHostName+"/users/delete/";
export const dealersInfo = serverHostName+"/dealership/dealers-info/";
export const allDealers = serverHostName+"/dealership/all/";
export const dealershipDetailedInfo = serverHostName+"/dealership/detailed-info/";
export const dealerSearch = serverHostName+"/dealership/search?all=";
export const allDealersCompanyName = serverHostName+"/dealership/all-company-name";
export const dealerStats = serverHostName+"/dealership/stats/";
export const dealerCars = serverHostName+"/dealership/total-cars/";
export const allCars = serverHostName+"/cars/all/";
export const loadSpecificProduct = serverHostName+"/admin-panel/products/load-specific-product/";
export const searchCars = serverHostName+"/cars/search-car";
export const allshowrooms = serverHostName+"/showrooms";
export const allbookings = serverHostName+"/bookings";
export const bookings = serverHostName+"/bookings/new";
