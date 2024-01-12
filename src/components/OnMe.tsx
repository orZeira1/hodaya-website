import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import hodayaPortraitImg from "../assets/hodayaPortrait.jpeg";

function OnMe() {
    return (
        <Grid
            container
            rowSpacing={3}
            pt={2}
            pb={2}
        >
            <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Box
                    width={300}
                >
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        sx={{
                            textDecoration: "underline"
                        }}
                    >
                        מי אני?
                    </Typography>
                    <Typography
                        variant="body1"
                        pb={3}
                        pt={3}
                    >
                        קלינאית תקשורת לילדים, בעלת ניסיון בעבודה במכון להתפתחות הילד באיכילוב ובהנחיית קבוצות
                        למיומנויות חברתיות
                    </Typography>
                    <Typography
                        variant="body1"
                        pb={3}
                    >
                        עוסקת בטיפול בילדים בגילאי הגן וביה"ס היסודי בתחומי השפה, הדיבור והתקשורת
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        הטיפול מבוסס על הגישה ההתפתחותית טבעית, המתאפיינת בלמידה חוויתית באמצעות משחק והנאה. לכל ילד
                        נבנית
                        תוכנית טיפולית המותאמת לצרכים ולתחומי העניין שלו
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
            >
                <Box
                    component={"img"}
                    src={hodayaPortraitImg}
                    alt={"hodaya-portrait"}
                    sx={{
                        width: {xs: "100%", lg: "90%"},
                        height: {xs: 400, md: 500}
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default OnMe;
