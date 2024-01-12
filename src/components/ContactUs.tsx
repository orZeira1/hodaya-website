import {ChangeEvent, FormEvent, useState} from "react";
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material/styles";

import FacebookButton from "./common/facebookButton";
import InstagramButton from "./common/instagramButton";
import WhatsappButton from "./common/whatsappButton";

type FormData = {
    name: string;
    phone: string;
    message: string;
};

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function ContactUs() {
    const theme = useTheme();

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // For demonstration
    };

    return (
        <Box
            pt={2}
            pb={6}
        >
            <Grid
                container
                rowSpacing={5}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                    rowGap={1}
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
                        052-8814090
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        hodayaph.slp@gmail.com
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        כיכר רבין, תל אביב
                    </Typography>
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        columnGap={1}
                        pt={1}
                    >
                        <Box
                            sx={{
                                width: 35,
                                height: 35
                            }}
                        >
                            <WhatsappButton/>
                        </Box>
                        <Box
                            sx={{
                                width: 35,
                                height: 35
                            }}
                        >
                            <FacebookButton/>
                        </Box>
                        <Box
                            sx={{
                                width: 35,
                                height: 35
                            }}
                        >
                            <InstagramButton/>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                    rowGap={1}
                >
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        pb={2}
                        sx={{
                            textDecoration: 'underline'
                        }}
                    >
                        שעות פעילות
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        ימי ראשון ושני
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        19:00 - 13:00
                    </Typography>
                    <Typography
                        variant="body1"
                        pt={1}
                    >
                        ימי חמישי
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        13:00 - 09:00
                    </Typography>
                </Grid>
                {/*<Grid
                    item
                    xs={12}
                    sm={4}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                >
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        sx={{
                            textDecoration: 'underline'
                        }}
                    >
                        השאר הודעה
                    </Typography>
                    <CacheProvider value={cacheRtl}>
                        <Box maxWidth={300}>
                            <form onSubmit={handleSubmit} noValidate>
                                <TextField
                                    label="שם"
                                    name="name"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ marginTop: 0, marginBottom: 0 }}
                                />
                                <TextField
                                    label="טלפון"
                                    name="phone"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ marginTop: 0, marginBottom: 0 }}
                                />
                                <TextField
                                    label="הודעה"
                                    name="message"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ marginTop: 0, marginBottom: 0 }}
                                />
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="outlined"
                                    sx={{
                                        mt: 3,
                                        color: theme.typography.body1.color,
                                        borderColor: theme.typography.body1.color
                                    }}
                                >
                                    שלח
                                </Button>
                            </form>
                        </Box>
                    </CacheProvider>
                </Grid>*/}
            </Grid>
        </Box>
    );
}

export default ContactUs;
