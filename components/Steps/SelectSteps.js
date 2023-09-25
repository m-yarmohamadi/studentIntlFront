import TitleComponent from "../TitleComponent";

const SelectSteps = ({ value, name }) => {
  return (
    <div>
      <label className="block text-md font-semibold text-indigo-50 text-start">
        <TitleComponent I={name} />
      </label>
      <select className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40">
        {value.map((item) => (
          <option key={item.index} value={item}>
            <TitleComponent I={item} />
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSteps;
