import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../components/Header/HeaderTop'
import HeaderBot from '../components/Header/HeaderBot'
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../scss/Login.scss'
import { useLocation } from 'react-router-dom';
import { getUserDetails } from '../redux/actions/userActions';
const ProfileScreen = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { error, loading, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;


    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
    }, [history, userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }

    return (
        <div>
            <HeaderTop />
            <HeaderBot />
            <div className='main'>
                <div className='sec-80'>
                    <div className='form__wrap conn'>
                        <h2 className='sec-title form__title'>Đăng ký</h2>
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader />}
                        <form onSubmit={submitHandler}>
                            <div className='form'>
                                <input type="text"
                                    value={name}
                                    name="name"
                                    required
                                    className='rs-form form__inp'
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
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
                                    <label htmlFor="user_remember" className='fl-con'>
                                        <input type="checkbox" className='dp-none' name='user_remember' value="yes" id="user_remember" />
                                        {/* <div className='form__cbox'></div> */}
                                        <div className='form__ctxt hov-df' style={{ width: 'auto', marginLeft: '10px' }}>
                                            Tôi đồng ý với các điều khoản và điều kiện, chính sách bảo mật và chính sách cookie
                                        </div>
                                    </label>
                                </div>
                                <div className='fl-wrap aln-ct form__bot form__mb'>
                                    <button
                                        type="submit"
                                        className='rs-form btn-pri c-whi form__submit-small m-btn-loading'
                                        style={{ marginLeft: 'auto' }}>
                                        Tạo
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

export default ProfileScreen