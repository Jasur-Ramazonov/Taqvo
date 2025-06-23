import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setIsClose } from "./utils/mySlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export enum Language {
  UZB = "uz",
  RUS = "ru",
  ENG = "en",
}

const Header = () => {
  const language = localStorage.getItem("i18nextLng") || Language.UZB;
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [isClick, setIsClick] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <div className="fixed w-full top-[15px] z-50 text-[18px] flex justify-center">
      <div className="container">
        <div className="font-montserratalternates w-full xl:px-44 lg:px-10 sm:px-0 px-5">
          <div className="bg-[#441118a1] backdrop-blur-md text-[#fff] flex justify-between items-center rounded-[30px] py-[7px] pl-5 lg:pl-10 pr-5 lg:pr-[7px]">
            <ul className="hidden lg:flex gap-4">
              <li>
                <Link to={"/"}>{t("Home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("AboutUs")}</Link>
              </li>
            </ul>
            <a className="w-[90px] h-[30px]" href="/">
              <img
                className="h-[30px] w-[90px]"
                src="../photos/aqvo logo 2.png"
                alt="logo"
              />
            </a>
            <div className="hidden lg:block">
              <div className="relative inline-block font-roboto">
                <button
                  onClick={() => {
                    setIsClick(!isClick);
                  }}
                  className="px-4 py-2 flex justify-center items-center font-oswal uppercase"
                >
                  {currentLanguage}
                  <span>{isClick ? "▲" : "▼"}</span>
                </button>
                <div
                  className={clsx(
                    "bg-white rounded-md font-oswal absolute text-black overflow-hidden",
                    { "block ": isClick },
                    { "hidden ": !isClick }
                  )}
                >
                  <p
                    onClick={() => {
                      setCurrentLanguage(Language.UZB);
                      setIsClick(false);
                    }}
                    className={clsx("pr-8 pl-3 p-2 cursor-pointer uppercase", {
                      "bg-[#e5e7eb]": currentLanguage === Language.UZB,
                    })}
                  >
                    {Language.UZB}
                  </p>
                  <p
                    onClick={() => {
                      setCurrentLanguage(Language.RUS);
                      setIsClick(false);
                    }}
                    className={clsx("pr-8 pl-3 p-2 cursor-pointer uppercase", {
                      "bg-[#e5e7eb]": currentLanguage === Language.RUS,
                    })}
                  >
                    {Language.RUS}
                  </p>
                  <p
                    onClick={() => {
                      setCurrentLanguage(Language.ENG);
                      setIsClick(false);
                    }}
                    className={clsx("pr-8 pl-3 p-2 cursor-pointer uppercase", {
                      "bg-[#e5e7eb]": currentLanguage === Language.ENG,
                    })}
                  >
                    {Language.ENG}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  dispatch(setIsClose(false));
                }}
                className="rounded-[30px] bg-[#a78861] font-[500] w-[240px] h-[44px] duration-300 hover:bg-[#d1ab7d]"
              >
                {t("Contact")}
              </button>
            </div>
            <div className="lg:hidden block text-2xl">☰</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
