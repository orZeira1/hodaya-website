import {ChangeEvent, FormEvent, useState} from "react";
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';

import createCache from '@emotion/cache';
import {CacheProvider} from "@emotion/react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material/styles";

import FacebookButton from "../../../components/common/facebookButton";
import InstagramButton from "../../../components/common/instagramButton";
import WhatsappButton from "../../../components/common/whatsappButton";
import {leaveMessage} from "../../../services/ContactUs";
import {LeaveMessageForm} from "../../../types/LeaveMessageForm";
import {Alert} from "@mui/material";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function ContactUs() {
    const theme = useTheme();
    const [leaveMessageSuccessAlert, setLeaveMessageSuccessAlert] = useState(false);
    const [leaveMessageErrorAlert, setLeaveMessageErrorAlert] = useState(false);

    const [formData, setFormData] = useState<LeaveMessageForm>({
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

        leaveMessage(formData)
            .then(() => {
                setLeaveMessageSuccessAlert(true);
                setLeaveMessageErrorAlert(false);
            })
            .catch(err => {
                setLeaveMessageSuccessAlert(false);
                setLeaveMessageErrorAlert(true);
            });
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
                    sm={4}
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
                        <a href="tel:+972528814090">
                            052-8814090
                        </a>
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        <a href="mailto:hodayaph.slp@gmail.com">
                            hodayaph.slp@gmail.com
                        </a>
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
                            <InstagramButton username='hodayaph_slp'/>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
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
                <Grid
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
                        השאירו הודעה
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
                                    style={{marginTop: 0, marginBottom: 0}}
                                />
                                <TextField
                                    label="טלפון"
                                    name="phone"
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{marginTop: 0, marginBottom: 0}}
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
                                    style={{marginTop: 0, marginBottom: 0}}
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
                        {
                            leaveMessageSuccessAlert &&
                            <Alert severity="success">
                                תודה, אחזור אליכם בהקדם
                            </Alert>
                        }
                        {
                            leaveMessageErrorAlert &&
                            <Alert severity="error">
                                שגיאה, אנא פנו אליי בwhatsapp
                            </Alert>
                        }
                    </CacheProvider>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactUs;
