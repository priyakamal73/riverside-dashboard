import React, { useState } from "react";
import { Card, Button } from "antd";
import Swal from "sweetalert2";
import styles from "../Destinations/destinations.module.css"
const { Meta } = Card;

const Destinations = (props) => {
    const [hovered, setHovered] = useState(false);

    const handleBookClick = () => {
        Swal.fire({
            title: "Booking Confirmed!",
            text: "You have successfully booked this hotel.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#1677FF"
        });
    };

    return (
        <Card
            className={styles.destCard}
            hoverable
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            cover={
                <div style={{ position: "relative", height: "250px", padding: "0px" }}>
                    <Button
                        type="primary"
                        style={{
                            position: "absolute",
                            bottom: "60px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 1,
                            transition: "opacity 0.3s ease",
                            backgroundColor: "transparent",
                            color: "black",
                        }}
                        onClick={handleBookClick}
                    >
                        Book
                    </Button>

                    <img
                        alt="example"
                        src={props.image}
                        style={{
                            position: "relative",
                            top: hovered ? "-100px" : "-50px",
                            left: 0,
                            width: "90%",
                            height: "250px",
                            objectFit: "cover",
                            transition: "top 0.3s ease",
                            zIndex: 2,
                            borderRadius: "10px"
                        }}
                    />
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
