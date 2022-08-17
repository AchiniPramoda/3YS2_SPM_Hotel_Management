import Swal from "sweetalert2";

export const Alert = (icon, title, text) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}
