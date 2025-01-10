import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import InstagramButton from "../../../components/common/instagramButton";
import {Link} from "@mui/material";

function ContactUs() {
    return (
        <Box
            pt={2}
            pb={6}
        >
            <Typography
                variant="h5"
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
                <Link
                    href="mailto:hodayaph.slp@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: "white"
                    }}
                >
                    hodayaph.slp@gmail.com
                </Link>
            </Typography>
            <Box
                sx={{
                    width: 35,
                    height: 35,
                    margin: "0 auto"
                }}
            >
                <InstagramButton username='dizengoffmommies'/>
            </Box>
        </Box>
    );
}

export default ContactUs;
