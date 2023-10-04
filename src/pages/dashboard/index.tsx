import { useState } from "react";
import { Layout } from "@/components/layouts"
import { Box, Grid, Tab, Tabs } from "@mui/material";
import { HopperDashboard, MovementDashboard, WeightDashboard } from "@/components/dashboards";
import { FilterAlt, Scale } from "@mui/icons-material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box>
                <>{children}</>
            </Box>
            )}
        </div>
    );
}

const Dashboard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Layout title="" pageDescription="">
            <Box
                p={3}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
            >
                <Tabs value={value} onChange={handleChange}>
                    <Tab icon={<Scale/>} label={'Peso'}/>
                    <Tab icon={<FilterAlt/>} label={'Tolva'}/>
                    <Tab icon={<FilterAlt/>} label={'Movimiento'}/>
                </Tabs>
            </Box>
            <Box pl={3} pr={3}>
                <CustomTabPanel value={value} index={0}>
                    <WeightDashboard/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <HopperDashboard/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <MovementDashboard/>
                </CustomTabPanel>
            </Box>
        </Layout>
    )
}

export default Dashboard
