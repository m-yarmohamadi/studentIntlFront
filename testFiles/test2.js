import { ErrorMessage, Formik, useFormik } from "formik";
import React from "react";

const test2 = () => {
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="fName"></label>
        <input
          className="p-3 m-3"
          onChange={formik.handleChange}
          value={formik.values.fName}
          type="text"
          name="fName"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="text-white "></div>

      <div>
        <label htmlFor="lName"></label>

        <input
          className="p-3 m-3"
          onChange={formik.handleChange}
          value={formik.values.lName}
          type="text"
          name="lName"
          placeholder="Enter Your Last Name"
        />
      </div>
      <div className="text-white "></div>

      <div>
        <button className="p-3 m-3 bg-rose-300" type="submit">
          submit{" "}
        </button>
      </div>
    </form>
  );
};

export default test2;
