import React from 'react'
import '../../scss/FavoriteProduct.scss'
const FavoriteProduct = () => {
    return (
        <div className='container'>
            <div className='mfp-content'>
                <div id="wish" className='popup__container'>
                    <div className='wish'>
                        <div className='wish__head fl-ct'>
                            <div className='title'>Sản phẩm yêu thích</div>
                            <div className='wish__close closeBtn'>Đóng</div>
                        </div>
                        <hr />
                        <div className='wish__con'>
                            <span className='w-not-found'>Không có sản phẩm yêu thích nào!</span>
                            <div className='wish__random'>
                                {/* <div class="wish__random">
                                <div class="title">RanDom Pack</div>
                                <div class="txt">
                                    The product package contains random products with a preferential price of 149,000 VND
                                    <br />
                                    Offers for all bills from 500,000 VND: Freeship at website, extra discount voucher on e-commerce channel.
                                </div>
                                <a href="https://levents.asia/shop/" class="btn-sec">Promotion</a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FavoriteProduct