import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect } from 'react-router-dom'
import { login } from '../actions/userActions'
import HeaderTop from '../components/Header/HeaderTop'
import HeaderBot from '../components/Header/HeaderBot'
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../scss/Login.scss'
import { useLocation } from 'react-router-dom';

const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    const location = useLocation()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            console.log(redirect);
            // history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password);
        //DISPATCH LOGIN
        dispatch(login(email, password))
    }
    return (
        <div>
            <HeaderTop />
            <HeaderBot />
            <div className='main'>
                <div className='sec-80'>
                    <div className='form__wrap conn'>
                        <h2 className='sec-title form__title'>Đăng nhập</h2>
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader />}
                        <form onSubmit={submitHandler}>
                            <div className='form'>
                                <div className='form__txt'>
                                    Bạn chưa có tài khoản?
                                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} className='form__link'>Đăng ký</Link>
                                    {/* <a href="/register" className='form__link'>Đăng ký</a> */}
                                </div>
                                {/* <input type='hidden' id="mona_sort_nonce" name="mona"></input> */}
                                <input type="text"
                                    value={email}
                                    name="user_name"
                                    required
                                    className='rs-form form__inp'
                                    placeholder="Email hoặc số điện thoại"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    value={password}
                                    name="user_pass"
                                    required
                                    className='rs-form form__inp'
                                    placeholder="Mật khẩu"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className='form__check'>
                                    <label for="user_remember" className='fl-con'>
                                        <input type="checkbox" className='dp-none' name='user_remember' value="yes" id="user_remember" />
                                        {/* <div className='form__cbox'></div> */}
                                        <div className='form__ctxt hov-df'>
                                            Ghi nhớ tài khoản
                                        </div>
                                    </label>
                                </div>
                                <div className='fl-wrap aln-ct form__bot form__mb'>
                                    <a href="/forgotpass" className='dp-block form__link'>Quên mật khẩu</a>
                                    <button
                                        type="submit"
                                        className='rs-form btn-pri c-whi form__submit-small m-btn-loading'>
                                        Đăng nhập
                                    </button>
                                </div>
                                <div id="response-login"></div>
                            </div>

                        </form>
                    </div>
                </div >
            </div >
        </div>


    )
}

export default LoginScreen