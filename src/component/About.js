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
                                <Title level={5} style={{ marginLeft: 10, marginBottom: 25 }}>
                                    自己紹介
                                </Title>
                                <Title level={2} style={{ marginLeft: 10, marginBottom: 25 }}>
                                    基本情報
                                </Title>
                                <p>名前: 浅野 耀介</p>
                                <p>年齢: 24</p>
                                <p>趣味: ぷよぷよ, 散歩</p>
                                <Title level={2} style={{ marginLeft: 10, marginBottom: 25 }}>
                                    技術
                                </Title>
                                <ul>
                                    <li>Go</li>
                                    <li>React.js</li>
                                    <li>Next.js</li>
                                    <li>TypeScript</li>
                                </ul>
                                <Title level={2} style={{ marginLeft: 10, marginBottom: 25 }}>
                                    紹介文
                                </Title>
                                <div>
                                    学部2年の時にウェブアプリケーションを作ろうと大学の履修単位の管理するアプリをRailsで作成.
                                    学部3年になって, 研究室に配属され, 春の課題として, 研究室の図書を管理するアプリをグループで開発. 秋学期では, 授業内で行われるプロジェクトに参加して航空管理システムをチームで開発した.　春の課題と授業でのプロジェクトはjsp servletを使用しました.
                                    また,　1年ほどアジャイル開発を経験できるインターンに参加させていただき, Go, Reactの技術も持っています.
                                    現在は, 研究室で後輩にウェブアプリケーション制作のゼミをしたり, 卒業生の先輩と一緒に
                                    golangとNext.jsを使って開発したりしています.
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
