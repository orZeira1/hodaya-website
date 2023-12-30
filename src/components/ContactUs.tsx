import {useTheme} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import welcomeImg from "../assets/welcome.png";

function ContactUs() {
    const theme = useTheme();

    return (
        <Grid
            item
            xs={12}
            pt={6}
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
        </Grid>
    );
}

export default ContactUs;
