import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Welcome() {
    return (
        <Box
            sx={{
                position: "relative", // Ensure positioning is relative to prevent unwanted overflow
                overflowX: "hidden",  // Prevent horizontal overflow just in case
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: { xs: 10, lg: 50 }, // Adjusted for better responsiveness
                    right: { xs: 300, lg: 1100 }, // Constrained to avoid going off-screen
                    pt: { xs: 5, lg: 10 },
                    pb: { xs: 5, lg: 10 },
                    pr: { lg: 5 },
                    pl: { lg: 5 },
                    maxWidth: "100%", // Ensure the content does not exceed the container width
                }}
            >
                <Typography
                    fontWeight={600}
                    sx={{
                        typography: {
                            xs: "h6", // For extra-small screens
                            sm: "h5", // For small screens
                            md: "h4", // For medium screens
                            lg: "h3", // For large screens
                            xl: "h2", // For extra-large screens
                        },
                    }}
                >
                    DIZENGOFF
                </Typography>
                <Typography
                    fontWeight={600}
                    sx={{
                        typography: {
                            xs: "h6", // For extra-small screens
                            sm: "h5", // For small screens
                            md: "h4", // For medium screens
                            lg: "h3", // For large screens
                            xl: "h2", // For extra-large screens
                        },
                    }}
                >
                    MOMMIES
                </Typography>
            </Box>
            <Box
                component={"img"}
                src={"/dizengoff_mommies/welcome.jpg"}
                alt={"welcome"}
                sx={{
                    width: "100%", // Fully responsive width
                    height: { xs: 250, sm: 400, md: 500, lg: 600 }, // Responsive height
                    objectFit: "cover", // Ensure the image scales nicely
                }}
            />
        </Box>
    );
}

export default Welcome;
