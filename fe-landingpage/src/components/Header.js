import React, { useState } from 'react'
// import {logo} from 'https://levents.asia/wp-content/uploads/2021/10/logo.png'
import '../scss/Header.scss'
import FavoriteProduct from './Modal/FavoriteProduct'

const Header = () => {
    const [Open, setOpen] = useState(false);


    return (
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
                                <div className='notification__btn__child' onClick={() => setOpen(true)}>
                                    <img src="https://levents.asia/template/assets/images/notification.png"></img>
                                    <div className='cart__num '>
                                        2
                                    </div>
                                </div>
                                {Open &&
                                    <ul className='notification__list hov-df' Open={Open}>
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
                            <a href="" className='wish__btn dp-block popBtn' onClick={() => setOpen(true)}>Sản phẩm yêu thích</a>
                        </div>
                    </div>
                </div>
            </div>
            {Open && <FavoriteProduct/>}

        </div>

    )
}

export default Header