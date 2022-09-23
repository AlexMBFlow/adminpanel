import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";
import { Spin } from "antd";
import { getStore } from '../../../api/getStore';
import { SnusItem } from "../SnusItem/SnusItem";
import Store from "../../../mobx/store";
import style from "./SnusList.module.css";
import { Filter } from "../Filter/Filter";

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
        <>
            <Filter />
            <div style={spinStyle} className={style.snus_list}>
                {Store.isStoreLoading ? <Spin /> : Store.filteredStore().map(snus => <SnusItem snusProps={snus} key={uuidv4()} />)}
            </div>
        </>
    )
})