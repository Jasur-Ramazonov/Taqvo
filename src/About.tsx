import Header from "./Header";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import Modal from "./Modal";
import ModalMobile from "./ModalMobile";

const About = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.myReducer.currentLanguage
  );

  const certificates = [
    "../photos/sertifikat 1.png",
    "../photos/sertifikat 2.png",
    "../photos/sertifikat 3.png",
    "../photos/sertifikat 4.png",
  ];

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);
  return (
    <div className="w-full h-fit bg-red-800 text-white font-montserratalternates">
      <Header />
      <section className="w-full flex justify-center pt-40">
        <div className="container">
          <div className="xl:px-44 lg:px-10 sm:px-0 px-5">
            <p className="w-full text-center text-3xl sm:text-4xl text-red-200 font-oswal mb-10">
              {t("About title 1")}
            </p>
            <div className="flex flex-col lg:flex-row gap-y-5 gap-x-10 mb-16">
              <div className="lg:w-[46%] rounded-xl overflow-hidden">
                <img
                  src="../photos/photo 3.jpg"
                  alt="taqvo image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
                <h1 className="text-[24px] text-white font-medium">
                  <span className="block text-[#c08e72]">
                    {t("TAQVO Minced Meat Products")}
                  </span>
                  {t("TAQVO Minced Meat Products text")}
                </h1>
                <p className="text-[15px] font-medium text-white">
                  {t("About text 1")}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse gap-y-5 gap-x-10 mb-16">
              <div className="lg:w-[46%] rounded-xl overflow-hidden">
                <img src="../photos/about 1.jpg" alt="About 1" />
              </div>
              <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
                <h1 className="text-[24px] text-white font-medium">
                  <span className="block text-[#c08e72]">Taqvo</span>
                  {t("Taqvo text")}
                </h1>
                <p className="text-[15px] font-medum text-white">
                  {t("About text 2")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 mb-16">
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  src="../photos/photo 1.jpg"
                  alt="photo 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-5 justify-between">
                <p className="text-[15px] font-medium text-white">
                  {t("About text 3")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center pb-20">
              <h1 className="font-oswal text-[#d1ab7d] text-3xl font-medium mb-5 uppercase">
                {t("Our Certificates")}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {certificates.map((certificate, index) => (
                  <img src={certificate} alt={`certificate ${index}`} />
                ))}
              </div>
            </div>
            <div className="pb-10 pt-20">
              <div className="flex flex-col items-center justify-center gap-y-5 text-white">
                <p className="max-w-[564px] text-center">{t("Ad")}</p>
                <div className="flex gap-x-5 text-white/60">
                  <a
                    className="text-2xl hover:scale-105 w-[25px] h-[25px]"
                    href="https://www.instagram.com/aqvo_jiz/"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="text-2xl hover:scale-105 w-[25px] h-[25px]"
                    href="/"
                  >
                    <LiaTelegramPlane />
                  </a>
                </div>
                <p className="font-montserratalternates text-[16px]">
                  © {t("All rights reserved")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <Modal />
      {/* Modal mobile */}
      <ModalMobile />
    </div>
  );
};

export default About;
