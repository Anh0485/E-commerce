import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../components/Header/HeaderTop'
import HeaderBot from '../components/Header/HeaderBot'
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../scss/Login.scss'
import { useLocation } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../redux/actions/userActions';
import { Row, Col } from 'react-bootstrap'

const ProfileScreen = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { error, loading, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;


    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        } else {
            console.log(user.name)
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                console.log(user.name)
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, navigate, user])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }

    return (
        <>
            <HeaderTop />
            <HeaderBot />
            <Row>
                <Col md={3}>
                    <div className='main'>
                        <div className='sec-80'>
                            <div className='form__wrap conn'>
                                <h2 className='sec-title form__title'>User Profile</h2>
                                {error && <Message variant='danger'>{error}</Message>}
                                {success && <Message variant='success'>Profile Update</Message>}
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

                                        <div className='fl-wrap aln-ct form__bot form__mb'>
                                            <button
                                                type="submit"
                                                className='rs-form btn-pri c-whi form__submit-small m-btn-loading'
                                                style={{ marginLeft: 'auto' }}>
                                                Update
                                            </button>
                                        </div>
                                        <div id="response-login"></div>
                                    </div>

                                </form>
                            </div>
                        </div >
                    </div >
                </Col>
                <Col md={9}>
                    <div className='main'>
                        <div className='sec-80'>
                            <div className='form__wrap conn'>
                                <h2 className='sec-title form__title'>My Orders</h2>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>


    )
}

export default ProfileScreen