import React, { ChangeEvent } from "react";
import { Input } from "antd";
import Store from "../../../mobx/store";
import { observer } from 'mobx-react-lite';

export const Filter = observer(() => {
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        Store.setFilterValue(e.target.value);
    }

    return <>
        <Input.Search value={Store.inputFilterValue} onChange={inputHandler} placeholder="Поиск по названию/вкусу" />
    </>
})