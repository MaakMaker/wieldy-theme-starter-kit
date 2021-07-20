import React, { useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import AppLink from "components/AppLink";

import { SettingActions } from "app-redux/settings";

function SidebarContent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = useSelector((state) => state.settings.pathname);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(SettingActions.setPathname(router.pathname));
  }, [router.pathname, dispatch]);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <>
      <div className="gx-layout-sider-header">
        <Link href="/">
          <a className="gx-site-logo">
            <img alt="logo2" src="/images/logo.png" />
          </a>
        </Link>
      </div>
      <div className="gx-sidebar-content">
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          theme="dark"
          mode="inline"
        >
          <Menu.ItemGroup key="apps" className="gx-menu-group" title="Apps">
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
          </Menu.ItemGroup>

          {user.role === "admin" && (
            <Menu.ItemGroup key="admin" className="gx-menu-group" title="Admin">
              <Menu.Item key="users">
                <AppLink href="/users">
                  <i className="icon icon-user" />
                  <span>Users</span>
                </AppLink>
              </Menu.Item>
              <Menu.Item key="data">
                <AppLink href="/data">
                  <i className="icon icon-data-display" />
                  Data
                </AppLink>
              </Menu.Item>
            </Menu.ItemGroup>
          )}
        </Menu>
      </div>
    </>
  );
}

export default SidebarContent;
