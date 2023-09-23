import { Layout } from "@/components/layouts"
import { Box, Grid } from "@mui/material";
import { HopperDashboard, WeightDashboard } from "@/components/dashboards";
import { connect } from "mqtt";

const Dashboard = () => {

    /* const client = connect("wss://test.mosquitto.org:8081")
    const topic = ''

    client.on("connect", () => {
        console.log("connected to mqtt broker.");
        client.subscribe(topic, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });

    const emit = (body: "0" | "1") => {
        client.publish(topic, body);
    }; */

    

    return (
        <Layout title="" pageDescription="">
            <Box p={3}>
                <Grid container>
                    <Grid item xs={12} sm= {6}>
                        <HopperDashboard/>
                    </Grid>
                    <Grid item xs={12} sm= {6}>
                        <WeightDashboard/>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default Dashboard
