import Box from "@mui/material/Box";

import InstagramIcon from '../../assets/instagram.svg';

const InstagramButton = () => {
    const username = 'hodayaph_slp';
    const instagramProfileUrl = `https://www.instagram.com/${username}/`;

    return (
        <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
            <Box
                component={"img"}
                src={InstagramIcon}
                alt={"Instagram"}
                sx={{
                    width: "100%",
                    height: "100%"
                }}
            />
        </a>
    );
}

export default InstagramButton;
