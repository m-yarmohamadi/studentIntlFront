import SelectSteps from "../components/Steps/SelectSteps";
import { useFormik } from "formik";
import { validationSchema } from "@/Validation/formValidate";
import InputSteps from "../components/Steps/InputSteps";
import NextStep from "../components/Steps/NextStep";
import { useTranslation } from "react-i18next";
const initialValues = {};

const Step09 = () => {
  const { t } = useTranslation();
  const onSubmit = (values) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/students/step01`, {
        values,
      })
      .then((res) => {
        console.log(res.data);
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
      <div className="vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          {t("titleStep09")}
        </div>
        <form className="  grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ">
          <div className=" mb-2">
            <InputSteps formik={formik} name={"uploadAPhoto"} type={"file"} />
          </div>
          <div className=" mb-2">
            <InputSteps
              formik={formik}
              name={"passportPicture"}
              type={"file"}
            />
          </div>
          <div className=" mb-2">
            <InputSteps
              formik={formik}
              name={"imageOfThePreviousDegree"}
              type={"file"}
            />
          </div>
        </form>
        <NextStep />
      </div>
    </div>
  );
};
export default Step09;
