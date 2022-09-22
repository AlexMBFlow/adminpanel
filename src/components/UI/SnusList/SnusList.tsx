import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Spin } from "antd"
import { getStore } from '../../../api/getStore';
import { SnusItem } from "../SnusItem/SnusItem";
import Store from "../../../mobx/store";
import style from "./SnusList.module.css";

export const SnusList = observer(() => {
    const spinStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    
    const getData = async () => {
        const data = await getStore();
        Store.setSnusStore(data);
        Store.setStoreLoading(false);
    }

    useEffect(() => {
        getData();
        return () => {
            Store.setStoreLoading(true);
        }
    }, [])

    return (
        <div style={spinStyle} className={style.snus_list}>
            {Store.isStoreLoading ? <Spin /> : Store.snusList.map(snus => <SnusItem snusProps={snus} key={uuidv4()} />)}
        </div>
    )
})