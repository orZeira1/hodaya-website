import Box from "@mui/material/Box";

import WhatsAppIcon from '../../assets/whatsapp.svg';

const WhatsAppButton = () => {
    const phoneNumber = '0528814090';
    const message = 'שלום, אשמח להתייעץ בנוגע לטיפול';
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Box
                component={"img"}
                src={WhatsAppIcon}
                alt={"WhatsApp"}
                sx={{
                    width: "100%",
                    height: "100%"
                }}
            />
        </a>
    );
}

export default WhatsAppButton;
