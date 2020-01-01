export const UPDATE_USER = "PROFILE::UPDATE_USER";
export const updateUser = data => ({type: UPDATE_USER, data})

export const UPDATE_USER_SUCCESS = "PROFILE::UPDATE_USER_SUCCESS";
export const updateUserSuccess = data => ({type: UPDATE_USER_SUCCESS, data})

export const UPDATE_USER_PREFERENCES = "PROFILE::UPDATE_USER_PREFERENCES";
export const updateUserPreferences = data => ({type: UPDATE_USER_PREFERENCES, data});

export const UPDATE_USER_PREFERENCES_SUCCESS = "PROFILE::UPDATE_USER_PREFERENCES_SUCCESS";
export const updateUserPreferencesSuccess = data => ({type: UPDATE_USER_PREFERENCES_SUCCESS, data});

export const FETCH_USER_PREFERENCES = "PROFILE::FETCH_USER_PREFERENCES";
export const fetchUserPreferences = data => ({type: FETCH_USER_PREFERENCES, data});

export const FETCH_USER_PREFERENCES_SUCCESS = "PROFILE::FETCH_USER_PREFERENCES_SUCCESS";
export const fetchUserPreferencesSuccess = data => ({type: FETCH_USER_PREFERENCES_SUCCESS, data});

export const CREATE_USER_PREFERENCE = "PROFILE::CREATE_USER_PREFERENCE";
export const createUserPreference = data => ({type: CREATE_USER_PREFERENCE, data});

export const CREATE_USER_PREFERENCE_SUCCESS = "PROFILE::CREATE_USER_PREFERENCE_SUCCESS";
export const createPUserPreferenceSuccess = data => ({type: CREATE_USER_PREFERENCE_SUCCESS, data});