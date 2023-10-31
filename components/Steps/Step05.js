import SelectSteps from "./SelectSteps";
import { Formik, Form, Field, useFormik } from "formik";
import { validationSchema } from "@/Validation/formValidate";

import InputSteps from "./InputSteps";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const initialValues = {};
const data = [
  {
    id: 1,
    start: "0",
    end: "0",
    fieldOfStudy: "0",
    country: "0",
    city: "0",
    schoolOrUnivercityName: "0",
    GPA: "0",
    outOf: "0",
  },
];
const Step05 = () => {
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
  const [list, setList] = useState(data);

  const handleRowClick = (
    start,
    end,
    fieldOfStudy,
    country,
    city,
    schoolOrUnivercityName,
    GPA,
    outOf
  ) => {};

  const handleSubmit = (values, { resetForm }) => {
    const newItem = {
      id: list.length + 1,
      start: values.start,
      end: values.end,
      fieldOfStudy: values.fieldOfStudy,
      country: values.country,
      city: values.city,
      schoolOrUnivercityName: values.schoolOrUnivercityName,
      GPA: values.GPA,
      outOf: values.outOf,
    };
    setList([...list, newItem]);
    resetForm();
  };
  return (
    <div className=" fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          {t("titleStep05")}
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <table className="      border border-1 border-indigo-300  w-full ">
                <thead className="">
                  <tr className="">
                    <th>start</th>
                    <th>end</th>
                    <th>fieldOfStudy</th>
                    <th>country</th>
                    <th>city</th>
                    <th>schoolOrUnivercityName</th>
                    <th>GPA</th>
                    <th>outOf</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() =>
                        handleRowClick(
                          item.start,
                          item.end,
                          item.fieldOfStudy,
                          item.country,
                          item.city,
                          item.schoolOrUnivercityName,
                          item.GPA,
                          item.outOf
                        )
                      }
                    >
                      <td>{item.start}</td>
                      <td>{item.end}</td>
                      <td>{item.fieldOfStudy}</td>
                      <td>{item.country}</td>
                      <td>{item.city}</td>
                      <td>{item.schoolOrUnivercityName}</td>
                      <td>{item.GPA}</td>
                      <td>{item.outOf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <label htmlFor="start">start:</label>
              <Field name="start" type="text" value={values.name} />

              <label htmlFor="end">end:</label>
              <Field name="end" type="text" value={values.name} />

              <label htmlFor="fieldOfStudy">fieldOfStudy:</label>
              <Field
                name="fieldOfStudy"
                type="text"
                value={values.fieldOfStudy}
              />

              <label htmlFor="country">country:</label>
              <Field name="country" type="text" value={values.country} />

              <label htmlFor="city">city:</label>
              <Field name="city" type="text" value={values.city} />

              <label htmlFor="schoolOrUnivercityName">
                schoolOrUnivercityName:
              </label>
              <Field
                name="schoolOrUnivercityName"
                type="text"
                value={values.schoolOrUnivercityName}
              />

              <label htmlFor="GPA">GPA:</label>
              <Field name="GPA" type="text" value={values.GPA} />

              <label htmlFor="outOf">outOf:</label>
              <Field name="outOf" type="text" value={values.outOf} />

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>

        <NextStep />
      </div>
    </div>
  );
};

export default Step05;
