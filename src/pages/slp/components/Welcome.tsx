import {useTheme} from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

import welcomeImg from "../assets/welcome.png";

function Welcome() {
    const theme = useTheme();

    return (
        <Box>
            <Box
                sx={{
                    position: {lg: "absolute"},
                    top: 120,
                    right: 150,
                    pt: {xs: 5, lg: 10},
                    pb: {xs: 5, lg: 10},
                    pr: {lg: 5},
                    pl: {lg: 5},
                    backgroundColor: theme.palette.background.default
                }}
            >
                <Typography
                    variant={"h3"}
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
                    height: {xs: 250, sm: 400, md: 500, lg: 600}
                }}
            />
        </Box>
    );
}

export default Welcome;
