import {Card, Col, Layout, Row, Typography} from "antd";
import React from "react";
import image1 from "./../../img/violet-image-mypage.png"


export const Violet = () =>{
    const {Title} = Typography;
    return (
        <Layout>
            <Layout.Content>
                <div style={{margin:"30px"}}>
                    <Typography.Title level={2}>violet</Typography.Title>
                    <Row type={"flex"} justify={"center"}>
                       <Col span={12}>
                           <Card>
                               <Title level={1}>violetとは...?</Title>
                               Violetとは, 東京学芸大学櫨山研究室で行われるゼミの資料を管理するためのシステムです.
                               <Typography.Title level={1}>
                                   なぜ作成することになったか?
                               </Typography.Title>
                               <div>
                                   <p>私の所属する研究室では月に一回進捗を報告するゼミを行います.</p>
                                   <p>その際に,自分の進捗を報告するための資料を研究室のメンバーに共有することになっています.</p>
                                  <p> 元々はメールで共有をしていたのですが,今回システムを作成して管理しやすくしました.</p>
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
                                           <li>ESLint</li>
                                       </ul>
                                       <li>バックエンド</li>
                                       <ul>
                                           <li>Golang</li>
                                           <li>Layered architecture</li>
                                           <li>gin</li>
                                           <li>gorm</li>
                                           <li>mysql</li>
                                       </ul>
                                       <li>CI/CD</li>
                                       <ul>
                                           <li>Jenkins</li>
                                           <li>GitHub Actions</li>
                                       </ul>
                                       <li>インフラ技術</li>
                                       <ul>
                                           <li>Docker</li>
                                           <li>nginx</li>
                                       </ul>
                                   </ul>
                               </div>
                               <div>
                                   <Title>資料写真</Title>
                                   MyPage画面
                                   <img src={image1} width={640} height={360}/>
                               </div>
                           </Card>
                       </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    );
};
