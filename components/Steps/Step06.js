import InputSteps from "./InputSteps";
import TitleComponent from "../TitleComponent";

const Step06 = () => {
  return (
    <div className="fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 p-8 text-center bg-indigo-900 bg-opacity-60">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep06"} />
        </div>
        <form className="  grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
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
      </div>
    </div>
  );
};

export default Step06;
