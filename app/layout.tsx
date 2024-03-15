import { Layout, Menu } from "antd";
import "./globals.css";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  {
  key: "home",
  label: <Link href={'/'}>Home</Link>
  },
  {
    key: "footballers",
    label: <Link href={'/footballers'}>Footballers</Link>
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Header>
            <Menu items={items}
            theme="dark"
            mode="horizontal"
            style={{flex: 1, minWidth: 0}}>
            </Menu>
          </Header>
          <Content style={{padding: "0 48px"}}>{children}</Content>
          <Footer style={{textAlign: "center"}}>
            ©2024 Created by Rinat
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
