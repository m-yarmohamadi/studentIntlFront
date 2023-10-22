import { useTranslation } from "react-i18next";

const SelectSteps = ({ value, name }) => {
  const { t } = useTranslation();

  return (
    <div className="h-full">
      <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
        {t(name)}
      </label>
      <select className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40">
        {value.map((item) => (
          <option key={item.index} value={item}>
            {t(item)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSteps;
