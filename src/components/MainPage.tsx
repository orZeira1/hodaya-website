import {useTheme} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Welcome from "./Welcome";
import TreatmentTypesGrid from "./TreatmentTypes";
import Divider from "./common/Divider";
import ContactUs from "./ContactUs";
import OnMe from "./OnMe";

function MainPage() {
    const theme = useTheme();

    return (
        <Grid
            container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                width: "100%"
            }}
        >
            <Welcome/>

            <Divider/>

            <TreatmentTypesGrid/>

            <Divider/>

            <OnMe />

            <Divider/>

            <ContactUs />
        </Grid>
    );
}

export default MainPage;
