import TitleComponent from "../TitleComponent";
import InputSteps from "./InputSteps";
import NextStep from "./NextStep";


const Step02 = () => {
  return (
    <div className="fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep02"} />
        </div>

        <form className="  grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className=" mb-2">
            <InputSteps name={"placeOfPreviousEducation"} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"degreeTaken"} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"startStudying"} type={"date"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"endStudying"} type={"date"} />
          </div>
        </form>
        <NextStep />

      </div>
    </div>
  );
};

export default Step02;
