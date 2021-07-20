import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";

import HorizontalNav from "layout/Topbar/HorizontalNav";
import UserInfo from "layout/Topbar/UserInfo";

import { SettingActions } from "app-redux/settings";

function TopBar() {
  const dispatch = useDispatch();
  const navCollapsed = useSelector((state) => state.settings.navCollapsed);

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Layout.Header className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e">
              <i
                className="gx-icon-btn icon icon-menu"
                onClick={() => {
                  dispatch(
                    SettingActions.toggleCollapsedSideNav(!navCollapsed)
                  );
                }}
              />
            </div>
            <Link href="/">
              <a>
                <img
                  alt=""
                  className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
                  src="/images/w-logo.png"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  alt=""
                  className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
                  src="/images/logo.png"
                />
              </a>
            </Link>

            <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
              <HorizontalNav />
            </div>
            <ul className="gx-header-notifications gx-ml-auto">
              <UserInfo />
            </ul>
          </div>
        </div>
      </Layout.Header>
    </div>
  );
}

export default TopBar;
