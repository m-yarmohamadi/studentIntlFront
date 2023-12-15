import SelectSteps from "../components/Steps/SelectSteps";
import { useFormik } from "formik";
import { validationSchema } from "@/Validation/formValidate";
import NextStep from "../components/Steps/NextStep";
import { useTranslation } from "react-i18next";
import InputSteps from "../components/Steps/InputSteps";
import {
  FaChevronDown,
  FaChevronLeft,
  FaCaretLeft,
  FaCaretDown,
} from "react-icons/fa";
import GradeForm from "../components/GradeForm";

const initialValues = {};

const Step03 = () => {
  const { t } = useTranslation();
  const onSubmit = (values) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/students/step011, {
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
          {t("titleStep03")}
        </div>
        <form className=" overflow-auto  my-6 ">
          <GradeForm formik={formik} title={"highSchool"} />
          <GradeForm formik={formik} title={"Bachelor"} />
          <GradeForm formik={formik} title={"Master"} />
          <GradeForm formik={formik} title={"Phd"} />
        </form>
        <NextStep />
      </div>
    </div>
  );
};

export default Step03;
