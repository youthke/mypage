import React from 'react'
import {Layout, Menu} from "antd";


export const Header = () =>{
    const { Header } = Layout;
    const {SubMenu} = Menu;
    return(
        <Header>
            <Menu
                theme={"dark"}
                mode={"horizontal"}
            >
                <Menu.Item>
                    <a href={"/mypage"}>about</a>
                </Menu.Item>
                <SubMenu
                    title={
                        <span>
                            <span>products</span>
                        </span>
                    }>
                    <Menu.Item>
                        <a href={"/mypage/products/violet"}>violet</a>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item>
                    <a>Contact</a>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
