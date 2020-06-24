import React from 'react'
import { Layout, Menu} from "antd";
import { Link } from "react-scroll"


export const Header = () =>{
    const { Header } = Layout;
    return(
        <Header>
            <Menu
                theme={"dark"}
                mode={"horizontal"}
            >
                <Menu.Item>
                    <Link to={"about"}>
                        about
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"work"}>
                        work
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={"contact"}>
                        contact
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};
