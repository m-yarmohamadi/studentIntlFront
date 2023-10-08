import Link from "next/link";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleRegisterPopup,
  toggleVerifyCodePopup,
  toggleLoginToRegisterPopup,
} from "../fuchers/popup/popupSlice";

import Input from "../components/Input";
import TitleComponent from "./TitleComponent";
import { toggleverifyCode } from "@/fuchers/resCode/resCodeSlice";
import { validationSchema } from "@/Validation/Validate";
const initialValues = {
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    axios
      .post("http://127.0.0.1:5000/auth/register", {
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
          dispatch(toggleverifyCode(res.data.code));
        }
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="fade-in justify-center  flex  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
      <div className="relative w-auto  ">
        {/*body*/}

        <div className=" flex flex-col justify-start  px-6 pt-5 mx-auto  lg:pt-10">
          <div className="text-start bg-indigo-50  shadow-lg shadow-indigo-900 w-full  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
            <div className="text-end">
              <button onClick={() => dispatch(toggleRegisterPopup())}>
                <FaRegTimesCircle
                  className="text-indigo-200  m-1 h-6 w-6 "
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="  p-1 space-y-4 md:space-y-6 sm:p-8">
              <div className="text-center">
                <h1 className=" uppercase text-xl font-bold leading-tight tracking-tight text-indigo-900 md:text-2xl dark:text-white ">
                  <TitleComponent I={"register"} />
                </h1>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex justify-between gap-2">
                  <Input
                    formik={formik}
                    name="firstname"
                    label={<TitleComponent I={"firstname"} />}
                  />
                  <Input
                    formik={formik}
                    name="lastname"
                    label={<TitleComponent I={"lastname"} />}
                  />
                </div>

                <div className="flex justify-between gap-2">
                  <Input
                    formik={formik}
                    name="mobile"
                    label={<TitleComponent I={"mobile"} />}
                  />

                  <Input
                    formik={formik}
                    name="email"
                    label={<TitleComponent I={"email"} />}
                  />
                </div>

                <div className="flex justify-between gap-2">
                  <Input
                    formik={formik}
                    name="password"
                    label={<TitleComponent I={"password"} />}
                    type="password"
                  />
                  <Input
                    formik={formik}
                    name="confirmPassword"
                    label={<TitleComponent I={"confirmPassword"} />}
                    type="password"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="accept"
                      aria-describedby="accept"
                      name="checkbox"
                      type="checkbox"
                      className="w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-primary-300 dark:bg-indigo-700 dark:border-indigo-600 dark:focus:ring-primary-600 dark:ring-offset-indigo-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="accept"
                      className="font-light text-indigo-900 dark:text-indigo-300"
                    >
                      <Link
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="/Rules"
                      >
                        <TitleComponent
                          I={"iAcceptTheTermsAndConditionsOfTheSite"}
                        />
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="w-full text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  <TitleComponent I={"register"} />
                </button>
                <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                  <TitleComponent I={"alreadyRegistered"} />

                  <button
                    className=" font-bold text-indigo-900 hover:underline dark:text-indigo-500"
                    onClick={() => dispatch(toggleLoginToRegisterPopup())}
                  >
                    <TitleComponent I={"login"} />
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

export default Register;
