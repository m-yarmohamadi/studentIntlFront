import { useTranslation } from "react-i18next";

const SelectSteps = ({ value, name, formik }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-start h-full">
      <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
        {t(name)}
      </label>
      <select
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
        value={formik.values[name]}
        onChange={(e) => {
          formik.setFieldValue(name, e.target.value);
          formik.setFieldTouched(name, true);
        }}
        className={
          formik.errors[name] && formik.touched[name]
            ? `block w-full px-4 py-1 mt-2 text-indigo-700 bg-rose-100 border rounded-md focus:border-indigo-400 border-rose-400  focus:ring-rose-600 focus:outline-none focus:ring focus:ring-opacity-40`
            : `block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`
        }
      >
        <option value="">{t('pleaseSelect')}</option>
        {value.map((item) => (
          <option key={item.id} value={item} >
            {t(item)}
          </option>
        ))}
      </select>
      <div className=" h-4">
        {formik.errors[name] && formik.touched[name] && (
          <p className=" text-xs text-start text-rose-400">
            {formik.errors[name]}
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectSteps;
