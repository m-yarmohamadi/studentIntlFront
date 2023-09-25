import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { english, persian, arabic } from "@/fuchers/language/languageSlice";
import { FaCogs, FaHome, FaFileContract, FaPowerOff } from "react-icons/fa";
const Layout = ({ title, children }) => {
  const router = useRouter();

  const lang = useSelector((state) => state.languageReducer.value.languageName);
  const direction = useSelector(
    (state) => state.languageReducer.value.direction
  );
  const font = useSelector((state) => state.languageReducer.value.font);

  const dispatch = useDispatch();
  return (
    <div
      style={{ direction: direction, fontFamily: font }}
      className=" box-border container mx-auto "
    >
      <Head>
        <title>{`${title}-studentIntl`}</title>
      </Head>
      <div className=" ttt md:py-12 fexl items-center ">
        <div className=" h-full w-full bg-indigo-200 shadow-lg max-w-full  bg-opacity-70   ">
          <div className="p-2 text-indigo-50  flex  justify-between  bg-indigo-950 w-full h-10    text-center font-black ">
            <div className=" font-extrabold flex justify-start">
              <FaPowerOff className=" me-2 h-6 w-6 " aria-hidden="true" />
              <h1>Mahdi Yarmohamadi</h1>
            </div>
            <div className=" text-indigo-950 flex gap-1">
              {lang !== "persian" && (
                <button
                  className="bg-indigo-200 hover:bg-indigo-300 font-bold p-1 text-sm rounded-sm"
                  onClick={() => dispatch(persian())}
                >
                  FA
                </button>
              )}
              {lang !== "english" && (
                <button
                  className="bg-indigo-200 hover:bg-indigo-300 font-bold p-1 text-sm rounded-sm"
                  onClick={() => dispatch(english())}
                >
                  EN
                </button>
              )}
              {lang !== "arabic" && (
                <button
                  className="bg-indigo-200 hover:bg-indigo-300 font-bold p-1 text-sm rounded-sm"
                  onClick={() => dispatch(arabic())}
                >
                  AR
                </button>
              )}
              <Link href="/dictionary">
                <FaFileContract
                  className="text-indigo-50 hover:text-indigo-100 ms-5 h-6 w-6 "
                  aria-hidden="true"
                />
              </Link>

              <FaCogs
                className="text-indigo-50 hover:text-indigo-100 ms-3 h-6 w-6 "
                aria-hidden="true"
              />

              <Link href="/">
                <FaHome
                  className="text-indigo-50 hover:text-indigo-100 ms-3 h-6 w-6 "
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <main className="pb-10 h-full w-full max-h-max  text-center  ">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
