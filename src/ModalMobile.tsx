import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { setIsOpen } from "./utils/mySlice";
import { Link } from "react-router-dom";
import { Language } from "./Header";
import { useEffect } from "react";
import { setCurrentLanguage } from "./utils/mySlice";
import { useTranslation } from "react-i18next";

const ModalMobile = () => {
  const isOpen = useSelector((state: RootState) => state.myReducer.isOpen);
  const currentLanguage = useSelector(
    (state: RootState) => state.myReducer.currentLanguage
  );
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <div
      className={clsx(
        "h-screen fixed w-[300px] bg-white/80 backdrop-blur-3xl z-[999999] transition-all duration-300 p-[10px] top-0",
        { "right-0 ": isOpen },
        { "-right-full ": !isOpen }
      )}
    >
      <button
        onClick={() => {
          dispatch(setIsOpen(false));
        }}
        className="text-red-800 absolute right-1 text-3xl"
      >
        ⤬
      </button>
      <div className="flex flex-col gap-4 mt-14">
        <Link to="/" className="w-[150px]">
          <img src="../photos/aqvo logo 2.png" alt="Taqvo logo" />
        </Link>
        <ul className="flex flex-col gap-4 text-red-800 font-[500] text-base font-montserratalternates">
          <li>
            <Link to={"/"}>{t("Home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("AboutUs")}</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 font-oswal">
          <button
            onClick={() => {
              dispatch(setCurrentLanguage(Language.UZB));
            }}
            className="w-full font-medium border-[2px] border-red-800 rounded-full py-[10px] text-[15px] uppercase text-red-800"
          >
            {Language.UZB}
          </button>
          <button
            onClick={() => {
              dispatch(setCurrentLanguage(Language.RUS));
            }}
            className="w-full font-medium border-[2px] border-red-800 rounded-full py-[10px] text-[15px] uppercase text-red-800"
          >
            {Language.RUS}
          </button>
          <button
            onClick={() => {
              dispatch(setCurrentLanguage(Language.ENG));
            }}
            className="w-full font-medium border-[2px] border-red-800 rounded-full py-[10px] text-[15px] uppercase text-red-800"
          >
            {Language.ENG}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMobile;
