import React from 'react';
import { Menu, Icon, } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu className="side"
        >
          <Menu.ItemGroup key="g1" >
          <Menu.Item >Mobiles</Menu.Item>
            <Menu.Item key="1">Nokia</Menu.Item>
            <Menu.Item key="2">Xiaomi</Menu.Item>
            <Menu.Item key="3">Samsung</Menu.Item>
            <Menu.Item key="4">Huwaei</Menu.Item>
            <Menu.Item key="5">Infinity</Menu.Item>
            <Menu.Item key="6">Tecno</Menu.Item>
            <Menu.Item key="7">Motorola</Menu.Item>
          </Menu.ItemGroup>
  
     
      </Menu>
    );
  }
}
export default Sider; 