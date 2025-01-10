import {useEffect} from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from '@mui/material/styles';

import {getAnalytics, logEvent} from "firebase/analytics";

import Welcome from "./components/Welcome";
import UpcomingEvents from "./components/UpcomingEvents";
import ContactUs from "./components/ContactUs";
import Divider from "../../components/common/Divider";

import {dizengoffMommiesTheme} from "../../theme/theme";
import ImageSlider from "./components/ImageSlider";

function DizengoffMommies() {
    useEffect(() => {
        logEvent(getAnalytics(), 'dizengoff_mommies');
    }, []);

    return (
        <ThemeProvider theme={dizengoffMommiesTheme}>
            <CssBaseline/>
            <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{
                    width: "100%",
                    maxWidth: "100vw", // Prevents the Box from exceeding the viewport width
                    overflowX: "hidden",
                }}
            >
                <Welcome/>
                <UpcomingEvents/>
                <ImageSlider />
                <Divider/>
                <ContactUs/>
            </Box>
        </ThemeProvider>
    );
}

export default DizengoffMommies;
