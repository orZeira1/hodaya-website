import {useEffect} from "react";

import Box from "@mui/material/Box";

import {getAnalytics, logEvent} from "firebase/analytics";

import Welcome from "./Welcome";
import TreatmentTypesGrid from "./TreatmentTypes";
import Divider from "./common/Divider";
import ContactUs from "./ContactUs";
import OnMe from "./OnMe";

function MainPage() {
    useEffect(() => {
        logEvent(getAnalytics(), 'main_page');
    }, []);

    return (
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
    );
}

export default MainPage;
