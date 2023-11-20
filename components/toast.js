import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




const toastComponent = ({ text }) => {
    const notify = () => {

        toast.success(text, {
            position: toast.POSITION.TOP_CENTER
        });

    };

    return (
        <div>
            <button onClick={notify}>Notify</button>;
            <ToastContainer />

        </div>
    );
};

export default toastComponent;




