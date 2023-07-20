
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../components/Header/HeaderTop'
import HeaderBot from '../components/Header/HeaderBot'
import '../scss/Login.scss'
import { savePaymentMethod } from '../redux/actions/cartActions';
import CheckoutStep from '../components/CheckoutStep.js';
const PaymentScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress) {
        navigate('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')




    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return (
        <>
            <HeaderTop />
            <HeaderBot />
            <div className='main'>
                <div className='sec-80'>
                    <div className='form__wrap conn'>
                        <CheckoutStep step1 step2 step3 />
                        <h2 className='sec-title form__title'>Payment Method</h2>
                        {/* {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />} */}
                        <form onSubmit={submitHandler}>
                            <div className='form'>
                                <h4 style={{ fontWeight: '600' }}>Select Method</h4>

                                <input  
                                    type="radio"
                                    id="PayPal"
                                    name="paymentMethod"
                                    value="PayPal"
                                    style={{ margin: '20px' }}
                                    checked
                                    onChange={(e) => setPaymentMethod(e.target.value)} />
                                <label for="html">PayPal or Credit Card</label><br />
                                <input
                                    type="radio"
                                    id="Stripe"
                                    name="paymentMethod"
                                    style={{ margin: '20px' }}
                                    value="Stripe"
                                    onChange={(e) => setPaymentMethod(e.target.value)} />
                                <label for="html">Stripe</label>

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

export default PaymentScreen
