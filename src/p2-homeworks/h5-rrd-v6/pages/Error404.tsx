import React from 'react'
import s from './../Header.module.css'

function Error404() {
    return (
        <div className={s.error_page}>
            <div className={s.error_number}>404</div>
            <div className={s.error_name}>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
