import React from 'react'
import {Card, Layout, Typography, Row, Col} from "antd";

export const About = () =>{
    const {Title} = Typography;
    const { Content, Footer } = Layout;

    return(
        <Layout>
            <div
                style={{
                    width: "100vw",
                    backgroundColor: "#fff"
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <Title
                        type="secondary"
                    >
                        Hi! this is youthke's page
                    </Title>
                </div>
            </div>
            <Content>
                <div style={{ margin: "30px" }}>
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <Card>
                                <Title level={3} style={{ marginLeft: 10, marginBottom: 25 }}>
                                    名前
                                </Title>
                                <div>
                                    浅野　耀介
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer/>
        </Layout>
    )
}