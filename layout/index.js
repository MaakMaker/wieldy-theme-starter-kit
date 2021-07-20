import { Layout } from "antd";

import Sidebar from "layout/Sidebar";
import Topbar from "layout/Topbar";

function AppLayout({ children }) {
  return (
    <Layout className="gx-app-layout">
      <Sidebar />
      <Layout>
        <Topbar />
        <Layout.Content className="gx-layout-content gx-container-wrap">
          <div className="gx-main-content-wrapper">{children}</div>
          <Layout.Footer>
            <div className="gx-layout-footer-content">
              Insight Smart Ecommerce - GR - 2021
            </div>
          </Layout.Footer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
