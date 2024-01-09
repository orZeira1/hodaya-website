import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import jellyfishImg from "../assets/jellyfish.png";
import kangarooImg from "../assets/kangaroo.png";
import hedgehogImg from "../assets/hedgehog.png";
import whaleImg from "../assets/whale.png";

function TreatmentTypes() {
    return (
        <Box
            pt={2}
            pb={2}
        >
            <Box>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{
                        textDecoration: "underline",
                        pb: 4
                    }}
                >
                    תחומי טיפול
                </Typography>
            </Box>
            <Grid
                container
                rowSpacing={3}
                justifyContent={"center"}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                >
                    <img
                        src={whaleImg}
                        alt={"whale"}
                        width={"100"}
                        height={"100"}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontWeight: "600",
                            pt: 1,
                            pb: 1
                        }}
                    >
                        אבחון
                    </Typography>
                    <Typography
                        variant="body1"
                        width={200}
                    >
                        מטרת האבחון היא להעריך באופן נרחב את יכולותיהם של הילדים תוך שימוש במבחנים מיוחדים, ראיונות
                        ותצפיות.
                        התוצאות משמשות כבסיס לתכנון טיפול המותאם אישית
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                >
                    <img
                        src={hedgehogImg}
                        alt={"hedgehog"}
                        width={"100"}
                        height={"100"}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontWeight: "600",
                            pt: 1,
                            pb: 1
                        }}
                    >
                        טיפול פרטני
                    </Typography>
                    <Typography
                        variant="body1"
                        width={200}
                    >
                        תחומי הטיפול: אוצר מילים דל, קשיי תחביר ודקדוק, קושי בארגון מסר מילולי, קשיי שליפה, אוטיזם,
                        אפרקסיה
                        , אילמות סלקטיבית ותפקודי פה
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                >
                    <img
                        src={jellyfishImg}
                        alt={"bunnies-group"}
                        width={"100"}
                        height={"100"}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontWeight: "600",
                            pt: 1,
                            pb: 1
                        }}
                    >
                        טיפול קבוצתי
                    </Typography>
                    <Typography
                        variant="body1"
                        width={220}
                    >
                        הטיפול הקבוצתי מציע סביבה תומכת ומעודדת שבה ילדים יכולים לחוות ולהתמודד עם מגוון סיטואציות חברתיות.
                        התרגול בקבוצה כולל כישורי שיח, פתרון בעיות חברתיות ויצירת קשרים משמעותיים ועמוקים
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                >
                    <img
                        src={kangarooImg}
                        alt={"kangaroo"}
                        width={"100"}
                        height={"100"}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontWeight: "600",
                            pt: 1,
                            pb: 1
                        }}
                    >
                        הדרכת הורים
                    </Typography>
                    <Typography
                        variant="body1"
                        width={200}
                    >
                        ההורים הם שותפים משמעותיים בקידום היכולות השפתיות של הילדים.
                        בעזרת ליווי והדרכה תוכלו לתרגל עם הילדים בבית ולקדם אותם
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TreatmentTypes;
