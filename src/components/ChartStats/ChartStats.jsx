import React from "react";
import WorldMap from "../WorldMap/WorldMap";
import styles from "../ChartStats/chartStats.module.css"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const data = [
  {
    country: "USA",
    flag: "https://flagcdn.com/w20/us.png",
    value: "2,920",
    percent: "53.23%",
  },
  {
    country: "Germany",
    flag: "https://flagcdn.com/w20/de.png",
    value: "1,300",
    percent: "20.43%",
  },
  {
    country: "Australia",
    flag: "https://flagcdn.com/w20/au.png",
    value: "760",
    percent: "10.35%",
  },
  {
    country: "United Kingdom",
    flag: "https://flagcdn.com/w20/gb.png",
    value: "690",
    percent: "7.87%",
  },
  {
    country: "Romania",
    flag: "https://flagcdn.com/w20/ro.png",
    value: "600",
    percent: "5.94%",
  },
  {
    country: "Brazil",
    flag: "https://flagcdn.com/w20/br.png",
    value: "550",
    percent: "4.34%",
  },
];

const CharStats = () => {
  return (
    <>
      <div className={styles.cardParent}>
        <div className={styles.table}>
          <h4 style={{ textAlign: "left", margin: "10px 0px 10px 10px", color: "#3C4858", fontSize: "18px", lineHeight: "25.2px", fontWeight: "300" }}>Global Sales by Top Locations</h4>
          <TableContainer >
            <Table>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        src={row.flag}
                        alt={row.country}
                        style={{ width: 25, marginRight: 10 }}
                      />
                      {row.country}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                    <TableCell align="right">{row.percent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className={styles.map} >
          <WorldMap />
        </div>
      </div>
    </>
  );
};

export default CharStats;