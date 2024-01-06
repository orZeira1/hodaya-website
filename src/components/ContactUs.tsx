import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

function ContactUs() {
    return (
        <Box
            pt={2}
            pb={6}
        >
            <Typography
                variant="h4"
                fontWeight={600}
                pb={2}
                sx={{
                    textDecoration: 'underline'
                }}
            >
                צור קשר
            </Typography>
            <Typography
                variant="body1"
            >
                052-8814090
            </Typography>
            <Typography
                variant="body1"
            >
                hodayaph.slp@gmail.com
            </Typography>
            <Typography
                variant="body1"
            >
                כיכר רבין, תל אביב
            </Typography>
        </Box>
    );
}

export default ContactUs;
