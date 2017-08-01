import React from 'react';
import { toast } from 'react-toastify';
import SuccessNotification from "../components/notification/SuccessNotification.jsx";
import ErrorNotification from "../components/notification/ErrorNotification.jsx";

var toastCommonConfig = {
    autoClose: 4000,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    closeButton: 'default',
};

export function showSuccessDialog(header, msg) {
    toast(<SuccessNotification header={header} text={msg}/>,
        Object.assign(toastCommonConfig, {
            className: 'toast-notification success',
            progressClassName: 'toast-notification-progress-success'
        })
    );
};

export function showErrorDialog(header, msg) {
    toast(<ErrorNotification header={header} text={msg}/>,
        Object.assign(toastCommonConfig, {
            className: 'toast-notification error',
            progressClassName: 'toast-notification-progress-error'
        })
    );
};