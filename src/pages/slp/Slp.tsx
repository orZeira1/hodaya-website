import {useEffect} from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from '@mui/material/styles';

import {getAnalytics, logEvent} from "firebase/analytics";

import Welcome from "./components/Welcome";
import TreatmentTypesGrid from "./components/TreatmentTypes";
import Divider from "../../components/common/Divider";
import ContactUs from "./components/ContactUs";
import OnMe from "./components/OnMe";
import {theme} from "../../theme/theme";

function Slp() {
    useEffect(() => {
        logEvent(getAnalytics(), 'main_page');
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box
                display={"flex"}
                flexDirection={"column"}
            >
                <Welcome/>
                <Divider/>
                <TreatmentTypesGrid/>
                <Divider/>
                <OnMe/>
                <Divider/>
                <ContactUs/>
            </Box>
        </ThemeProvider>
    );
}

export default Slp;
