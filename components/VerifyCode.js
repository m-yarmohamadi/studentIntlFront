import React from "react";
import axios from "axios";

import { useFormik } from "formik";

import * as Yup from "yup";
import TitleComponent from "./TitleComponent";
import Input from "../components/Input";

const initialValuesVerify = {
  verifyCode: "",
};

const VerifyCode = () => {
  const onSubmitVerify = (values) => {
    axios
      .post("http://127.0.0.1:5000/auth/register", {
        verifycode: values.verifycode,
      })
      .then((res) => {
        setShowLogin(true);
        setShowRegister(false);
        setShowVerifyCode(false);
      })
      .catch((err) => console.log(err));
  };
  const validationSchemaVerify = Yup.object({
    verifyCode: Yup.string()
      .required("Verifycode is Required")
      .matches(/^[0-9]{6}$/, "Invalid Verifycode"),
  });
  const formikVerify = useFormik({
    initialValuesVerify,
    onSubmitVerify,
    validationSchemaVerify,
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
                onSubmit={formikVerify.handleSubmit}
              >
                <div className="flex justify-between gap-2 ">
                  <Input
                    formik={formikVerify}
                    name="verifyCode"
                    label="لطفا کد 6 رقمی ارسال شده به تلفن همراه یا ایمیلتان را درج نمایید."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!formikVerify.isValid}
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
