import React from "react";
import { FC } from "react";
import s from "./radioItem.module.scss"
import { Icon, Text, Button } from "../../ui";

interface IRadioItemProps{
    isActive: boolean;
    text: string;
    name: string;
    onClick:(id:string)=>void
}

const RadioItem: FC<IRadioItemProps> = ({isActive, text, name, onClick}) => {
    const handleClick =()=>{
        onClick(name)
    }

    return(
        <label htmlFor={name} className={s.radioItem}>
            {!isActive?<Icon name='checked' size={20}/>:<Icon name='unchecked' size={20}/>}
            <Text type={isActive?'default':'crossed'}>{text}</Text>
            <Button className={s.radioItem__button} id={name} type='button' onClick={handleClick} />
        </label>
    )
}

export default RadioItem;