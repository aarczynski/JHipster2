import React from 'react';
import { toast } from 'react-toastify';
import SuccessNotification from "../notification/SuccessNotification.jsx";
import ErrorNotification from "../notification/ErrorNotification.jsx";

export function showSuccessDialog(header, msg) {
    toast(<SuccessNotification header={header} text={msg}/>, {
        autoClose: 4000,
        type: toast.TYPE.SUCCESS,
        hideProgressBar: false,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: 'default'
    });
};

export function showErrorDialog(header, msg) {
    toast(<ErrorNotification header={header} text={msg}/>, {
        autoClose: 4000,
        type: toast.TYPE.ERROR,
        hideProgressBar: false,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: 'default'
    });
};