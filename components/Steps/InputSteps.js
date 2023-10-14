import TitleComponent from "../TitleComponent";

const InputSteps = ({ type, name, formik }) => {
  return (
    <div className=" h-full">
      <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
        <TitleComponent I={name} />
      </label>
      <input
        type={type}
        {...formik.getFieldProps(name)}
        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className=" text-xs text-start text-rose-400">
          {formik.errors[name]}
        </p>
      )}
    </div>
  );
};

export default InputSteps;
