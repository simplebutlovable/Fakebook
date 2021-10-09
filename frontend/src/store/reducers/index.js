import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['userAuth']
}

const rootReducer = combineReducers({
    userAuth: authReducer
});


export default persistReducer(persistConfig, rootReducer);