import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";

import {Event} from "../types/Event";


const events: Event[] = [
    {
        img: "/dizengoff_mommies/emuna_dagan.png",
        title: "\"בוחרים נכון\"",
        subtitle: "איך נבנה סביבת אכילה מיטבית עבור הילד שלך",
        lecturer: "אמונה דגן",
        details: "מרכז מעיין | 24.1.25",
        link: "https://pay.grow.link/dd2f0c99ddabccd1699ac9a4968450b3-MTYxMzA3NA"
    },
    {
        img: "/dizengoff_mommies/tal_ben_david.png",
        title: "\"כשלב פוגש לב\"",
        subtitle: "יסודות יצירת הקשר עם תינוקך",
        lecturer: "טל בן דוד סלע",
        details: "\"השמורה\" | 28.1.25",
        link: "https://pay.grow.link/5e32dadbe1634336242422861e2d7ded-MTQ3NjgwNg"
    },
    {
        img: "/dizengoff_mommies/meital_manshari.png",
        title: "ספרים ושירי אצבעות",
        lecturer: "מיטל מנשרי נפתלי",
        details: "\"השמורה\" | 17.2.25"
    }
];

function UpcomingEvents() {
    return (
        <Box
            pt={2}
            pb={2}
        >
            <Box>
                <Typography
                    variant="h4"
                    fontWeight={600}
                    sx={{
                        pb: 4
                    }}
                >
                    Upcoming Events
                </Typography>
            </Box>
            <Grid
                container
                rowSpacing={3}
                justifyContent={"center"}
            >
                {events.map((event, index) => (
                    <Grid
                        key={`${index}`}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems="center"
                    >
                        <img
                            src={event.img}
                            alt={`${index}`}
                            width={"200"}
                            height={"200"}
                        />
                        <Typography
                            variant={"h5"}
                            width={200}
                            sx={{
                                fontWeight: "600",
                                pt: 1,
                                pb: 1
                            }}
                        >
                            {event.title}
                        </Typography>
                        <Typography
                            variant={"h6"}
                            width={200}
                            sx={{
                                fontWeight: "600",
                                pt: 1,
                                pb: 1
                            }}
                        >
                            {event.subtitle}
                        </Typography>
                        <Typography
                            variant="body1"
                            width={200}
                            sx={{
                                fontWeight: "600"
                            }}
                        >
                            {event.lecturer}
                        </Typography>
                        <Typography
                            variant="body1"
                            width={200}
                        >
                            {event.details}
                        </Typography>
                        <Typography
                            variant="body1"
                            width={200}
                        >
                            {
                                event.link ?
                                    <Link
                                        href={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        להרשמה
                                    </Link>
                                    :
                                    "בקרוב"
                            }
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default UpcomingEvents;
