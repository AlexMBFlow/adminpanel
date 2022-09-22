import React, { useState } from "react";
import { Button, Modal, Form, Upload, InputNumber, Switch, Input, Select } from 'antd';
import { PlusOutlined } from "@ant-design/icons"


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

export const SnusItemEditor: React.FC<ISnusItem> = ({ snusProps }) => {
    const { name, saturation, nicotine, price, packs, avatar } = snusProps;
    const [nameEdit, setNameEdit] = useState<string>(name);
    const [saturationEdit, setsaturationEdit] = useState<string>(saturation);
    const [nicotineEdit, setnicotineEdit] = useState<number>(nicotine);
    const [priceEdit, setpriceEdit] = useState<number>(price);
    const [packsEdit, setpacksEdit] = useState<number>(packs);
    const [avatarEdit, setavatarEdit] = useState<string>(avatar);
    // Функции модалки
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    // Функции формы
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
                        <Input />
                    </Item>
                    <Item label="Вкус">
                        <Input />
                    </Item>
                    <Item label="Насыщенность">
                        <Select>
                            <Option value="test1">Легкий</Option>
                            <Option value="test2">Средний</Option>
                            <Option value="test3">Крепкий</Option>
                            <Option value="test4">Очень крепкий</Option>
                        </Select>
                    </Item>
                    <Item label="Кол-во мг">
                        <InputNumber />
                    </Item>
                    <Item label="Стоимость">
                        <Input />
                    </Item>
                    <Item label="Видимость" valuePropName="checked">
                        <Switch />
                    </Item>
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