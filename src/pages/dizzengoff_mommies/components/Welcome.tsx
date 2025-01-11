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
                component={"img"}
                src={"/dizengoff_mommies/welcome.jpg"}
                alt={"welcome"}
                sx={{
                    width: "100%", // Fully responsive width
                    height: { xs: 250, sm: 400, md: 500, lg: 600 }, // Responsive height
                    objectFit: "cover", // Ensure the image scales nicely
                }}
            />
            <Typography
                variant={"h6"}
                sx={{
                    position: "absolute", // Position relative to the parent container
                    top: "10%", // Center vertically
                    left: "3%", // Adjust horizontal position
                    // transform: "translateY(-50%)", // Center alignment
                    color: "white", // Text color
                    fontWeight: 600,
                }}
            >
                DIZENGOFF
                <br/>
                MOMMIES
            </Typography>
        </Box>
    );
}

export default Welcome;
