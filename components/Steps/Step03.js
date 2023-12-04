import axios from "axios";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Stepmodal from "./Stepmodal";
import { td, th, step03Td, step03Th } from "./Classes/classSteps";
const Step03 = () => {
  const [data, setData] = useState([]);
  const [showFormGrade, setShowFormGrade] = useState(false);
  useEffect(() => {
    const fetchStep03 = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/auth/getStep03`)
        .then(
          (res) => {
            setData(res.data.data)
            console.log(res.data)
          }
        ).catch(
          (err) => {
            console.log(err)
          }
        )
    }
    fetchStep03()
  }, [showFormGrade]);


  const setModal = () => {
    setShowFormGrade(!showFormGrade);
  };

  const { t } = useTranslation();
  const fetchData = () => {
    dispatch(toggleStep(stepform + 1))
  }
  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/auth/delStep03/${itemId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" fade-in  h-full w-full">
      <div className="  vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" w-full">
          <div className=" py-4 text-3xl text-white font-black">
            {t("titleStep03")}
          </div>
          <div>
            <div className="border border-indigo-50 h-full w-full overflow-auto">
              <table className=" w-full min-w-max table-auto text-left">
                <thead className=" ">
                  <tr>
                    <th className={step03Th}></th>
                    <th className={step03Th}>{t("grade")}</th>
                    <th className={step03Th}>{t("start")}</th>
                    <th className={step03Th}>{t("end")}</th>
                    <th className={step03Th}>{t("fieldOfStudy")}</th>
                    <th className={step03Th}>{t("country")}</th>
                    <th className={step03Th}>{t("city")}</th>
                    <th className={step03Th}>{t("schoolOrUnivercityName")}</th>
                    <th className={step03Th}>{t("GPA")}</th>
                    <th className={step03Th}>{t("outOf")}</th>
                    <th className={step03Th}>{t("fileGrade")}</th>
                  </tr>
                </thead>
                {data.map((item) => (
                  <tbody key={item.id} className="w-full">
                    <tr>
                      <td className={step03Td}><button onClick={() => handleDelete(item.id)}><FaTrashAlt className=" h-6 text-rose-800" /></button></td>
                      <td className={step03Td}>{item.grade}</td>
                      <td className={step03Td}>{item.start}</td>
                      <td className={step03Td}>{item.end}</td>
                      <td className={step03Td}>{item.fieldOfStudy}</td>
                      <td className={step03Td}>{item.country}</td>
                      <td className={step03Td}>{item.city}</td>
                      <td className={step03Td}>{item.schoolOrUnivercityName}</td>
                      <td className={step03Td}>{item.GPA}</td>
                      <td className={step03Td}>{item.outOf}</td>
                      <td className={step03Td}>{item.fileGrade}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setShowFormGrade(true);
              }}
              className=" shadow-md bg-indigo-900 hover:bg-indigo-800 p-2 text-lg text-indigo-50 font-extrabold w-full rounded-md border border-indigo-50 hover:border-indigo-950 my-5"
              type="button"
            >
              {t("clickToRegisterDegree")}
            </button>
          </div>
        </div>
        {showFormGrade && (
          <Stepmodal
            setModal={setModal}
            title={"recordRegisterDegree"}
          />
        )}
        <NextStep disableForm={data.length < 1} type={"submit"} onClick={fetchData} />
      </div>
    </div>
  );
};
export default Step03;
