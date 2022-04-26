import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2"
import {deleteAffair} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {


    return (
        <div className={s.someClass}>
            <button onClick={() => props.deleteAffairCallback(props.affair._id)}>X</button>
            <span>{props.affair._id}. {props.affair.name} {props.affair.priority}</span>
        </div>
    )
}

export default Affair
