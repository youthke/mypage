import {Card, Col, Layout, Row, Typography} from "antd";
import React from "react";
import homeImage from "./../../img/questack-home.png"
import questionImage from "./../../img/questions.png"


export const Questack = () =>{
    const {Title} = Typography;
    return (
        <Layout>
            <Layout.Content>
                <div style={{margin:"30px"}}>
                    <Typography.Title level={2}>questack</Typography.Title>
                    <Row type={"flex"} justify={"center"}>
                        <Col span={12}>
                            <Card>
                                <Title level={1}>questackとは...?</Title>
                                URLがわかるだけで質問ができる質問募集所
                                <Typography.Title level={1}>
                                    なぜ作成することになったか?
                                </Typography.Title>
                                <div>
                                    <p>コロナウイルの影響でなんでもリモート化. </p>
                                    <p>zoomというURLだけで参加できる会議をみて, URLを知ってる人なら参加できる質問募集所が頭に浮かんだ</p>
                                    <p>自身の技術を公開してみようと考えました.</p>
                                    <p>サーバーにはまだあげていません.</p>
                                </div>
                                <Title level={1}>使用した技術</Title>
                                <div>
                                    <ul>
                                        <li>フロント側</li>
                                        <ul>
                                            <li>Next.js</li>
                                            <li>Context API</li>
                                            <li>React Hooks</li>
                                            <li>TypeScript</li>
                                            <li>Ant Design</li>
                                        </ul>
                                        <li>バックエンド</li>
                                        <ul>
                                            <li>Golang</li>
                                            <li>Layered architecture</li>
                                            <li>gin</li>
                                            <li>gorm</li>
                                            <li>mysql</li>
                                        </ul>
                                        <li>インフラ技術</li>
                                        <ul>
                                            <li>Docker</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div>
                                    <Title>ソースコード</Title>
                                    <p><a href={"https://github.com/youthke/questack_web"}>フロントエンド</a></p>
                                    <p><a href={"https://github.com/youthke/questack-api"}>バックエンド</a></p>
                                </div>
                                <div>
                                    <Title>資料写真</Title>
                                    <div>
                                        ownerのhome
                                        <img src={homeImage} width={640} height={360}/>
                                    </div>
                                    <div>
                                        stackの質問一覧
                                        <img src={questionImage} width={640} height={360}/>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    );
};
