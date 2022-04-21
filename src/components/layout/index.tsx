import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {Link,useLocation} from "react-router-dom";

const { Header, Sider, Content } = Layout;
type Props = { title?: string, children?: React.ReactNode};


const SiderDemo: React.FC<Props> = (props) => {

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [selectedKeys, setSelectedKeys] = useState<Array<string>>(['1'])
const items = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: <Link to={"/"}>Home</Link>,
    path: '/'
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: <Link to={"/about"}>About</Link>,
    path: '/about'
  },
]
  const toggle = () => {
    setCollapsed(!collapsed)
  };

 let location = useLocation();

  useEffect(()=>{
    const {pathname} = location
    const selectedKeys = items.find(item=> item.path===pathname)

    if (selectedKeys){
      setSelectedKeys([selectedKeys.key])
    }
  }, [location])

    return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectedKeys}
                items={items}
            />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: "100vh",
                }}
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>)
}

export default SiderDemo
