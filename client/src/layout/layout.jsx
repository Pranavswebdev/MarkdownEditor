import React from "react";
import { Layout } from "antd";
import AppDrawer from "../components/AppDrawer";
const { Header, Content } = Layout;

const AppLayout = ({ children }) => {

  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <div className="logo">
            <span
              style={{
                color: "lightBlue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              {" "}
              Markdown Editor
            </span>
          </div>

          <AppDrawer />
        </Header>
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          {children}
        </Content>
       
      </Layout>
    </>
  );
};
export default AppLayout;
