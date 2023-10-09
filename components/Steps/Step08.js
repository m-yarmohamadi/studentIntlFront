import InputSteps from "./InputSteps";
import TitleComponent from "../TitleComponent";
import NextStep from "./NextStep";

const Step08 = () => {
  return (
    <div className="fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep08"} />
        </div>
        <form className="  grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ">
          <div className=" mb-2">
            <InputSteps name={"uploadAPhoto"} type={"file"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"passportPicture"} type={"file"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"imageOfThePreviousDegree"} type={"file"} />
          </div>
        </form>
        <NextStep />
      </div>
    </div>
  );
};

export default Step08;
