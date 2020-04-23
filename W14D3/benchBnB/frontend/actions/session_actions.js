export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"


import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const loginCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const createUser = user => dispatch => (
    APIUtil.signup(user)
    .then(response => {
        dispatch(receiveCurrentUser(response))
        return response
    }).fail(errors => dispatch(receiveSessionErrors(errors)))
)

// export const createUser = (user) => {
//         return (dispatch) => {
//             APIUtil.signup(user)
//                 .then(response => dispatch(receiveCurrentUser(response))
//                 }
//         }

export const loginUser = user => dispatch => (
    APIUtil.login(user)
    .then(response => {
        dispatch(loginCurrentUser(response))
        return response
    })
)

export const logoutUser = () => dispatch => (
    APIUtil.logout()
    .then(() => {
        dispatch(logoutCurrentUser())
    })
)