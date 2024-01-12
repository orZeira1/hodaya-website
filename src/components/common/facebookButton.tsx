import Box from "@mui/material/Box";

import FacebookIcon from '../../assets/facebook.svg';

const FacebookButton = () => {
    const facebookProfileUrl = `https://www.facebook.com/profile.php?id=61550718909902`;

    return (
        <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">
            <Box
                component={"img"}
                src={FacebookIcon}
                alt={"Facebook"}
                sx={{
                    width: "100%",
                    height: "100%"
                }}
            />
        </a>
    );
}

export default FacebookButton;
