export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";

export const registerUser = data => ({type: REGISTER_USER, data});
export const registerUserSuccess = data => ({type: REGISTER_USER_SUCCESS, data});

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const loginUser = data => ({type: LOGIN_USER, data});
export const loginUserSuccess = data => ({type: LOGIN_USER_SUCCESS, data});

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";
export const logoutUser = data => ({type: LOGOUT_USER, data});
export const logoutUserSuccess = data => ({type: LOGOUT_USER_SUCCESS, data});
export const logoutUserFailure = data => ({type: LOGOUT_USER_FAILURE, data});
