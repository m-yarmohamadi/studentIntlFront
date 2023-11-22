import Link from "next/link";
import Swal from "sweetalert2";

import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import SuccessRegister from "./SuccessRegister";
import Cookies from "js-cookie";


import {
  toggleLoginPopup,
  toggleLoginToRegisterPopup,
} from "../fuchers/popup/popupSlice";
import {
  toggleAccessToken,
  toggleRefreshToken,
} from "@/fuchers/resCode/resCodeSlice";

import { useTranslation } from "react-i18next";

import * as Yup from "yup";
import Input from "../components/Input";
import { toggleEmail, toggleFirstname, toggleIdUser, toggleLastname, toggleLogin, toggleUser } from "@/fuchers/user/userSlice";
import toast from './toast';

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const showSuccessRegister = useSelector(
    (state) => state.popupReducer.successRegister
  );

  const onSubmit = async (values) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL}/auth/login`, values)
      .then((res) => {
        if (res.status === 200) {



          dispatch(toggleAccessToken(res.data.accessToken))
          dispatch(toggleIdUser(res.data.user.id))
          dispatch(toggleFirstname(res.data.user.firstname))
          dispatch(toggleLastname(res.data.user.lastname))
          dispatch(toggleEmail(res.data.user.email))
          dispatch(toggleLogin(true))
          console.log(res.status);
          console.log(res.data);

          dispatch(toggleLoginPopup());

          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "شما با موفقیت وارد شدید",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        if (err.message == "Request failed with status code 400") {




          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "نام کاربری یا کلمه عبور اشتباه است",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log(err);
      });
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
        <div className=" flex flex-col justify-start  px-6 pt-5 mx-auto  lg:pt-10">
          <div className="text-start bg-indigo-50  shadow-lg shadow-indigo-900 w-full  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
            <div className="border-2 border-red-800 rounded-lg m-1 shadow-xl">
              <div className="text-end">
                <button
                  className=""
                  type=""
                  onClick={() => dispatch(toggleLoginPopup())}
                >
                  <FaRegTimesCircle
                    className="text-rose-200  m-1 h-6 w-6 "
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="    sm:py-3 sm:px-7">
                <div className="text-center">
                  <h1 className="-mt-8 pb-8 uppercase text-xl font-bold leading-tight tracking-tight text-indigo-900 md:text-2xl dark:text-white ">
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
      {showSuccessRegister && (
        <SuccessRegister message={"ثبت نام شما با موفقیت انجام شد."} />
      )}
    </div>
  );
};

export default Login;
