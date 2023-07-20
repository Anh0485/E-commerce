import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userDetailReducer,
    userLoginReducer,
    userRegisterReducer,
    userUpdateProfileReducer
} from './reducers/userReducers'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { orderCreateReducer } from './reducers/orderReducer'
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
})

const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}


const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    cart: { cartItems: cartItemFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store