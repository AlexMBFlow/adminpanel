import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { getStore } from '../../../api/getStore';
import { SnusItem } from "../SnuSItem/SnusItem";
import { v4 as uuidv4 } from "uuid";
import Store from "../../../mobx/store";

export const SnusList = observer(() => {
    const getData = async () => {
        const data = await getStore()
        Store.setSnusStore(data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {Store.snusList.map(snus => <SnusItem snusProps={snus} key={uuidv4()} />)}
        </>
    )
})