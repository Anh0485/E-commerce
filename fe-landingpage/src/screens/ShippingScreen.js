import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../components/Header/HeaderTop'
import HeaderBot from '../components/Header/HeaderBot'
import '../scss/Login.scss'
import { saveShippingAddress } from '../redux/actions/cartActions';
import CheckoutStep from '../components/CheckoutStep.js';

const ShippingScreen = () => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    console.log('cart', cart)

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }
    return (
        <>
            <HeaderTop />
            <HeaderBot />
            <div className='main'>
                <div className='sec-80'>
                    <div className='form__wrap conn'>
                        <CheckoutStep step1 step2 />
                        <h2 className='sec-title form__title'>Shipping</h2>
                        {/* {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader />} */}
                        <form onSubmit={submitHandler}>
                            <div className='form'>
                                <input
                                    type="text"
                                    value={address}
                                    name="address"
                                    required
                                    className='rs-form form__inp'
                                    placeholder="Enter address"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={city}
                                    name="city"
                                    required
                                    className='rs-form form__inp'
                                    placeholder="Enter City"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={postalCode}
                                    name="postalcode"
                                    required
                                    className='rs-form form__inp'
                                    placeholder="Enter Postal Code"
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={country}
                                    name="country"
                                    required
                                    className='rs-form form__inp'
                                    placeholder="Enter country"
                                    onChange={(e) => setCountry(e.target.value)}
                                />

                                <div className='fl-wrap aln-ct form__bot form__mb'>
                                    <button
                                        type="submit"
                                        className='rs-form btn-pri c-whi form__submit-small m-btn-loading'
                                        style={{ marginLeft: 'auto' }}>
                                        Continue
                                    </button>
                                </div>
                                <div id="response-login"></div>
                            </div>

                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ShippingScreen
