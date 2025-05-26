import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useNavigate } from 'react-router-dom';

interface MTabsProps extends TabsProps {
  routes: string[]
}

const MTabs: React.FC<MTabsProps> = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (tabKey: 'main'|'other') => {
    navigate(`/dashboard/${tabKey}`)
  }

  return(
    <Tabs 
      defaultActiveKey="1" 
      items={props.routes.map(
        (element: string) => ({
          key: element.toLowerCase(),
          label: element
        }))} 
      onChange={(key) => handleNavigate(key as 'main'|'other')}
      {...props}
    />
  )
}

export default MTabs;