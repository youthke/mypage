import React from 'react'
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom"


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
                    <Link to={"/"}>about</Link>
                </Menu.Item>
                <SubMenu
                    title={
                        <span>
                            <span>products</span>
                        </span>
                    }>
                    <Menu.Item>
                        <Link to={"/products/violet"}>violet</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item>
                    <Link to={"/contact"}>Contact</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
