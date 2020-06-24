import {Card, Col, Layout, Row, Typography} from "antd";
import React from "react";

export const Contact = () => {
    const {Title} = Typography;
    return(
        <Layout>
            <Layout.Content>
                <div style={{margin: "30px"}}>
                    <Row type={"flex"} justify={"center"}>
                       <Col span={12}>
                           <Card>
                               <Title level={3}>Contact</Title>
                               <p><a href={"https://twitter.com/EkerqY3"}>Twitter</a></p>
                               <p><a href={"https://github.com/youthke"}>GitHub</a></p>
                           </Card>
                       </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    )
};