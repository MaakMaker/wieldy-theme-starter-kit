import React from "react";
import { Avatar, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "app-redux/auth";

import AppLink from "components/AppLink";

function UserInfo() {
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.auth.user.avatar);

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>
        <AppLink href="/my-account">My Account</AppLink>
      </li>
      <li onClick={() => dispatch(AuthActions.logout())}>Logout</li>
    </ul>
  );

  return (
    <li className="gx-user-nav">
      <Popover
        overlayClassName="gx-popover-horizantal"
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
      >
        <Avatar
          src="https://via.placeholder.com/150"
          className="gx-avatar gx-pointer"
          alt=""
        />
      </Popover>
    </li>
  );
}

export default UserInfo;
