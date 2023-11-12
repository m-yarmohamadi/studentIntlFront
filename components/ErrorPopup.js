import React from "react";
import { toggleErrorPopup } from "../fuchers/popup/popupSlice";
import { useDispatch, useSelector } from "react-redux";

import { FaRegTimesCircle } from "react-icons/fa";

const ErrorPopup = ({ error }) => {
  const dispatch = useDispatch();

  return (
    <div className="fade-in justify-center  flex  fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md ">
      <div className=" rounded-lg bg-rose-900 shadow-lg bg-opacity-90 w-fit h-fit ">
        <div className="border-2 border-indigo-50 m-1 rounded-lg ">
          <div className="text-end">
            <button
              className=""
              type=""
              onClick={() => dispatch(toggleErrorPopup())}
            >
              <FaRegTimesCircle
                className="text-indigo-200  m-1 h-6 w-6 "
                aria-hidden="true"
              />
            </button>
          </div>
          <div className=" text-indigo-50 font-bold px-32  pb-8 text-lg">
            {error}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
