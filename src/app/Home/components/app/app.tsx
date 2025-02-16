import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, Steps, Switch, theme } from 'antd';
import { changeLanguage, useTr } from '@myapp/libs/translation';
import { breadcrumbItems, items, stepItems } from '../../utils';
import i18n from 'i18next';

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [t] = useTr();

  const [collapsed, setCollapsed] = useState(false);

  const handleChange = () => {
    if (i18n.language === 'fa') {
      changeLanguage('en');
    } else {
      changeLanguage('fa');
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items(t)}
        />
      </Sider>
      <Layout>
        <Breadcrumb style={{ margin: '16px' }} items={breadcrumbItems} />

        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Steps direction="horizontal" current={2} items={stepItems(t)} />
            <Switch onChange={handleChange} style={{ margin: '2rem 0' }} />
            <div>
              <Button type={'primary'}>hi</Button>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
