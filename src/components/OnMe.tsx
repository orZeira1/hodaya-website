import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import hodayaPortraitImg from "../assets/hodayaPortrait.jpeg";

function OnMe() {
    return (
        <Grid
            container
            item
            xs={12}
            pt={6}
            pb={6}
        >
            <Grid
                item
                xs={6}
            >
                <img
                    src={hodayaPortraitImg}
                    alt={"hodaya-portrait"}
                    width={"700"}
                    height={"600"}
                />
            </Grid>
            <Grid
                item
                xs={6}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                        textDecoration: "underline"
                    }}
                >
                    ?מי אני
                </Typography>
                <Typography
                    variant="body1"
                    pb={3}
                    pt={3}
                    width={300}
                >
                    קלינאית תקשורת לילדים, בעלת ניסיון בעבודה במכון להתפתחות הילד באיכילוב ובהנחיית קבוצות
                    למיומנויות חברתיות
                </Typography>
                <Typography
                    variant="body1"
                    pb={3}
                    width={300}
                >
                    עוסקת בטיפול בילדים בגילאי הגן וביה"ס היסודי בתחומי השפה, הדיבור והתקשורת
                </Typography>
                <Typography
                    variant="body1"
                    width={300}
                >
                    הטיפול מבוסס על הגישה ההתפתחותית טבעית, המתאפיינת בלמידה חוויתית באמצעות משחק והנאה. לכל ילד נבנית
                    תוכנית טיפולית המותאמת לצרכים ולתחומי העניין שלו
                </Typography>
            </Grid>
        </Grid>
    )
        ;
}

export default OnMe;
