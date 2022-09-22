import React, { useState } from "react";
import { Button, Modal, Form, Upload, InputNumber, Switch, Input, Select, notification, message } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import { sendEdit } from "../../../api/sendEdit";
import Store from "../../../mobx/store";


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
        _id: string
    }
}

interface IResult {
    name: string;
    taste: string;
    packs: number;
    nicotine: number;
    saturation: string;
    price: number;
    avatar: string;
    _id: string;
    rate: number
}

export const SnusItemEditor: React.FC<ISnusItem> = ({ snusProps }) => {
    const { name, saturation, nicotine, price, packs, avatar, taste, _id, rate } = snusProps;
    // Функции формы
    const [nameEdit, setNameEdit] = useState<string>(name);
    const [tasteEdit, setTasteEdit] = useState<string>(taste);
    const [saturationEdit, setSaturationEdit] = useState<string>(saturation);
    const [nicotineEdit, setNicotineEdit] = useState<number>(nicotine);
    const [priceEdit, setPriceEdit] = useState<number>(price);
    const [packsEdit, setPacksEdit] = useState<number>(packs);
    const [avatarEdit, setavatarEdit] = useState<string>(avatar); // TODO
    const nicotineEditHandler = (e: number | null) => {
        if (e) {
            setNicotineEdit(e);
        }
    }

    const priceHandler = (e: string) => {
        const price = +e;
        if (!isNaN(price)) setPriceEdit(price);
    }

    const packsHandler = (e: number | null) => {
        if (e) {
            setPacksEdit(e);
        }
    }

    // Функции модалки
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const resetEditor = () => {
        setNameEdit(name);
        setTasteEdit(taste);
        setSaturationEdit(saturation);
        setNicotineEdit(nicotine);
        setPriceEdit(nicotine);
        setPriceEdit(price);
        setPacksEdit(packs);
    }

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        const result: IResult = {
            name: nameEdit,
            taste: tasteEdit,
            packs: packsEdit,
            nicotine: nicotineEdit,
            saturation: saturationEdit,
            price: priceEdit,
            avatar: avatarEdit,
            rate: rate,
            _id
        }



        setConfirmLoading(true);
        //console.log(result);
        sendEdit(result).then(res => {
            if (res.status === 200) {
                message.success("Успешно!")
                setConfirmLoading(false);
                setOpen(false);
                Store.setResultAfterEditing(result)
            } else {
                notification.error({
                    message: "Внимание!",
                    description: "Не получилось отредактировать товар",
                    placement: "bottomRight"
                })
            }
        });
        /*         setTimeout(() => {
                    setOpen(false);
                    setConfirmLoading(false);
                }, 2000); */
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        resetEditor()
        setOpen(false);
    };

    const { Item } = Form;
    const { Option } = Select
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Редактировать
            </Button>
            <Modal
                title="Редактор товара"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={700}
            >

                <Form labelCol={{
                    span: 4
                }}
                    wrapperCol={{
                        span: 14
                    }}
                    layout="horizontal">
                    <Item label="Название">
                        <Input value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
                    </Item>
                    <Item label="Вкус">
                        <Input value={tasteEdit} onChange={(e) => setTasteEdit(e.target.value)} />
                    </Item>
                    <Item label="Насыщенность">
                        <Select value={saturationEdit} onChange={(e) => setSaturationEdit(e)}>
                            <Option value="test1">Легкий</Option>
                            <Option value="test2">Средний</Option>
                            <Option value="test3">Крепкий</Option>
                            <Option value="test4">Очень крепкий</Option>
                        </Select>
                    </Item>
                    <Item label="Кол-во мг">
                        <InputNumber value={nicotineEdit} onChange={nicotineEditHandler} onStep={nicotineEditHandler} />
                    </Item>
                    <Item label="Кол-во паков">
                        <InputNumber value={packsEdit} onChange={packsHandler} onStep={packsHandler} />
                    </Item>
                    {/* TODO */}
                    <Item label="Стоимость">
                        <Input value={priceEdit} onChange={(e) => priceHandler(e.target.value)} />
                    </Item>
                    <Item label="Видимость" valuePropName="checked">
                        <Switch />
                    </Item>
                    {/* TODO */}
                    <Item label="Фото" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Item>
                    {/*                     <Item label="Button">
                        <Button>Button</Button>
                    </Item> */}
                </Form >
            </Modal>
        </>
    );
}