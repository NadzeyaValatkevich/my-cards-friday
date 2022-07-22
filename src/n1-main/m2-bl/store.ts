import {applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import { legacy_createStore as createStore} from 'redux'
import {loginReducer} from "../../n2-features/f1-auth/a1-login/login-reducer";
import {registrationReducer} from "../../n2-features/f1-auth/a2-registration/registration-reducer";
import {profileReducer} from "../../n2-features/f1-auth/a3-profile/profile-reducer";
import {errorReducer} from "../../n2-features/f1-auth/a4-Error404/error-reducer";
import {recoveryReducer} from "../../n2-features/f1-auth/a5-recovery-password/recovery-reducer";
import {newPasswordReducer} from "../../n2-features/f1-auth/a6-newPassword/newPassword-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    isRegistration: registrationReducer,
    isInitialized: profileReducer,
    error: errorReducer,
    isRecovery: recoveryReducer,
    newPassword: newPasswordReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;