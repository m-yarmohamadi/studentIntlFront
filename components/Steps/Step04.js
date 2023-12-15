import axios from "axios";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import NextStep from "./NextStep";
import Stepmodal from "./Step04Modal";
import { step03Td, td, th } from "./Classes/classSteps";
import toast from 'react-hot-toast';



const minLengh = 1
const maxLengh = 3

const Step04 = () => {
  const [data, setData] = useState([]);
  const [showFormLanguage, setShowFormLanguage] = useState(false);
  useEffect(() => {
    const fetchStep04 = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/auth/getStep04`)
        .then((res) => {
          setData(res.data.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchStep04();
  }, [showFormLanguage]);

  const setModal = () => {
    setShowFormLanguage(!showFormLanguage);
  };

  const { t } = useTranslation();
  const fetchData = () => {
    dispatch(toggleStep(stepform + 1));
  };
  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}/auth/delStep04/${itemId}`
      );
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
            {t("titleStep04")}
          </div>
          <div>
            <div className="border border-indigo-50 h-full w-full overflow-auto">
              <table className="w-full min-w-max table-auto text-left">
                <thead >
                  <th className={th}></th>
                  <th className={th}>{t("languageName")}</th>
                  <th className={th}>{t("nativeLanguage")}</th>
                  <th className={th}>{t("reading")}</th>
                  <th className={th}>{t("writing")}</th>
                  <th className={th}>{t("speaking")}</th>
                  <th className={th}>{t("fileLanguage")}</th>
                </thead>
                {data.map((item) => (
                  <tbody key={item.id} className="w-full">
                    <tr>
                      <td className={step03Td}>
                        <button onClick={() => handleDelete(item.id)}>
                          <FaTrashAlt className=' h-6 text-rose-800' />
                        </button>
                      </td>
                      <td className={td}>{item.languageName}</td>
                      <td className={td}>{item.nativeLanguage}</td>
                      <td className={td}>{item.reading}</td>
                      <td className={td}>{item.writing}</td>
                      <td className={td}>{item.speaking}</td>
                      <td className={step03Td}><img src={`${process.env.NEXT_PUBLIC_URL}/${item.fileLanguage}`} alt='' /></td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div>


            {data.length > maxLengh ? <button

              onClick={() => { toast.error("شما مجاز به ثبت بیش از 4 رکورد نمی باشید") }
              }
              className=' shadow-md bg-indigo-900 hover:bg-indigo-800 p-2 text-lg text-indigo-50 font-extrabold w-full rounded-md border border-indigo-50 hover:border-indigo-950 my-5'
              type='button'
            >
              {t('clickToLanguage')}
            </button> : <button
              onClick={() => {
                setShowFormLanguage(true);
              }}
              className=' shadow-md bg-indigo-900 hover:bg-indigo-800 p-2 text-lg text-indigo-50 font-extrabold w-full rounded-md border border-indigo-50 hover:border-indigo-950 my-5'
              type='button'
            >
              {t('clickToLanguage')}
            </button>}

          </div>
        </div>
        {showFormLanguage && <Stepmodal setModal={setModal} title={'recordRegisterDegree'} />}
        <NextStep disableForm={data.length < minLengh} type={'submit'} onClick={fetchData} />
      </div>
    </div>
  );
};
export default Step04;
