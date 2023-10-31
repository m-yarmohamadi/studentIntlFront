import { useTranslation } from "react-i18next";
import {
  FaChevronDown,
  FaChevronLeft,
  FaCaretLeft,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import InputSteps from "./Steps/InputSteps";
import { useState } from "react";

const GradeForm = ({ formik, title }) => {
  const { t } = useTranslation();
  const [mudal, setMudal] = useState(false);

  return (
    <div className=" mb-2 p-3 border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20 mt-10 mx-1  ">
      <p
        onClick={() => setMudal(!mudal)}
        className="flex justify-between font-bold text-lg fo text-indigo-50 bg-indigo-950 border border-1 border-indigo-50 px-3 py-1 -mt-10 rounded-t-3xl rounded-b-xl  "
      >
        <span></span>
        <span>{t(title)}</span>
        <span className="px-3">
          {mudal ? (
            <FaCaretUp className="h-6 w-6" />
          ) : (
            <FaCaretDown className="h-6 w-6" />
          )}
        </span>
      </p>
      {mudal && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className=" mb-2">
            <InputSteps formik={formik} name={`start${title}`} type={"date"} />
          </div>
          <div className=" mb-2">
            <InputSteps formik={formik} name={`end${title}`} type={"date"} />
          </div>
          <div className=" mb-2">
            <InputSteps
              formik={formik}
              name={`fieldOfStudy${title}`}
              type={"text"}
            />
          </div>
          <div className=" mb-2">
            <InputSteps
              formik={formik}
              name={`country${title}`}
              type={"text"}
            />
          </div>
          <div className=" mb-2">
            <InputSteps formik={formik} name={`city${title}`} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps
              formik={formik}
              name={`schoolOrUnivercityName${title}`}
              type={"text"}
            />
          </div>
          <div className=" mb-2">
            <InputSteps formik={formik} name={`GPA${title}`} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps formik={formik} name={`outOf${title}`} type={"text"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GradeForm;
