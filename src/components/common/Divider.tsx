import MuiDivider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function Divider() {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
        >
            <MuiDivider
                sx={{
                    borderBottomWidth: 3,
                    m: 3,
                    width: '90%'
                }}
            />
        </Box>
    );
}

export default Divider;