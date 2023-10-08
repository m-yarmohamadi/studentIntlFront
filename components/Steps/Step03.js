import SelectSteps from "./SelectSteps";
import TitleComponent from "../TitleComponent";
import NextStep from "./NextStep";

const Step03 = () => {
  return (
    <div className="fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep03"} />
        </div>
        <form className="  grid grid-cols-1 md:grid-cols-3 gap-4 my-6 ">
          <div className=" mb-2">
            <SelectSteps
              name={"courseType"}
              value={["fullTime", "inPerson", "notInPerosn"]}
            />
          </div>
          <div className=" mb-2">
            <SelectSteps name={"fieldName"} value={["medical", "dental"]} />
          </div>
          <div className=" mb-2">
            <SelectSteps
              name={"grade"}
              value={["bachelorsDegree", "mastersDegree", "phd"]}
            />
          </div>
          <div className=" mb-2">
            <SelectSteps
              name={"college"}
              value={["medicalSchool", "dentalCollege"]}
            />
          </div>
        </form>
        <NextStep />

      </div>
    </div>
  );
};

export default Step03;
