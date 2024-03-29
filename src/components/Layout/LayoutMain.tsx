import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import style from "./LayoutMain.module.css";
import { Store } from '../../Page/Store/Store';
const { Header, Sider, Content } = Layout;

export const LayoutMain: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, [])
    
    return (
        <>
            <Layout className={style.application_layout}>
                <Sider>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Стор',
                                onClick: () => navigate("/")
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'Активные заказы',
                                onClick: () => navigate("/active")
                            },
                            {
                                key: '3',
                                icon: <VideoCameraOutlined />,
                                label: 'Отправленные',
                                onClick: () => navigate("/sended")
                            },
                            {
                                key: '4',
                                icon: <UploadOutlined />,
                                label: 'Готовые',
                                onClick: () => navigate("/all")
                            },
                            {
                                key: '5',
                                icon: <UploadOutlined />,
                                label: 'Добавить товар',
                                onClick: () => navigate("/add")
                            }
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Store />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}