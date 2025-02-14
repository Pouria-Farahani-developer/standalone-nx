import type { MenuProps } from 'antd';
import React from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { MenuItem } from '../types';


const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};


export const items: MenuItem[] = [
  getItem('داشبورد', '1', <PieChartOutlined />),
  getItem('دسترسی مدیریت', '2', <DesktopOutlined />),
  getItem('کاربران', 'sub1', <UserOutlined />, [
    getItem('حمیدرضا', '3'),
    getItem('سنا', '4'),
    getItem('شکوفه', '5'),
  ]),
  getItem('تیم ها', 'sub2', <TeamOutlined />, [getItem('تیم اول', '6'), getItem('تیم دوم', '8')]),
  getItem('فایل ها', '9', <FileOutlined />),
];

export const stepItems = [
  {
    title: 'شروع تولید محتوا',

  },
  {
    title: 'در حال انجام',

  },
  {
    title: 'اتمام کار',
  },
]

export const breadcrumbItems = [{ title: 'کاربران' }, { title: 'سنا' }];
