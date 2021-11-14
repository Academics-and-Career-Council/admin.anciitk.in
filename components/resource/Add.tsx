import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { gql } from "@apollo/client";
const ADD_RESOURCE = gql`
  query getTitles($wing: String!) {
  getTitlessByWing(wing: $wing) {
    title
  }
}
`

const menu = ()=>  (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const Add: React.FC = () => {
  return (
  <Dropdown overlay={menu}>
    <Button>Choose Category</Button>
  </Dropdown>
  )
};

export default Add;
