import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import jellyfishImg from "../assets/jellyfish.png";
import kangarooImg from "../assets/kangaroo.png";
import hedgehogImg from "../assets/hedgehog.png";
import whaleImg from "../assets/whale.png";

function TreatmentTypes() {
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
                xs={12}
            >
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
            </Grid>
            <Grid
                container
                item
                xs={12}
            >
                <Grid
                    item
                    xs={3}
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
                        ההורים הם סוכני השינוי המשמעותיים ביותר לקידום יכולותיו השפתיות של הילד.
                        בעזרת ליווי והדרה תוכלו לתרגל עם הילד בבית ולקדם אותו
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={3}
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
                        width={200}
                    >
                        הטיפול הקבוצתי מתאים לילדים המתקשים להתמודד באופן יעיל במצבים חברתיים ומגלים קושי בהבנת
                        סיטואציות
                        חברתיות,

                        למשל: קושי בפתרון בעיות ובהבנת האחר
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={3}
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
                    xs={3}
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
                        מטרת האבחון היא להעריך באופן נרחב את יכולותיהם של הילדים ולראות האם יש תחומים בהם קיים קושי ביחס
                        למצופה לגילם
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TreatmentTypes;
