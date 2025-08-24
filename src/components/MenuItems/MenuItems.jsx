import React from "react";
import {
    UserOutlined,
    FormOutlined,
    TableOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    CalendarOutlined,
} from '@ant-design/icons';

const icons = [
    UserOutlined,
    FormOutlined,
    TableOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    CalendarOutlined,
];

const names = [
    "Dashboard",
    "Forms",
    "Tables",
    "Analytics",
    "Cloud",
    "Shop",
    "Calendar",
];

const MenuItems = icons.map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: names[index],
}));

export default MenuItems;