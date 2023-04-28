import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export interface IBodyHomeMainProps {
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    onClick?: (e: React.MouseEvent) => void,
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />, undefined, 'group', () => alert('click')),
    getItem('Option 2', '2', <DesktopOutlined />, undefined, 'group', () => alert('click')),
    getItem('Option 3', '3', <ContainerOutlined />),
  
    getItem('Thể loại', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  
    getItem('Tác giả', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9',),
      getItem('Option 10', '10'),
  
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];

export default function BodyHomeMain (props: IBodyHomeMainProps) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  return (
    <div style={{ width: 256, margin:'0 0 0 0' }}>
    {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button> */}
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={items}
    />
  </div>
  );
}