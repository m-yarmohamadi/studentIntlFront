import TitleComponent from "../TitleComponent";

const InputSteps = ({ type, name }) => {
  return (
    <div>
      <label className="block text-md font-semibold text-indigo-50 text-start">
        <TitleComponent I={name} />
      </label>
      <input
        type={type}
        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
};

export default InputSteps;
