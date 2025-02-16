"use client";

import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useTheme } from './ThemeContext';
import { lightTheme, darkTheme } from '@myapp/libs/ui-kit';
import fa_IR from 'antd/lib/locale/fa_IR';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useTheme();

  return (
    <ConfigProvider locale={fa_IR} direction="rtl" theme={isDarkMode ? darkTheme : lightTheme}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default ThemeWrapper;
