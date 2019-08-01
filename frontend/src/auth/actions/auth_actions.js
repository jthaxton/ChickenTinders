export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";

export const registerUser = data => ({type: REGISTER_USER, data});
export const registerUserSuccess = data => ({type: REGISTER_USER_SUCCESS, data});

