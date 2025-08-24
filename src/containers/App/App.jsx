import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import SearchBar from '../../components/SearchBar/SearchBar';
import CardStats from '../../components/CardStats/CardStats';
import ChartStats from "../../components/ChartStats/ChartStats";
import items from "../../components/MenuItems/MenuItems";
import Destinations from "../../components/Destinations/Destinations";
import dest1 from "../../assets/dest1.jpg";
import dest2 from "../../assets/dest2.jpg";
import dest3 from "../../assets/dest3.jpg";
import styles from "../App/app.module.css"
import { Layout, Menu, theme, Breadcrumb } from 'antd';
const { Content, Footer, Sider } = Layout;


const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  padding: '25px 0px 0px',
};


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout hasSider>
      <Sider style={siderStyle} className={styles.siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout style={{ backgroundColor: "#EEEEEE" }}>
        <Content style={{ overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: "#EEEEEE",
              borderRadius: borderRadiusLG,
            }}
          >
            {
              <>
                <Navbar />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <Breadcrumb items={[{ title: 'Dashboard' }, { title: 'Home' }]} className={styles.breadCrumb} />
                  <SearchBar />
                </div>
                <CardStats />
                <ChartStats />
                <div className={styles.destinations}>
                  <Destinations image={dest1} title="Luxury Accommodations" description="Relax in style with our luxurious hotel rooms, offering fine dining and top-notch service. Book now for a memorable experience." />
                  <Destinations image={dest2} title="Book Your Dream Stay" description="Indulge in the luxury of our hotels, featuring opulent rooms, fine dining, and exceptional service. Book now and enjoy a memorable stay with us." />
                  <Destinations image={dest3} title="Unparalleled Comfort" description="Discover luxury and comfort in our stylish rooms, featuring modern amenities and exceptional service, with easy access to top attractions." />
                </div>
              </>
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};


export default App;
