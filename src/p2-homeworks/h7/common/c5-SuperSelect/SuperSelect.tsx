import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import './SuperSelect.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}


const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] | undefined = options?.map((o, i) => {
        return <option className={'option'} key={ 'option -' + i } value={o}>{o}</option>
    });


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={'select'} value={value} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect