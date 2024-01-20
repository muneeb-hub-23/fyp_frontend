import { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "./Logo";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MenuList from "./MenuList";
import ToggleThemeButton from "./ToggleThemeButton";

const { Header, Sider } = Layout;

function SideBAR({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setcollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider
          className="sidebar"
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
        </Sider>
        <Layout>
          <Header className="topbar" style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              className="Responsive"
              onClick={() => setcollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
          </Header>
          {children}
        </Layout>
      </Layout>
    </>
  );
}

export default SideBAR;

