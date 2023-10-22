import SelectSteps from "./SelectSteps";
import NextStep from "./NextStep";
import { useFormik } from "formik";
import { validationSchema } from "@/Validation/formValidate";
import InputSteps from "./InputSteps";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const initialValues = {
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Step01 = () => {
  const { t } = useTranslation();
  const onSubmit = (values) => {
    axios
      .post("http://127.0.0.1:5000/students/step01", {
        values,
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
    <div className="fade-in  h-full w-full">
      <div className="vh70  rounded-md m-1 px-4  bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          {t("titleStep01")}
          {t("firstname")}
        </div>
        <form onSubmit={formik.handleSubmit} className="  ">
          <div className="overflow-y-auto h-108 p-2 border  border-indigo-50 border-opacity-60 bg-indigo-950 bg-opacity-20 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              <div className="grid grid-cols-3 gap-2  ">
                <InputSteps formik={formik} name={"firstname"} type={"text"} />
                <InputSteps formik={formik} name={"middlename"} type={"text"} />
                <InputSteps formik={formik} name={"lastname"} type={"text"} />
              </div>
              <div className=" text-sm tracking-tight border border-1 border-white px-2 py-5 bg-indigo-900 bg-opacity-75 grid grid-cols-3 gap-2  mb-4">
                <InputSteps
                  formik={formik}
                  name={"firstnamepersian"}
                  type={"text"}
                />
                <InputSteps
                  formik={formik}
                  name={"middlenamepersian"}
                  type={"text"}
                />
                <InputSteps
                  formik={formik}
                  name={"lastnamepersian"}
                  type={"text"}
                />
              </div>
            </div>

            <div className="   grid grid-cols-3 md:grid-cols-4 gap-4 mb-4 ">
              <div className=" mb-2">
                <InputSteps formik={formik} name={"fathername"} type={"text"} />
              </div>
              <div className=" mb-2">
                <InputSteps formik={formik} name={"mothername"} type={"text"} />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"dateOfBirth"}
                  type={"date"}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"country"}
                  value={["man", "woman"]}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"city"}
                  value={["man", "woman"]}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"sex"}
                  value={["man", "woman"]}
                />
              </div>
              <div className="tracking-tight px-2 py-5 grid grid-cols-2 gap-2 mb-2">
                <SelectSteps
                  formik={formik}
                  name={"maritalstatus"}
                  value={["single", "married"]}
                />
                <SelectSteps
                  formik={formik}
                  name={"numOfChildren"}
                  value={["1", "2", "3", "4", "5", "6", "7"]}
                />
              </div>
              <div className=" mb-2">
                <InputSteps formik={formik} name={"religion"} type={"text"} />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"passportNumber"}
                  type={"text"}
                />
              </div>

              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"dateOfIssue"}
                  type={"date"}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"dateOfExpire"}
                  type={"date"}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"placeOfIssue"}
                  type={"text"}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"nationalities"}
                  type={"text"}
                />
              </div>
              <div className=" mb-2">
                <InputSteps formik={formik} name={"address"} type={"text"} />
              </div>
              <div className=" mb-2">
                <InputSteps formik={formik} name={"tel"} type={"text"} />
              </div>
              <div className=" mb-2">
                <InputSteps formik={formik} name={"email"} type={"email"} />
              </div>
              <div className=" mb-2">
                <InputSteps formik={formik} name={"fax"} type={"text"} />
              </div>
              <div className=" mb-2">
                <InputSteps formik={formik} name={"mobile"} type={"text"} />
              </div>
            </div>
          </div>
          <NextStep />
        </form>
      </div>
    </div>
  );
};

export default Step01;
