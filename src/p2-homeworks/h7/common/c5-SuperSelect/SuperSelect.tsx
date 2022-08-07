import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}
const classes = {
    background: 'none',
    width: '100px',
    margin: '20px',
    color : '#BDAE82',
    border: '2px solid #BDAE82',
    borderRadius: '2px'
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
        return <option key={ 'option -' + i } value={o}>{o}</option>
    });


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select  style={classes} value={value} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect