import Link from "next/link";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLoginPopup,
  toggleVerifyCodePopup,
  toggleLoginToRegisterPopup,
} from "../fuchers/popup/popupSlice";
import { useTranslation } from "react-i18next";

import { setShowVerifyCode } from "@/fuchers/popup/popupSlice";

import * as Yup from "yup";
import Input from "../components/Input";
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    axios
      .post("http://127.0.0.1:5000/auth/login", values)
      .then((res) => {
        if (res.data.code) {
          setShowVerifyCode(true);
        }
      })
      .catch((err) => console.log(err));
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className=" fade-in  justify-center  flex  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
      <div className="relative w-auto  max-w-3xl">
        {/*body*/}

        <div className=" flex flex-col justify-start  px-6 pt-5 mx-auto  lg:pt-10">
          <div className="text-start bg-indigo-50  shadow-lg shadow-indigo-900 w-full  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
            <div className="text-end">
              <button
                className=""
                type=""
                onClick={() => dispatch(toggleLoginPopup())}
              >
                <FaRegTimesCircle
                  className="text-indigo-200  m-1 h-6 w-6 "
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="  p-1 space-y-4 md:space-y-6 sm:p-8">
              <div className="text-center">
                <h1 className=" uppercase text-xl font-bold leading-tight tracking-tight text-indigo-900 md:text-2xl dark:text-white ">
                  {"login"}
                </h1>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <Input formik={formik} name="email" label={t("email")} />
                </div>

                <div>
                  <Input
                    formik={formik}
                    name="password"
                    label={t("password")}
                    type="password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-indigo-300 dark:bg-indigo-700 dark:border-indigo-600 dark:focus:ring-indigo-600 dark:ring-offset-indigo-800"
                      />
                    </div>
                    <div className="m-1 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-indigo-500 dark:text-indigo-300"
                      >
                        {t("rememberMe")}
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/forgetPassword"
                    className="text-sm font-bold text-indigo-900 hover:underline dark:text-indigo-500"
                  >
                    {t("iForgotMyPassword")}
                  </Link>
                </div>
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="w-full text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  {t("login")}
                </button>
                <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                  {t("dontHaveAnAccount")}
                  <button
                    className="font-bold text-indigo-900 hover:underline dark:text-indigo-500"
                    onClick={() => dispatch(toggleLoginToRegisterPopup())}
                  >
                    {t("register")}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
