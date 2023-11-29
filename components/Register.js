import Link from "next/link";

import { FaRegTimesCircle } from "react-icons/fa";
import axios, { toFormData } from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleErrorPopup,
  toggleRegisterPopup,
  toggleVerifyCodePopup,
  toggleLoginToRegisterPopup,
} from "../fuchers/popup/popupSlice";
import { useTranslation } from "react-i18next";

import Input from "../components/Input";

import { toggleverifyCode } from "@/fuchers/resCode/resCodeSlice";
import { validationSchema } from "@/Validation/Reg&LoginValidate";
import { textarea } from "@material-tailwind/react";
import ErrorPopup from "./ErrorPopup";
import VerifyCode from "./VerifyCode";
const initialValues = {
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
};
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();



const Register = () => {
  const { t } = useTranslation();

  const showError = useSelector((state) => state.popupReducer.errorPopup);
  const showVerifyCode = useSelector(
    (state) => state.popupReducer.verifyCodePopup
  );

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/auth/register`, {
        firstname: values.firstname,
        lastname: values.lastname,
        mobile: values.mobile,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data.code);
        if (res.data.code) {
          dispatch(toggleVerifyCodePopup());
        }
      })
      .catch((err) => {
        const error = err.message;
        console.log(err.message);
        {
          error == "Request failed with status code 400" &&
            dispatch(toggleErrorPopup());
        }
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="  fade-in justify-center flex  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
      <div className="relative w-auto  ">
        <div className="top-0 flex flex-col justify-start  px-6 pt-5 mx-auto  lg:pt-10">
          <div className="text-start bg-indigo-50 pt-0 shadow-lg shadow-indigo-900 w-full  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
            <div className="border-2 border-red-800 rounded-lg m-1 shadow-xl">
              <div className="text-end">
                <button onClick={() => dispatch(toggleRegisterPopup())}>
                  <FaRegTimesCircle
                    className="text-rose-200  m-1 h-6 w-6 "
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="    sm:py-3 sm:px-7">
                <div className="text-center">
                  <h1 className="-mt-8 pb-8 uppercase text-xl font-bold leading-tight tracking-tight text-indigo-900 md:text-2xl dark:text-white ">
                    {t("register")}
                  </h1>
                </div>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={formik.handleSubmit}
                >
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Input
                      formik={formik}
                      name="firstname"
                      label={t("firstname")}
                    />
                    <Input
                      formik={formik}
                      name="lastname"
                      label={t("lastname")}
                    />
                  </div>

                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Input formik={formik} name="mobile" label={t("mobile")} />

                    <Input formik={formik} name="email" label={t("email")} />
                  </div>

                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Input
                      formik={formik}
                      name="password"
                      label={t("password")}
                      type="password"
                    />
                    <Input
                      formik={formik}
                      name="confirmPassword"
                      label={t("confirmPassword")}
                      type="password"
                    />
                  </div>
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="accept"
                          name="accept"
                          type="checkbox"
                          className="w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-primary-300 dark:bg-indigo-700 dark:border-indigo-600 dark:focus:ring-primary-600 dark:ring-offset-indigo-800"
                          {...formik.getFieldProps("accept")}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="accept"
                          className="font-light text-indigo-900 dark:text-indigo-300"
                        >
                          <Link
                            className="ps-1 font-medium text-primary-600 hover:underline dark:text-primary-500"
                            href="/Rules"
                          >
                            {t("iAcceptTheTermsAndConditionsOfTheSite")}
                          </Link>
                        </label>
                      </div>


                    </div>
                    {formik.errors["accept"] && formik.touched["accept"] && (
                      <p className=" text-xs text-rose-800">{t(formik.errors["accept"])}</p>
                    )}

                  </div>
                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="w-full text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    {t("register")}
                  </button>
                  <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                    {t("alreadyRegistered")}

                    <button
                      className=" font-bold text-indigo-900 hover:underline dark:text-indigo-500"
                      onClick={() => dispatch(toggleLoginToRegisterPopup())}
                    >
                      {t("login")}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showError && (
        <ErrorPopup error={"ایمیل یا تلفن همراه وارد شده تکراری می باشد"} />
      )}
      {showVerifyCode && <VerifyCode email={formik.values.email} />}
    </div>
  );
};

export default Register;
