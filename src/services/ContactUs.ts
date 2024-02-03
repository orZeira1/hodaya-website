import axios from 'axios';

import {LeaveMessageForm} from "../types/LeaveMessageForm";

const cloudFunctionUrl = process.env.REACT_APP_CLOUD_FUNCTION_URL;

export async function leaveMessage(formData: LeaveMessageForm) {
    try {
        await axios.post(`${cloudFunctionUrl}/sendEmail`, formData);
    } catch (error) {
        console.error("Error sending form data:", error);
    }
}