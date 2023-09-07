import React, { useState } from "react"
import { FC } from "react"
import s from './input.module.scss'
import Button from "../../ui/Button"

interface IInputProps{
    onSubmit:(text: string)=>void
}

const Input:FC<IInputProps> = ({onSubmit}) => {
    const [state, setState]=useState('');
    const handleChange = (e:React.FormEvent<HTMLInputElement>) => setState(e.currentTarget.value)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        onSubmit(state)
        setState('')
    }

    return <form className={s.input__container} onSubmit={handleSubmit}>
        <input className={s.input} type="text" value={state} onChange={handleChange}/>
        <Button type='submit' variant='submit'>  +  </Button>
    </form>
}

export default Input;