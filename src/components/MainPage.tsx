import Box from "@mui/material/Box";

import Welcome from "./Welcome";
import TreatmentTypesGrid from "./TreatmentTypes";
import Divider from "./common/Divider";
import ContactUs from "./ContactUs";
import OnMe from "./OnMe";

function MainPage() {
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
