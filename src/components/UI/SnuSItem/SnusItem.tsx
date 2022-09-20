import React from "react";


interface ISnusItem {
    snusProps: {
        name?: string;
        taste?: string;
        packs?: number;
        nicotine?: number;
        saturation?: string;
        price?: number;
        avatar?: string;
        rate?: number;
    }
}

export const SnusItem: React.FC<ISnusItem> = ({ snusProps }) => {
    return (
        <>
        boba: {snusProps.name}
        </>
    )
}