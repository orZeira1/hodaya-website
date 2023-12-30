import {useTheme} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import welcomeImg from "../assets/welcome.png";

function Welcome() {
    const theme = useTheme();

    return (
        <Grid
            item
            xs={12}
            pt={6}
            pb={6}
        >
            <img
                src={welcomeImg}
                alt={"weclome"}
                width={"1300"}
                height={"500"}
                style={{
                    opacity: 0.85
                }}
            />
            <Paper
                sx={{
                    position: "absolute",
                    top: 120,
                    right: 150,
                    p: 5,
                    pb: 15,
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
            </Paper>
        </Grid>
    );
}

export default Welcome;
