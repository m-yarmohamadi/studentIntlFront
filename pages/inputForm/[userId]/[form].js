import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';


import Layout from "@/components/Layout";
import Step01 from "@/components/Steps/Step01";
import Step02 from "@/components/Steps/Step02";
import Step03 from "@/components/Steps/Step03";
import Step04 from "@/components/Steps/Step04";
import Step05 from "@/components/Steps/Step05";
import Step06 from "@/components/Steps/Step06";
import Step07 from "@/components/Steps/Step07";
import Step08 from "@/components/Steps/Step08";
import ErrorBoundary from "@/components/ErrorBoundary";
import { TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from "react-icons/tb";
import ButtonStep from "@/components/Steps/ButtonStep";

const inputForm = () => {
  const router = useRouter()

  const lang = useSelector((state) => state.languageReducer.value.languageName);
  const stepform = useSelector((state) => state.stepReducer.step);
  const [allData, setAllData] = useState()
  const [data01, setData01] = useState()
  const [data02, setData02] = useState([])
  const [data03, setData03] = useState([])
  const [data04, setData04] = useState([])
  const [data05, setData05] = useState([])
  const [data06, setData06] = useState([])
  const [data07, setData07] = useState([])
  const params = {
    userId: router.query.userId,
    courceId:router.query.form,
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/auth/getDataById`,{params})
        .then((res) => {
          setAllData(res.data.dataById);
          setData01(res.data.dataById.cource[0].step01[0]);
          setData02(res.data.dataById.cource[0].step02[0]);
          setData03(res.data.dataById.cource[0].step03);
          setData04(res.data.dataById.cource[0].step04);
          setData05(res.data.dataById.cource[0].step05);
          setData06(res.data.dataById.cource[0].step06);
          setData07(res.data.dataById.cource[0].step07);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [allData]);

  return (
    <Layout title="فرم ثبت نام">
      <div
        className={`h-full max-h-full fade-in l flex flex-col justify-between`}
      >
        <div className={` w-full max-w-full `}>
          <div
            className={` font-normal max-w-full grid grid-cols-3 md:grid-cols-9 gap-1 p-1`}
          >
            <ButtonStep step={1} titleStep={"titleStep01"} Step={"Step"} data={data01}  />
            <ButtonStep step={2} titleStep={"titleStep02"} Step={"Step"} data={data02}  />
            <ButtonStep step={3} titleStep={"titleStep03"} Step={"Step"} data={data03}  />
            <ButtonStep step={4} titleStep={"titleStep04"} Step={"Step"} data={data04}  />
            <ButtonStep step={5} titleStep={"titleStep05"} Step={"Step"} data={data05}  />
            <ButtonStep step={6} titleStep={"titleStep06"} Step={"Step"} data={data06}  />
            <ButtonStep step={7} titleStep={"titleStep07"} Step={"Step"} data={data07}  />
            <ButtonStep step={8} titleStep={"titleStep08"} Step={"Step"} data={allData} />
            {/* <ButtonStep step={9} titleStep={"titleStep09"} Step={"Step"} />
            <ButtonStep step={10} titleStep={"titleStep10"} Step={"Step"} /> */}
          </div>
          <div>
            {stepform === 1 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step01 data={data01}/>
                </ErrorBoundary> 
              </div>
            )}
            {stepform === 2 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step02 data={data02}/>
                </ErrorBoundary>
              </div>
            )}
            {stepform === 3 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step03 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 4 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step04 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 5 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step05 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 6 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step06 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 7 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step07 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 8 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step08 />
                </ErrorBoundary>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default inputForm;
