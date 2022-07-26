import React, {DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import {FormControl, MenuItem} from "@mui/material";
import Select, {SelectChangeEvent} from '@mui/material/Select';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((item, index: any) => <MenuItem key={index}
                                                                                  value={item}>{item}</MenuItem>) : []; // map options with key
    const onChangeCallback = (e: SelectChangeEvent) => {
        //onChange && onChange(e)
        onChangeOption && onChangeOption(e.target.value)// onChange, onChangeOption
    }

    return (

        <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>

            <Select onChange={onChangeCallback}>
                {mappedOptions}
            </Select>
        </FormControl>
    )
}

export default SuperSelect
