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
                mb={2}
                sx={{
                    textDecoration: 'underline'
                }}
            >
                צור קשר
            </Typography>
            <Typography
                variant="body1"
            >
                מספר טלפון: 052-8814090
                <br/>
                hodayaph.slp@gmail.com :כתובת מייל
            </Typography>
        </Grid>
    );
}

export default ContactUs;
