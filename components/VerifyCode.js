import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import Input from "../components/Input";
import {
  toggleSuccessRegister,
  toggleErrorPopup,
  toggleRegisterPopup,
  toggleVerifyCodePopup,
  toggleLoginToRegisterPopup,
} from "../fuchers/popup/popupSlice";

const initialValues = {
  verifyCode: "",
};

const VerifyCode = ({ email }) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    axios
      .post("http://172.20.23.112:5000/auth/verifyCode", {
        verifyCode: values.verifyCode,
        email,
      })
      .then((res) => {
        console.log("SUCCESS");
        dispatch(toggleVerifyCodePopup());
        dispatch(toggleLoginToRegisterPopup());

        dispatch(toggleSuccessRegister());
      })
      .catch((err) => console.log(err));
  };
  const validationSchema = Yup.object({
    verifyCode: Yup.string()
      .required("Verifycode is Required")
      .matches(/^[0-9]{6}$/, "Invalid Verifycode"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="fade-in justify-center  flex  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg">
      <div className="relative w-auto  ">
        {/*body*/}

        <div className=" flex flex-col justify-start  px-6 pt-5 mx-auto  lg:pt-10">
          <div className="text-start bg-indigo-900  shadow-lg shadow-indigo-100 w-full  rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="  p-1 space-y-4 md:space-y-6 sm:p-8">
              <div className="text-center">
                <h1 className=" uppercase text-xl font-bold leading-tight tracking-tight text-indigo-50 md:text-2xl  ">
                  کد تأیید:
                </h1>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div className="">
                  <div className=" h-20">
                    <label
                      htmlFor="verifyCode"
                      className=" flex justify-between text-sm font-bold text-indigo-50 dark:text-white"
                    >
                      لطفا کد 6 رقمی ارسال شده به تلفن همراه یا ایمیلتان را درج
                      نمایید.
                    </label>
                    <input
                      id="verifyCode"
                      name="verifyCode"
                      type="text"
                      className=" shadow-md w-full bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-md focus:bg-white focus:ring-indigo-600 focus:border-indigo-600 block  p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...formik.getFieldProps("verifyCode")}
                    />
                    {formik.errors["verifyCode"] &&
                      formik.touched["verifyCode"] && (
                        <p className=" text-sm text-rose-400">
                          {formik.errors["verifyCode"]}
                        </p>
                      )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="w-full text-indigo-900 bg-indigo-50 hover:bg-indigo-100 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5   "
                >
                  تأیید
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
