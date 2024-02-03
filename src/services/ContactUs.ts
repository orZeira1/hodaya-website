import axios from 'axios';

import {LeaveMessageForm} from "../types/LeaveMessageForm";

const cloudFunctionUrl = process.env.REACT_APP_CLOUD_FUNCTION_URL;

export async function leaveMessage(formData: LeaveMessageForm) {
    await axios.post(`${cloudFunctionUrl}/sendEmail`, formData);
}