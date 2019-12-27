export const REFRESH_RESTAURANTS = "REFRESH_RESTAURANTS";
export const refreshRestaurants = data => ({type: REFRESH_RESTAURANTS, data});

export const REFRESH_RESTAURANTS_SUCCESS = "REFRESH_RESTAURANTS_SUCCESS";
export const refreshRestaurantsSuccess = data => ({type: REFRESH_RESTAURANTS_SUCCESS, data});

export const CREATE_PENDING_INTEREST = "CREATE_PENDING_INTEREST";
export const createPendingInterest = data => ({type: CREATE_PENDING_INTEREST, data})

export const CREATE_PENDING_INTEREST_SUCCESS = "CREATE_PENDING_INTEREST_SUCCESS";
export const createPendingInterestSuccess = data => ({type: CREATE_PENDING_INTEREST_SUCCESS, data})

export const DELETE_PENDING_INTEREST = "DELETE_PENDING_INTEREST";
export const deletePendingInterest = data => ({type: DELETE_PENDING_INTEREST, data})

export const DELETE_PENDING_INTEREST_SUCCESS = "DELETE_PENDING_INTEREST_SUCCESS";
export const deletePendingInterestSuccess = data => ({type: DELETE_PENDING_INTEREST_SUCCESS, data})
