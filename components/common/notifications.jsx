import React from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

/**
 * Usage:
 *   import Notifications, { notify } from './notifications';
 *   notify('success', 'Your message here!');
 *   <Notifications />
 */

// Call this function to show a notification
export const notify = (type = 'success', msg = '', options = {}) => {
  const toastTypes = {
    success: toast.success,
    error: toast.error,
    info: toast.info,
    warning: toast.warn,
    warn: toast.warn,
    default: toast,
  };
  const show = toastTypes[type] || toast;
  show(msg, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    transition: Bounce,
    ...options,
  });
};

const Notifications = () => (
  <ToastContainer
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition={Bounce}
  />
);

export default Notifications;