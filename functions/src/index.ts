import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

const corsOptions = {
    origin: ["http://localhost:3000", "https://hodaya-slp.com"],
};
import * as cors from "cors";

const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: functions.config().email.user,
        pass: functions.config().email.pass,
    },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
    cors(corsOptions)(req, res, async () => {
        const {name, phone, message} = req.body;
        const mailOptions = {
            from: "hodayanotifications@gmail.com",
            to: "hodayaph.slp@gmail.com",
            subject: `New Message - ${name}`,
            text: `name: ${name}\nphone: ${phone}\nmessage: ${message}`,
        };

        try {
            await mailTransport.sendMail(mailOptions);
            res.send("Email sent successfully");
        } catch (error) {
            console.error("There was an error while sending the email:", error);
            res.status(500).send("Failed to send email");
        }
    });
});
