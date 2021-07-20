import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Drawer, Layout } from "antd";

import SidebarContent from "layout/Sidebar/SidebarContent";
import { SettingActions } from "app-redux/settings";
import { TAB_SIZE } from "app-constants/ThemeSettings";

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const navCollapsed = useSelector((state) => state.settings.navCollapsed);
  const width = useSelector((state) => state.settings.width);
  const pathname = useSelector((state) => state.settings.pathname);

  const onToggleCollapsedNav = () => {
    dispatch(SettingActions.toggleCollapsedSideNav(!navCollapsed));
  };

  useEffect(() => {
    const onResize = () => {
      dispatch(SettingActions.updateWindowWidth(window.innerWidth));
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [dispatch]);

  useEffect(() => {
    if (router.pathname === pathname) {
      dispatch(SettingActions.toggleCollapsedSideNav(false));
    }
  }, [pathname, dispatch, router.pathname]);

  return (
    <Layout.Sider
      className="gx-app-sidebar gx-collapsed-sidebar gx-layout-sider-dark"
      trigger={null}
      collapsed={false}
      theme="dark"
      collapsible
    >
      {width < TAB_SIZE ? (
        <Drawer
          className="gx-drawer-sidebar gx-drawer-sidebar-dark"
          placement="left"
          closable={false}
          onClose={onToggleCollapsedNav}
          visible={navCollapsed}
        >
          <SidebarContent />
        </Drawer>
      ) : (
        <SidebarContent />
      )}
    </Layout.Sider>
  );
};

export default Sidebar;
