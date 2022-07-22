import React from 'react';
import {SuperInputText} from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import {SuperButton} from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import {SuperCheckbox} from "../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import s from '../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText.module.css'

export const Test = () => {
    return (
        <div className={s.column}>
            <SuperInputText className={s.blue}/>
            <SuperButton>Send</SuperButton>
            <SuperCheckbox/>
        </div>
    );
};