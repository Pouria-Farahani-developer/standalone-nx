import React from 'react';
import 'antd/dist/reset.css';
import '@ant-design/v5-patch-for-react-19';
import './global.css';
import { ThemeProvider, ThemeWrapper } from '@myapp/libs/ui-kit';


const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="fa">
  <body>
  <ThemeProvider>
    <ThemeWrapper>{children}</ThemeWrapper>
  </ThemeProvider>
  </body>
  </html>
);

export default RootLayout;
