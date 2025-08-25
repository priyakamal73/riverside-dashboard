import Navbar from "../../components/Navbar/Navbar"
import SearchBar from '../../components/SearchBar/SearchBar';
import CardStats from '../../components/CardStats/CardStats';
import barChart from "../../assets/barChart.png";
import twitter from "../../assets/twitter.png";
import revenue from "../../assets/growth.png";
import booking from "../../assets/booking.png"
import ChartStats from "../../components/ChartStats/ChartStats";
import items from "../../components/MenuItems/MenuItems";
import Destinations from "../../components/Destinations/Destinations";
import Swal from "sweetalert2";
import dest1 from "../../assets/dest1.jpg";
import dest2 from "../../assets/dest2.jpg";
import dest3 from "../../assets/dest3.jpg";
import styles from "../App/app.module.css"
import { Layout, Menu, theme, Breadcrumb } from 'antd';
import { useState } from "react";
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
    token: { borderRadiusLG },
  } = theme.useToken();

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setHovered((prevHovered) => ({ ...prevHovered, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHovered((prevHovered) => ({ ...prevHovered, [id]: false }));
  };

  const handleBookClick = () => {
    Swal.fire({
      title: "Booking Confirmed!",
      text: "You have successfully booked this hotel.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#1677FF"
    });
  };

  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const [zoomLevel, setZoomLevel] = useState(1);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMapZoomIn = () => {
    setZoomLevel(zoomLevel + 0.5);
  };

  const handleMapZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.5);
    }
  };

  const handleMapMouseEnter = (geo) => {
    setTooltipContent(geo.properties.name);
    setTooltipVisible(true);
  };

  const handleMapMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleMapMouseMove = (event) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle} className={styles.siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>

      <Layout style={{ backgroundColor: "#EEEEEE" }}>

        <Content style={{ overflow: 'initial' }}>
          <div className={styles.contentDiv} style={{ borderRadius: borderRadiusLG }}>
            {
              <>
                <Navbar />

                <div className={styles.header}>
                  <Breadcrumb items={[{ title: 'Dashboard' }, { title: 'Home' }]} className={styles.breadCrumb} />
                  <SearchBar />
                </div>

                <div className={styles.cardStats}>
                  <CardStats divBgColor="#06B0C5" cardImage={twitter} cardImageAlt="twitter" cardTitle="Followers" arrowUp={true} cardData="245K" cardBottom="Just Updated" />
                  <CardStats divBgColor="#DC2265" cardImage={barChart} cardImageAlt="bar chart" cardTitle="Website Visits" arrowUp={false} cardData="75.521M" cardBottom="Tracked from Google Analytics" />
                  <CardStats divBgColor="#49A54D" cardImage={revenue} cardImageAlt="revenue" cardTitle="Revenue" arrowUp={false} cardData="$ 34,245" cardBottom="Last 24 Hours" />
                  <CardStats divBgColor="#FC9005" cardImage={booking} cardImageAlt="booking" cardTitle="Bookings" arrowUp={false} cardData="184k" cardBottom="Per Month" />
                </div>

                <ChartStats geoUrl={geoUrl} handleMapMouseEnter={handleMapMouseEnter} handleMapMouseMove={handleMapMouseMove} handleMapMouseLeave={handleMapMouseLeave} zoomLevel={zoomLevel} handleMapZoomIn={handleMapZoomIn} handleMapZoomOut={handleMapZoomOut} tooltipVisible={tooltipVisible} tooltipPosition={tooltipPosition} tooltipContent={tooltipContent} />
                
                <div className={styles.destinations}>
                  <Destinations id="dest1" onMouseEnter={() => handleMouseEnter("dest1")} onMouseLeave={() => handleMouseLeave("dest1")} onClick={handleBookClick} hoveredState={hovered["dest1"]} image={dest1} title="Luxury Accommodations" description="Relax in style with our luxurious hotel rooms, offering fine dining and top-notch service. Book now for a memorable experience." />
                  <Destinations id="dest2" onMouseEnter={() => handleMouseEnter("dest2")} onMouseLeave={() => handleMouseLeave("dest2")} onClick={handleBookClick} hoveredState={hovered["dest2"]} image={dest2} title="Book Your Dream Stay" description="Indulge in the luxury of our hotels, featuring opulent rooms, fine dining, and exceptional service. Book now and enjoy a memorable stay with us." />
                  <Destinations id="dest3" onMouseEnter={() => handleMouseEnter("dest3")} onMouseLeave={() => handleMouseLeave("dest3")} onClick={handleBookClick} hoveredState={hovered["dest3"]} image={dest3} title="Unparalleled Comfort" description="Discover luxury and comfort in our stylish rooms, featuring modern amenities and exceptional service, with easy access to top attractions." />
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