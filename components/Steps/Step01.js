import SelectSteps from "./SelectSteps";
import { useFormik } from "formik";
import { Step01Validation } from "@/Validation/formValidate";
import InputSteps from "./InputSteps";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
const validationSchema = Step01Validation;
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { toggleStep } from "@/fuchers/steps/StepSlice";
import { useEffect, useState } from "react";

const Step01 = () => {
  const { t } = useTranslation();
  const stepform = useSelector((state) => state.stepReducer.step);
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
  });
  const [dataa, setData] = useState([{}]);
  useEffect(() => {
    const fetchStep01 = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/auth/getStep01`)
        .then((res) => {
          setData(res.data.data);
          setInitialValues(dataa);
          console.log( dataa );
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchStep01();
  }, []);
  const onSubmit = async (values) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL}/auth/step01`, {
        ...values,
        userId: "2",
        registrationNoticesId: "3",
      })
      .then((res) => {
        dispatch(toggleStep(stepform + 1));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        </div>
        <form onSubmit={formik.handleSubmit} className="  ">
          <div className="overflow-y-auto h-108 p-2 border  border-indigo-50  bg-indigo-950 bg-opacity-20 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              <div className="grid grid-cols-3 gap-2  ">
                <InputSteps
                  formik={formik}
                  name={"firstname"}
                  type={"text"}
                  data={dataa[0]?.firstname}
                />
                <InputSteps
                  formik={formik}
                  name={"middlename"}
                  type={"text"}
                  data={dataa[0]?.middlename}
                />
                <InputSteps
                  formik={formik}
                  name={"lastname"}
                  type={"text"}
                  data={dataa[0]?.lastname}
                />
              </div>
              <div className="pt-5 pb-2 text-sm tracking-tight border border-1 border-white px-2  bg-indigo-900 bg-opacity-75 grid grid-cols-3 gap-2  mb-4">
                <InputSteps
                  formik={formik}
                  name={"firstnamepersian"}
                  type={"text"}
                  data={dataa[0]?.firstnamepersian}
                />
                <InputSteps
                  formik={formik}
                  name={"middlenamepersian"}
                  type={"text"}
                  data={dataa[0]?.middlenamepersian}
                />
                <InputSteps
                  formik={formik}
                  name={"lastnamepersian"}
                  type={"text"}
                  data={dataa[0]?.lastnamepersian}
                />
              </div>
            </div>

            <div className="   grid grid-cols-3 md:grid-cols-4 gap-4 mb-4 ">
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"fathername"}
                  type={"text"}
                  data={dataa[0]?.fathername}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"mothername"}
                  type={"text"}
                  data={dataa[0]?.mothername}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"dateOfBirth"}
                  type={"date"}
                  data={dataa[0]?.dateOfBirth}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"country"}
                  value={["Iran", "Iraq"]}
                  data={dataa[0]?.country}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"city"}
                  value={["Tehran", "Ahvaz"]}
                  data={dataa[0]?.city}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"sex"}
                  value={["man", "woman"]}
                  data={dataa[0]?.sex}
                />
              </div>
              {formik.values.maritalstatus !== "married" ? (
                <div className="tracking-tight px-2  grid grid-cols-1 gap-2 mb-2">
                  <SelectSteps
                    formik={formik}
                    name={"maritalstatus"}
                    value={["single", "married"]}
                    data={dataa[0]?.maritalstatus}
                  />
                </div>
              ) : (
                <div className="tracking-tight px-2  grid grid-cols-2 gap-2 mb-2">
                  <SelectSteps
                    formik={formik}
                    name={"maritalstatus"}
                    value={["single", "married"]}
                    data={dataa[0]?.maritalstatus}
                  />
                  <SelectSteps
                    formik={formik}
                    name={"numOfChildren"}
                    value={[0, 1, 2, 3, 4, 5, 6, 7]}
                    data={dataa[0]?.numOfChildren}
                  />
                </div>
              )}
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"religion"}
                  type={"text"}
                  data={dataa[0]?.religion}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"passportNumber"}
                  type={"text"}
                  data={dataa[0]?.passportNumber}
                />
              </div>

              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"dateOfIssue"}
                  type={"date"}
                  data={dataa[0]?.dateOfIssue}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"dateOfExpire"}
                  type={"date"}
                  data={dataa[0]?.dateOfExpire}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"placeOfIssue"}
                  type={"text"}
                  data={dataa[0]?.placeOfIssue}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"nationalities"}
                  type={"text"}
                  data={dataa[0]?.nationalities}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"address"}
                  type={"text"}
                  data={dataa[0]?.address}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"tel"}
                  type={"text"}
                  data={dataa[0]?.tel}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"email"}
                  type={"email"}
                  data={dataa[0]?.email}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"fax"}
                  type={"text"}
                  data={dataa[0]?.fax}
                />
              </div>
              <div className=" mb-2">
                <InputSteps
                  formik={formik}
                  name={"mobile"}
                  type={"text"}
                  data={dataa[0]?.mobile}
                />
              </div>
            </div>

            {formik.values.maritalstatus === "married" && (
              <>
                <div className="text-indigo-50 font-extrabold text-start">
                  {t("spouseInformation")}
                </div>
                <div className="pt-5 pb-2 text-sm tracking-tight border border-1 border-white px-2  bg-indigo-900 bg-opacity-75 grid grid-cols-5 gap-2  mb-4">
                  <InputSteps
                    formik={formik}
                    name={"spouseFirstName"}
                    type={"text"}
                    data={dataa[0]?.spouseFirstName}
                  />
                  <InputSteps
                    formik={formik}
                    name={"spouseLastName"}
                    type={"text"}
                    data={dataa[0]?.spouseLastName}
                  />
                  <InputSteps
                    formik={formik}
                    name={"passportNoSpouse"}
                    type={"text"}
                    data={dataa[0]?.passportNoSpouse}
                  />
                  <InputSteps
                    formik={formik}
                    name={"dateOfIssueSpouse"}
                    type={"text"}
                    data={dataa[0]?.dateOfIssueSpouse}
                  />
                  <InputSteps
                    formik={formik}
                    name={"dateOfExpireSpouse"}
                    type={"text"}
                    data={dataa[0]?.dateOfExpireSpouse}
                  />
                </div>
              </>
            )}
          </div>
          <NextStep disableForm={!formik.isValid} type={"submit"} />
        </form>
      </div>
    </div>
  );
};

export default Step01;
