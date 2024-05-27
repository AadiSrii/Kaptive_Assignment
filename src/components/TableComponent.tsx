import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Data {
    Overhead: string;
    Jan: number;
    Feb: number;
    March: number;
    April: number;
    May: number;
    June: number;
    July: number;
    August: number;
    September: number;
    October: number;
    November: number;
    December: number;
}

interface TableComponentProps {
    data: Data[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data = [] }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Overhead</TableCell>
                        <TableCell>January</TableCell>
                        <TableCell>February</TableCell>
                        <TableCell>March</TableCell>
                        <TableCell>April</TableCell>
                        <TableCell>May</TableCell>
                        <TableCell>June</TableCell>
                        <TableCell>July</TableCell>
                        <TableCell>August</TableCell>
                        <TableCell>September</TableCell>
                        <TableCell>October</TableCell>
                        <TableCell>November</TableCell>
                        <TableCell>December</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.Overhead}>
                            <TableCell>{row.Overhead}</TableCell>
                            <TableCell>{row.Jan}</TableCell>
                            <TableCell>{row.Feb}</TableCell>
                            <TableCell>{row.March}</TableCell>
                            <TableCell>{row.April}</TableCell>
                            <TableCell>{row.May}</TableCell>
                            <TableCell>{row.June}</TableCell>
                            <TableCell>{row.July}</TableCell>
                            <TableCell>{row.August}</TableCell>
                            <TableCell>{row.September}</TableCell>
                            <TableCell>{row.October}</TableCell>
                            <TableCell>{row.November}</TableCell>
                            <TableCell>{row.December}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
