import React from 'react'
import '../scss/Banner.scss'
const Banner = () => {
    return (
        <div className='main'>
            <div className='ban__img'>
                <div className='rto-box'>
                    <img className='ban__des' src='https://levents.asia/wp-content/uploads/2023/05/Dekstop-1-Black-1-1536x790.png' />
                </div>
            </div>
            <div className='ban__content fl-col'>
                <div className='mg-t'>
                    <a href="/cuahang" className='btn-pri-whi ban__btn hov-df'>
                        Bộ sưu tập mới
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner