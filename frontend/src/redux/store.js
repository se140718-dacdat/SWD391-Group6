import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import studentReducer from "./studentSlice";
import companyReducer from "./companySlice";
import recruitmentReducer from "./recruitmentSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    student: studentReducer,
    company: companyReducer,
    recruitment: recruitmentReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)