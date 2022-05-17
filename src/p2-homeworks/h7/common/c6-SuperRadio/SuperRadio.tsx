import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {Radio, FormControl, RadioGroup, FormControlLabel} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)// onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <FormControl style={{margin: 10, color: "#BDAE82"}}>
            <RadioGroup key={name + '-' + i}
                name={name}
                value={o}
                onChange={onChangeCallback}
            >
                <FormControlLabel  checked={value === o} control={<Radio color="success"/>} label={o} />
            </RadioGroup>
        </FormControl>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
