import InputSteps from "./InputSteps";
import TitleComponent from "../TitleComponent";

const Step05 = () => {
  return (
    <div className=" fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 p-8 text-center bg-indigo-900 bg-opacity-60">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep05"} />
        </div>

        <form className="  grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
          <div className=" mb-2">
            <InputSteps name={"email"} type={"email"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"phonenumber"} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"address"} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"mobile"} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps
              name={"ontactNumberOfAnAcquaintanceForEmergencies"}
              type={"text"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step05;
