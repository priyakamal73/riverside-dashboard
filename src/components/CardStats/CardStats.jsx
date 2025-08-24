import React from 'react';
import { Card, Col, Row } from 'antd';
import { ArrowUpOutlined, SyncOutlined } from '@ant-design/icons';
import barChart from "../../assets/barChart.png";
import twitter from "../../assets/twitter.png";
import revenue from "../../assets/growth.png";
import booking from "../../assets/booking.png"
import styles from "../CardStats/cardStats.module.css"

const CardStats = () => (
    <Row gutter={[16, 16]} style={{ margin: "50px 0px 0px" }}>
        <Col xs={24} sm={12} md={6} className={styles.cardCol}>
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: "85px", height: "85px", backgroundColor: "#06B0C5", borderRadius: "3px", position: "relative", top: "-36px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={twitter} alt="barChart" style={{ width: "45px" }} />
                    </div>
                    <div>
                        <div style={{ color: '#8c8c8c', fontSize: '14px', marginBottom: '8px' }}>Followers</div>
                        <div style={{ fontSize: '24px' }}>
                            <ArrowUpOutlined style={{ fontSize: '12px', marginRight: '4px' }} />
                            245K
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: '12px', color: '#8c8c8c', textAlign: "left" }}>
                    <SyncOutlined /> Just Updated
                </div>
            </Card>
        </Col>

        <Col xs={24} sm={12} md={6} className={styles.cardCol}>
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: "85px", height: "85px", backgroundColor: "#DC2265", borderRadius: "3px", position: "relative", top: "-36px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={barChart} alt="barChart" style={{ width: "30px" }} />
                    </div>
                    <div>
                        <div style={{ color: '#8c8c8c', fontSize: '14px', marginBottom: '8px' }}>Website Visits</div>
                        <div style={{ fontSize: '24px' }}>
                            75.521M
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: '12px', color: '#8c8c8c', textAlign: "left" }}>
                    <SyncOutlined /> Tracked from Google Analytics
                </div>
            </Card>
        </Col>

        <Col xs={24} sm={12} md={6} className={styles.cardCol}>
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: "85px", height: "85px", backgroundColor: "#49A54D", borderRadius: "3px", position: "relative", top: "-36px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={revenue} alt="revenue" style={{ width: "35px" }} />
                    </div>
                    <div>
                        <div style={{ color: '#8c8c8c', fontSize: '14px', marginBottom: '8px', textAlign: "right" }}>Revenue</div>
                        <div style={{ fontSize: '24px' }}>
                            $ 34,245
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: '12px', color: '#8c8c8c', textAlign: "left" }}>
                    <SyncOutlined /> Last 24 Hours
                </div>
            </Card>
        </Col>

        <Col xs={24} sm={12} md={6} className={styles.cardCol}>
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: "85px", height: "85px", backgroundColor: "#FC9005", borderRadius: "3px", position: "relative", top: "-36px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={booking} alt="booking" style={{ width: "35px" }} />
                    </div>
                    <div>
                        <div style={{ color: '#8c8c8c', fontSize: '14px', marginBottom: '8px' }}>Bookings</div>
                        <div style={{ fontSize: '24px' }}>
                            184k
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: '12px', color: '#8c8c8c', textAlign: "left" }}>
                    <SyncOutlined /> Per Month
                </div>
            </Card>
        </Col>

    </Row>
);

export default CardStats;