import SelectSteps from "./SelectSteps";
import { useFormik } from "formik";
import { Step01Validation } from "@/Validation/formValidate";
import InputSteps from "./InputSteps";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
const validationSchema = Step01Validation;


const initialValues = {
  firstname: "",
  middlename: "",
  lastname: "",
  firstnamepersian: "",
  middlenamepersian: "",
  lastnamepersian: "",
  fathername: "",
  mothername: "",
  dateOfBirth: "",
  country: "",
  city: "",
  sex: "",
  maritalstatus: "",
  numOfChildren: "",
  religion: "",
  passportNumber: "",
  dateOfIssue: "",
  dateOfExpire: "",
  placeOfIssue: "",
  nationalities: "",
  address: "",
  tel: "",
  email: "",
  fax: "",
  mobile: "",
  spouseFirstName: "",
  spouseLastName: "",
  passportNoSpouse: "",
  dateOfIssueSpouse: "",
  dateOfExpireSpouse: "",
};

const Step01 = () => {
  const { t } = useTranslation();
  const onSubmit = (values) => {
    console.log(values);
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
                <InputSteps formik={formik} name={"firstname"} type={"text"} />
                <InputSteps formik={formik} name={"middlename"} type={"text"} />
                <InputSteps formik={formik} name={"lastname"} type={"text"} />
              </div>
              <div className="pt-5 pb-2 text-sm tracking-tight border border-1 border-white px-2  bg-indigo-900 bg-opacity-75 grid grid-cols-3 gap-2  mb-4">
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
                  value={["Iran", "Iraq"]}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"city"}
                  value={["Tehran", "Ahvaz"]}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"sex"}
                  value={["man", "woman"]}
                />
              </div>
              <div className="tracking-tight px-2  grid grid-cols-2 gap-2 mb-2">
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
            <div className="text-indigo-50 font-extrabold text-start">
              {t("spouseInformation")}
            </div>
            <div className="pt-5 pb-2 text-sm tracking-tight border border-1 border-white px-2  bg-indigo-900 bg-opacity-75 grid grid-cols-5 gap-2  mb-4">
              <InputSteps
                formik={formik}
                name={"spouseFirstName"}
                type={"text"}
              />
              <InputSteps
                formik={formik}
                name={"spouseLastName"}
                type={"text"}
              />
              <InputSteps formik={formik} name={"passportNoSpouse"} type={"text"} />
              <InputSteps formik={formik} name={"dateOfIssueSpouse"} type={"text"} />
              <InputSteps formik={formik} name={"dateOfExpireSpouse"} type={"text"} />
            </div>
          </div>
          <NextStep />
        </form>
      </div>
    </div>
  );
};

export default Step01;
