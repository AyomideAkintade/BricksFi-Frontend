import { toast } from "react-toastify";

export const showErrorToast = (text) => toast(text, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    closeButton: true,
    type: "error",
});

export const showSuccessToast = (text) => toast.success(text, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    closeButton: true
});