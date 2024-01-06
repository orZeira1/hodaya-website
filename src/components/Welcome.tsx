import {useTheme} from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import welcomeImg from "../assets/welcome.png";

function Welcome() {
    const theme = useTheme();

    return (
        <Box
            pt={2}
            pb={2}
        >
            <Box
                sx={{
                    position: {lg: "absolute"},
                    top: 120,
                    right: 150,
                    p: {lg: 5},
                    pb: {xs: 2, lg: 10},
                    backgroundColor: theme.palette.background.default
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        textDecoration: "underline",
                        pb: 4
                    }}
                >
                    ברוכים הבאים
                </Typography>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    sx={{
                        pb: 1
                    }}
                >
                    הודיה פנסאפורקאר
                </Typography>
                <Typography variant="h4">
                    קלינאית תקשורת
                </Typography>
            </Box>
            <Box
                component={"img"}
                src={welcomeImg}
                alt={"welcome"}
                sx={{
                    width: {xs: "100%", lg: "90%"},
                    height: {xs: 300, lg: 500}
                }}
            />
        </Box>
    );
}

export default Welcome;
