import React from "react";
import { Rate } from "antd";
import style from "./SnusItem.module.css"
import { SnusItemEditor } from "../SnusItemEditor/SnusItemEditor";

interface ISnusItem {
    snusProps: {
        name: string;
        taste: string;
        packs: number;
        nicotine: number;
        saturation: string;
        price: number;
        avatar: string;
        rate: number;
    }
}

export const SnusItem: React.FC<ISnusItem> = ({ snusProps }) => {
    return (
        <div className={style.snus_item}>
            <div className='snus-item-inner'>
                <img className={style.snus_avatar_img}
                    style={{ width: 250 }}
                    src={snusProps.avatar}
                    alt={snusProps.name}
                    draggable={false}
                />
                <div className={`${style.snus_item__title} ${style.description_center}`}>{snusProps.name}</div>
                <div className={`${style.snus_item__taste} ${style.description_center}`}>{snusProps.taste}</div>
                <div className={style.description_center}>
                    <Rate disabled defaultValue={snusProps.rate} />
                </div>
                <div className={style.snus_item__info}>
                    <div className={style.description_center}>
                        <span className={style.gray}>Пакетиков: </span>{snusProps.packs} шт</div>
                    <div className={style.description_center}>
                        <span className={style.gray}>Никотин: </span>{snusProps.nicotine} мг
                    </div>
                </div>
                <div className={style.snus_item__price}>{snusProps.price} ₽</div>
                <div>
                    <div className={style.snus_item__buy_inner}>
                        <SnusItemEditor snusProps={snusProps}/>
                    </div>
                </div>
            </div>
        </div>
    )
}