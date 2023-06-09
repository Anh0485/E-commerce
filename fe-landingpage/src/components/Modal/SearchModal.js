import React from 'react'
import '../../scss/Header.scss'
const SearchModal = () => {
    return (
        <div className='ser actPanel'>
            <div className='con-m'>
                <div className='ser__form'>
                    <form tabIndex={-1}>
                        <div className='ser__form__wrap fl-con'>
                            <input type="search" name="s" className='rs-form ser__form__inp' placeholder='Search Top...' />
                            <button type='submit' className='rs-form ser__form__btn btn-pri c-whi hov-df'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SearchModal