import { PageHeaderWrapper } from '@ant-design/pro-components';
import React from 'react';

const Admin: React.FC = (props) => {
  const { children } = props;
  //children是子页面的信息，可以把子页面的信息嵌套在父页面的任何位置,这里的子页面就是管理页面（UserManage里的页面）
  return (
    <PageHeaderWrapper>{children}</PageHeaderWrapper>
  );
};
export default Admin;
