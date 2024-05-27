import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ChartComponent from './components/ChartComponent';
import TableComponent from './components/TableComponent';
import { Container, Grid, Button, Toolbar, Box } from '@mui/material';
import './App.css';

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

interface MonthlyData {
    month: string;
    Revenue: number;
    COGS: number;
    GrossProfit: number;
}

const App = () => {
    const [chartData, setChartData] = useState<MonthlyData[]>([]);
    const [tableData, setTableData] = useState<Data[]>([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const processedData = processChartData(data.Sheet1 || []);
                setChartData(processedData);
                setTableData(data.Sheet1 || []);
            });
    }, []);

    const processChartData = (data: Data[]): MonthlyData[] => {
        const months = [
            { key: 'Jan', label: 'January' },
            { key: 'Feb', label: 'February' },
            { key: 'March', label: 'March' },
            { key: 'April', label: 'April' },
            { key: 'May', label: 'May' },
            { key: 'June', label: 'June' },
            { key: 'July', label: 'July' },
            { key: 'August', label: 'August' },
            { key: 'September', label: 'September' },
            { key: 'October', label: 'October' },
            { key: 'November', label: 'November' },
            { key: 'December', label: 'December' },
        ];

        return months.map(month => {
            const revenue = data.reduce((sum, item) => sum + (item[month.key as keyof Data] as number), 0);
            const cogs = revenue * 0.6; // Example calculation
            const grossProfit = revenue - cogs;
            return {
                month: month.label,
                Revenue: revenue,
                COGS: cogs,
                GrossProfit: grossProfit
            };
        });
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ flexGrow: 1 }}>
                <Navbar />
                <Container>
                    <Box className="toolbar-container">
                        <Toolbar className="toolbar">
                            <Box className="button-group">
                                <Button variant="outlined" className="normal-view-btn">Summary</Button>
                                <Button variant="outlined" className="growth-view-btn">Balance Sheet</Button>
                                <Button variant="outlined" className="period-btn">Income Statement</Button>
                                <Button variant="contained" className="period-btn">Cash Flow</Button>
                                <Button variant="outlined" className="period-btn plus">+</Button>
                            </Box>
                            <Box className="button-group">
                                <Button variant="contained" className="normal-view-btn">Normal View</Button>
                                <Button variant="outlined" className="growth-view-btn">Growth View</Button>
                                <Button variant="outlined" className="period-btn">Period From</Button>
                                <Button variant="outlined" className="period-btn">Period To</Button>
                            </Box>
 
                            
                        </Toolbar>
                        <Box className="button-group1">
                                <Button className="settings-btn">Settings</Button>
                            </Box>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <ChartComponent data={chartData} />
                        </Grid>
                        <Grid item xs={12}>
                            <TableComponent data={tableData} />
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default App;
