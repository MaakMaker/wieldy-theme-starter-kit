import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";

import AppLink from "components/AppLink";

function HorizontalNav() {
  const pathname = useSelector((state) => state.settings.pathname);
  const user = useSelector((state) => state.auth.user);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <Menu.SubMenu
        popupClassName="gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve"
        key="apps"
        title="Apps"
      >
        <Menu.Item key="explore">
          <AppLink href="/explore">
            <i className="icon icon-search-new" />
            <span>Explore</span>
          </AppLink>
        </Menu.Item>
        <Menu.Item key="competitor-products">
          <AppLink href="/competitor-products">
            <i className="icon icon-orders" />
            <span>Competitor Products</span>
          </AppLink>
        </Menu.Item>

        <Menu.Item key="competitor-stores">
          <AppLink href="/competitor-stores">
            <i className="icon icon-geo-location" />
            <span>Competitor Stores</span>
          </AppLink>
        </Menu.Item>
      </Menu.SubMenu>

      {user.role === "admin" && (
        <Menu.SubMenu
          popupClassName="gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve"
          key="admin"
          title="Admin"
        >
          <Menu.Item key="users">
            <AppLink href="/users">
              <i className="icon icon-user" />
              Users
            </AppLink>
          </Menu.Item>
          <Menu.Item key="data">
            <AppLink href="/data">
              <i className="icon icon-data-display" />
              Data
            </AppLink>
          </Menu.Item>
        </Menu.SubMenu>
      )}
    </Menu>
  );
}

export default HorizontalNav;
