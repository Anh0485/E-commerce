import React from 'react'
import '../scss/Login.scss'
const Login = () => {
    return (
        <div className='main'>
            <div className='sec-80'>
                <div className='form__wrap conn'>
                    <h2 className='sec-title form__title'>Đăng nhập</h2>
                    <form >
                        <div className='form'>
                            <div className='form__txt'>
                                Bạn chưa có tài khoản?
                                <a href="/register" className='form__link'>Đăng ký</a>
                            </div>
                            {/* <input type='hidden' id="mona_sort_nonce" name="mona"></input> */}
                            <input type="text" name="user_name" required className='rs-form form__inp' placeholder="Email hoặc số điện thoại" />
                            <input type="password" name="user_pass" required className='rs-form form__inp' placeholder="Mật khẩu" />
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
                                <button className='rs-form btn-pri c-whi form__submit-small m-btn-loading'>
                                    Đăng nhập
                                </button>
                            </div>
                            <div id="response-login"></div>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default Login