import SelectSteps from "./SelectSteps";
import { useFormik } from "formik";
import { validationSchema } from "@/Validation/formValidate";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
import CheckboxStep from "./CheckboxStep";
const initialValues = {};

const Step08 = () => {
  const { t } = useTranslation();
  const onSubmit = (values) => {
    axios
      .post("http://127.0.0.1:5000/students/step01", {
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
          {t("titleStep08")}
        </div>

        <form className="my-6">
          <div className=" p-2 mb-2 grid grid-cols-1 md:grid-cols-2 gap-4 border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20">
            <div className=" mb-2">
              <SelectSteps
                formik={formik}
                name={"applicationType"}
                value={["nonScholarship", "scholarship"]}
              />
            </div>
            <div className=" mb-2">
              <SelectSteps
                formik={formik}
                name={"scholarshipType"}
                value={[
                  "scholarshipOfIslamicRepublicOfIran",
                  "scholarshipOfUniversityOfScienceAndCulture",
                  "scholarshipOfApplicantSCountry",
                ]}
              />
            </div>
          </div>
          <div className="mb-2 p-3 border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20">
            <div className=" mb-2">
              <SelectSteps
                formik={formik}
                name={"Degree"}
                value={["Bachelor", "Master", "PhD"]}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"firstPriority"}
                  value={["001", "002", "003"]}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"secondPriority"}
                  value={["0001", "0002", "0003"]}
                />
              </div>
              <div className=" mb-2">
                <SelectSteps
                  formik={formik}
                  name={"thirdPriority"}
                  value={["00001", "00002", "00003"]}
                />
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-5 gap-2 ">
            <div className="p-2 col-span-3 grid grid-cols-1 md:grid-cols-2 gap-2 border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20">
              <div className=" mb-2">
                <CheckboxStep
                  formik={formik}
                  name={"sabbatical"}
                  type={"checkbox"}
                />
              </div>
              <div className=" mb-2">
                <CheckboxStep
                  formik={formik}
                  name={"degreeAndGraduationConfirmationLetter"}
                  type={"checkbox"}
                />
              </div>
              <div className=" mb-2">
                <CheckboxStep
                  formik={formik}
                  name={"studentExchangeProgram"}
                  type={"checkbox"}
                />
              </div>
              <div className=" mb-2">
                <CheckboxStep
                  formik={formik}
                  name={"Other"}
                  type={"checkbox"}
                />
              </div>
            </div>
            <div className="p-2 col-span-2 flex flex-col border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20">
              <label
                className="block text-md font-normal text-indigo-50 text-center"
                for=""
              >
                {t("reasonForStudyingInThisUniversity")}
              </label>
              <textarea></textarea>
            </div>
          </div>
        </form>
        <NextStep />
      </div>
    </div>
  );
};

export default Step08;
