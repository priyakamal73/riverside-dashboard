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


const CountryTable = () => {
    return (
        <>
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
        </>
    );
}

export default CountryTable