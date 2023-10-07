import InputSteps from "./InputSteps";
import SelectSteps from "./SelectSteps";
import TitleComponent from "../TitleComponent";

const Step04 = () => {
  return (
    <div className="fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 p-8 text-center bg-indigo-900 bg-opacity-60">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep04"} />
        </div>
        <form className="  grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
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
          <div className=" mb-2">
            <InputSteps name={"sendingResume"} type={"file"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"sendAMotivationLetter"} type={"file"} />
          </div>
          <div className=" mb-2">
            <InputSteps
              name={"letterOfIntroductionFromTheProfessor"}
              type={"file"}
            />
          </div>

          {/* <div className="  mt-6">
<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
  Login
</button>
</div> */}
        </form>
      </div>
    </div>
  );
};

export default Step04;
