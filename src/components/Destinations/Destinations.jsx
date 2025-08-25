import { Card, Button } from "antd";
import styles from "../Destinations/destinations.module.css"
const { Meta } = Card;

const Destinations = (props) => {

    return (
        <Card
            className={styles.destCard}
            hoverable
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            cover={
                <div className={styles.destinationTop}>
                    <Button type="primary" className={styles.bookButton} onClick={props.onClick}>
                        Book
                    </Button>

                    <img alt="destination" src={props.image} className={styles.destinationImage} style={{ top: props.hoveredState ? "-100px" : "-50px" }} />
                </div>
            }
        >
            <Meta
                title={props.title}
                description={props.description}
            />
        </Card>
    );
};

export default Destinations;