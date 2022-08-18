import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    let monthName;
    switch (date.getMonth())
    {
        case 0: monthName = "января"; break;
        case 1: monthName = "февраля"; break;
        case 2: monthName = "марта"; break;
        case 3: monthName = "апреля"; break;
        case 4: monthName = "мая"; break;
        case 5: monthName = "июня"; break;
        case 6: monthName = "июля"; break;
        case 7: monthName = "августа"; break;
        case 8: monthName = "сентября"; break;
        case 9: monthName = "октября"; break;
        case 10: monthName = "ноября"; break;
        case 11: monthName ="декабря"; break;
    }

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
            console.log(date)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setDate(date)
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime =  date?.getHours().toString() +':' + date?.getMinutes().toString() + ':' + date?.getSeconds().toString()// fix with date
    const stringDate = date.getDate().toString() + ' ' + monthName + ' '+ date.getFullYear().toString()// fix with date

    return (
        <div>
            <div className={s.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
