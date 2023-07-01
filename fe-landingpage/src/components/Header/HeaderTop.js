import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
// import {logo} from 'https://levents.asia/wp-content/uploads/2021/10/logo.png'
import '../../scss/Header.scss'
import HomeScreen from '../../screens/HomeScreen';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../../redux/actions/userActions.js';
const HeaderTop = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [OpenFavorite, setOpenFavorite] = useState(false);


    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin



    const LogoutHandler = () => {
        dispatch(logout())
    }

    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);

    return (

        <div>
            <div className='hd_top' style={{ marginTop: 20 }}>
                <div className='con fl-ct row'>
                    <div className='col-4'>
                        {/* responsive */}
                    </div>
                    <div className='col-4 '>
                        <div className='hd__logo mg-ct'>
                            <a href='/' className='custom-logo-link'>
                                <img style={{ width: 98, height: 30 }} src="https://levents.asia/wp-content/uploads/2021/10/logo.png" />
                            </a>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='hd__list fl-con aln-ct'>
                            <div className='hd__notification pd-lr'>
                                <div className='notification__btn dp-block'>
                                    <div className='notification__btn__child'
                                        onClick={() => handleShow()}
                                    >
                                        <img src="https://levents.asia/template/assets/images/notification.png"></img>
                                        <div className='cart__num '>
                                            2
                                        </div>
                                    </div>
                                    {open &&
                                        <ul className='notification__list hov-df'>
                                            <li>
                                                <a className='item' href="/product-category">
                                                    <span className='icon'></span>
                                                    FREESHIP CHO HÓA ĐƠN TỪ 1.000.000
                                                </a>
                                            </li>
                                            <li>
                                                <a className='item' href="/product-category">
                                                    <span className='icon'></span>
                                                    MUA CÀNG NHIỀU, GIẢM CÀNG SÂU. LÊN ĐẾN 90.000Đ
                                                </a>
                                            </li>
                                        </ul>
                                    }


                                </div>
                            </div>
                            <div className='hd__wish pd-lr hd__des'>
                                <a href="" className='wish__btn dp-block popBtn' onClick={() => { setOpenFavorite(true) }}>Sản phẩm yêu thích</a>
                            </div>
                            <div className='hd__ser pd-lr hd__des'>
                                <div className='ser__btn actBtn'>
                                    <img src='https://levents.asia/template/assets/images/svg/ic-ser.svg'></img>
                                </div>
                            </div>
                            <div className='hd__cart pd-lr'>
                                <div className='cart__btn cartBtn'>
                                    <img src="https://levents.asia/template/assets/images/svg/ic-cart.svg" />
                                    <div className='cart__num c-whi f-thin'>
                                        0
                                    </div>
                                </div>
                            </div>

                            <div className='hd__user pd-lr'>
                                {userInfo
                                    ? <NavDropdown title={userInfo.name} id="username">
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={LogoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    : <a className='user__btn actBtn' href="/login">
                                        <img src="https://levents.asia/template/assets/images/svg/ic-user.svg" />
                                    </a>
                                }

                            </div>
                            <div className='hd__lang pd-lr'>
                                <div className='lang actPanel'>
                                    <div className='lang__btn actBtn fl-ct'>
                                        <img src="https://levents.asia/template/assets/images/svg/ic-vn.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {OpenFavorite && <FavoriteProduct />} */}
                </div>

            </div>
        </div>

    )
}

export default HeaderTop