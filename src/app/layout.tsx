import React from 'react';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import fa_IR from 'antd/lib/locale/fa_IR';
import 'antd/dist/reset.css'; // Reset Ant Design styles
import '@ant-design/v5-patch-for-react-19'; // Ensure compatibility for React 19
import './global.css'; // Import your global CSS file

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="fa">
  <body>
  <ConfigProvider locale={fa_IR} direction="rtl">
    <AntdRegistry>{children}</AntdRegistry>
  </ConfigProvider>
  </body>
  </html>
);

export default RootLayout;
