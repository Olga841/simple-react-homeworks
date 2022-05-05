import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'


function Header() {
    const [classes, setClasses] = useState<string>(`${s.header}`);
    const onClickHandler = () => {
        if (classes === `${s.header}`) {
            setClasses(`${s.active}`)
        } else {
            setClasses(`${s.header}`)
        }
        console.log(classes)
    }
    return (
        <>
            <div className={classes}>
                <NavLink to={'/pre-junior'} className={s.item}>pre-junior</NavLink>
                <NavLink to={'/junior'} className={s.item}>junior</NavLink>
                <NavLink to={'/junior-plus'} className={s.item}>junior-plus</NavLink>
                <NavLink to={'/*'}></NavLink>
                <button onClick={onClickHandler} className={s.button}>x</button>
            </div>

        </>

    )
}

export default Header
