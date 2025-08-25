import { Card, Col, Row } from 'antd';
import { ArrowUpOutlined, SyncOutlined } from '@ant-design/icons';
import styles from "../CardStats/cardStats.module.css"

const CardStats = (props) => (
    <Col xs={24} sm={12} md={6} className={styles.cardCol}>
        <Card className={styles.card}>
            <div className={styles.cardTop}>
                <div className={styles.cardImgDiv} style={{ backgroundColor: props.divBgColor }}>
                    <img src={props.cardImage} alt={props.cardImageAlt} className={styles.image} />
                </div>
                <div>
                    <div className={styles.cardTitle}>{props.cardTitle}</div>
                    <div className={styles.cardData}>
                        {props.arrowUp &&  <ArrowUpOutlined className={styles.arrowUp} />}
                        {props.cardData}
                    </div>
                </div>
            </div>
            <div className={styles.cardBottom}>
                <SyncOutlined /> {props.cardBottom}
            </div>
        </Card>
    </Col>
);

export default CardStats;