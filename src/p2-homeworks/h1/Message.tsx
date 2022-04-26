import React from 'react'
import s from './Message.module.css'

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageData) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.message_block}>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
