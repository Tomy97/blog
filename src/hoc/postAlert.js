import Swal from 'sweetalert2';

export const postToast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: true,
    allowOutsideClick: true,
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger',
    timer: 2000,
    buttonsStyling: true,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})