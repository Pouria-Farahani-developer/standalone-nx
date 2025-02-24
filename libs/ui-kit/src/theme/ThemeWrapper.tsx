'use client';

import { ReactNode, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useTheme } from './ThemeContext';
import { lightTheme, darkTheme } from '@myapp/libs/ui-kit';
import fa_IR from 'antd/lib/locale/fa_IR';
import en from 'antd/lib/locale/en_US';
import { changeLanguage } from '@myapp/libs/translation';


const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, language } = useTheme();
  const antdLocale = language === 'fa_IR' ? fa_IR : en;

  useEffect(() => {
    if (language) {
      changeLanguage(language);
    }
  }, [language]);


  return (
    <ConfigProvider
      locale={antdLocale}
      direction="rtl"
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default ThemeWrapper;
