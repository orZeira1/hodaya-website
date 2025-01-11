import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';

import {Event} from "../types/Event";
import {useTheme} from "@mui/material/styles";

const events: Event[] = [
    {
        img: "/dizengoff_mommies/lecturers/emuna_dagan.png",
        title: "\"בוחרים נכון\" - איך נבנה סביבת אכילה מיטבית עבור הילד שלך",
        lecturer: "אמונה דגן",
        details: "מרכז מעיין | 24.1.25",
        link: "https://pay.grow.link/dd2f0c99ddabccd1699ac9a4968450b3-MTYxMzA3NA"
    },
    {
        img: "/dizengoff_mommies/lecturers/tal_ben_david.jpeg",
        title: "\"כשלב פוגש לב\" - יסודות יצירת הקשר עם תינוקך",
        lecturer: "טל בן דוד סלע",
        details: "\"השמורה\" | 28.1.25",
        link: "https://pay.grow.link/5e32dadbe1634336242422861e2d7ded-MTQ3NjgwNg"
    },
    {
        img: "/dizengoff_mommies/lecturers/meital_manshari.png",
        title: "ספרים ושירי אצבעות",
        lecturer: "מיטל מנשרי נפתלי",
        details: "\"השמורה\" | 17.2.25"
    }
];

function UpcomingEvents() {
    const theme = useTheme();

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
                rowSpacing={1}
                justifyContent={"center"}
            >
                {events.map((event, index) => (
                    <Grid
                        key={`${index}`}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{
                            display: "flex", // Flexbox layout
                            flexDirection: "column", // Column direction for child elements
                            alignItems: "center", // Center alignment for content
                            border: "1px solid white", // Border around the grid item
                            padding: 1, // Add padding inside the grid
                            margin: 2, // Outer margin
                        }}
                    >
                        <Box
                            component="img"
                            src={event.img}
                            alt={`lecturer ${index}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }}
                        />
                        <Typography
                            variant={"h5"}
                            sx={{
                                fontWeight: "600",
                                pt: 1,
                                pb: 1
                            }}
                        >
                            {event.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "600"
                            }}
                        >
                            {event.lecturer}
                        </Typography>
                        <Typography
                            variant="h6"
                        >
                            {event.details}
                        </Typography>
                        <Box
                            sx={{
                                mt: 3,
                                mb: 2,
                            }}
                        >
                            {
                                event.link ?
                                    <Box
                                        sx={{
                                            display: "flex", // Use flexbox for alignment
                                            alignItems: "center", // Align items vertically
                                            backgroundColor: "white",
                                            color: theme.palette.background.default,
                                            borderRadius: 2,
                                            p: 1,
                                            gap: 1, // Space between the text and the icon
                                        }}
                                    >
                                        <Link
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline={"none"}
                                            sx={{
                                                color: theme.palette.background.default,
                                            }}
                                        >
                                            להרשמה
                                        </Link>
                                        <LinkIcon/>
                                    </Box>
                                    :
                                    <Typography>
                                        בקרוב
                                    </Typography>
                            }
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default UpcomingEvents;
