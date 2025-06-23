import { useEffect, useState } from "react";
import Header from "./Header";
import "./swiper.css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./AutoScrollingGallery.css";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import clsx from "clsx";
import Modal, { Message } from "./Modal";
import { setIsClose } from "./utils/mySlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";

const Mainpage = () => {
  const { t } = useTranslation();
  const [duration, setDuration] = useState(50);
  const [isClick, setIsClick] = useState(false);
  const [serviceType, setServicetype] = useState(t("Select a service type"));

  const dispatch = useDispatch();

  const calculateDuration = () => {
    const screenWidth = window.innerWidth;

    const duration = Math.floor(screenWidth / 25);
    setDuration(duration);
  };

  const { reset, register, handleSubmit } = useForm<Message>();

  const images = [
    "../photos/circle photo 1.jpg",
    "../photos/circle photo 2.jpg",
    "../photos/circle photo 3.jpg",
    "../photos/circle photo 4.jpg",
    "../photos/circle photo 5.jpg",
    "../photos/circle photo 6.jpg",
    "../photos/circle photo 7.jpg",
    "../photos/circle photo 8.jpg",
    "../photos/circle photo 9.jpg",
  ];

  const images2 = [
    "../photos/caruosel 1.jpg",
    "../photos/caruosel 2.jpg",
    "../photos/caruosel 3.jpg",
    "../photos/caruosel 4.jpg",
    "../photos/caruosel 5.jpg",
    "../photos/caruosel 6.jpg",
    "../photos/caruosel 7.jpg",
    "../photos/caruosel 8.jpg",
    "../photos/caruosel 9.jpg",
    "../photos/caruosel 10.jpg",
  ];

  const sertificates = [
    "../photos/sertifikat 1.png",
    "../photos/sertifikat 2.png",
    "../photos/sertifikat 3.png",
    "../photos/sertifikat 4.png",
  ];

  useEffect(() => {
    calculateDuration();
    window.addEventListener("resize", calculateDuration);
  }, []);

  return (
    <div className="w-full h-[100vh] flex flex-col ">
      <Header />
      <section className="flex flex-col bg-[#991b1b] lg:pb-0 pb-14">
        <div className="marquee-container lg:order-1 order-2 lg:mt-48 lg:pb-0 pb-16">
          <div
            className="marquee-content"
            style={{ animationDuration: `${duration}s` }}
          >
            <span className="uppercase text-[12vw] font-medium font-oswal">
              {t("CaruaselText")}
            </span>
            <span className="uppercase text-[12vw] font-medium font-oswal">
              {t("CaruaselText")}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center order-1 lg:order-2">
          <div className="container">
            <div className="xl:px-44 lg:px-10 sm:px-0 px-5 flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-8 py-12  lg:mt-0 mt-24">
              <div className="font-montserratalternates text-white lg:max-w-[350px] lg:text-left max-w-[460px] text-center">
                {t("AboutTaqvo")}
              </div>
              <div className="h-[160px] w-[160px] border border-white rounded-full relative">
                <button className="h-[145px] w-[145px] rounded-full bg-[#450a0a] lg:flex hidden justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    className="w-[90px] h-[90px]"
                    src="../photos/aqvo logo.png"
                    alt="logo"
                  />
                </button>
                <button
                  onClick={() => {
                    dispatch(setIsClose(false));
                  }}
                  className="h-[145px] w-[145px] uppercase rounded-full bg-[#d1ab7d] text-white font-montserratalternates text-[20px] font-medium flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:opacity-0 apcity-100 duration-300 hover:opacity-100"
                >
                  {t("Order")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="../photos/photo 1.jpg"
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <div
              className="h-[600px] bg-center bg-cover relative flex flex-col justify-center items-center gap-6"
              style={{ backgroundImage: `url("../photos/photo 4.jpg")` }}
            >
              <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
              <h3 className="text-white z-10 font-oswal text-[35px] sm:text-[50px] md:text-[76px] lg:text-[86px] font-[600] uppercase text-center">
                {t("About Taqvo brend")}
              </h3>
              <p className="font-montserratalternates text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-white font-[400] z-10 text-center lg:max-w-[760px]">
                {t("About Taqvo brend text")}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[600px] bg-center bg-cover relative flex flex-col justify-center items-center gap-6"
              style={{ backgroundImage: `url("../photos/photo 3.jpg")` }}
            >
              <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
              <h3 className="text-white z-10 font-oswal text-[35px] sm:text-[50px] md:text-[76px] lg:text-[86px] font-[600] uppercase text-center">
                {t("Product types")}
              </h3>
              <p className="font-montserratalternates text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-white font-[400] z-10 text-center lg:max-w-[760px]">
                {t("Product types text")}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[600px] bg-center bg-cover relative flex flex-col justify-center items-center gap-6"
              style={{ backgroundImage: `url("../photos/photo 2.jpg")` }}
            >
              <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0"></div>
              <h3 className="text-white z-10 font-oswal text-[35px] sm:text-[50px] md:text-[76px] lg:text-[86px] font-[600] uppercase text-center">
                {t("Delivery range")}
              </h3>
              <p className="font-montserratalternates text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-white font-[400] z-10 text-center lg:max-w-[760px]">
                {t("Delivery range text")}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="bg-red-800 py-[50px] sm:py-[70px]">
        <div className="container">
          <div className="xl:px-44 lg:px-10 sm:px-0 px-5 flex justify-center lg:justify-between items-center text-white">
            <div className="relative">
              <h1 className="text-[25px] sm:text-[32px] max-w-[415px] uppercase font-montserratalternates">
                {t("Your moments with Taqvo")}
              </h1>
              <div className="absolute -bottom-[50px] sm:-bottom-[30px] right-0 sm:-right-[100px]">
                <img
                  className="w-[150px] sm:w-[200px] h-auto"
                  src="../photos/aqvo logo 2.png"
                  alt="taqvo logo"
                />
              </div>
            </div>
            <div className="hidden lg:flex items-center flex-col gap-[10px] w-[260px]">
              <button className="w-full rounded-full border border-white font-medium py-[15px] text-[15px] hover:bg-white hover:text-red-800 transition-colors duration-300 cursor-pointer font-montserratalternates">
                {t("Our Instagram")}
              </button>
              <button className="w-full rounded-full border border-white font-medium py-[15px] text-[15px] hover:bg-white hover:text-red-800 transition-colors duration-300 cursor-pointer font-montserratalternates">
                {t("Our Telegram")}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <div className="mb-[30px]">
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {images.concat(images).map((src, index) => (
                  <div
                    className="marquee-item w-[200px] sm:w-[280px] lg:w-[300px] h-[200px] sm:h-[280px] lg:h-[300px] object-cover"
                    key={index}
                  >
                    <img src={src} alt={`slide-${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track2">
              {images2.concat(images2).map((src, index) => (
                <div
                  className="marquee-item w-[140px] sm:w-[180px] lg:w-[200px] h-[140px]  sm:h-[180px] lg:h-[200px]"
                  key={index}
                >
                  <img src={src} alt={`${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="container">
            <div className="xl:px-44 lg:px-10 sm:px-0 px-5 lg:hidden flex items-center gap-[10px] mt-[30px] text-white w-full ">
              <button className="w-full rounded-full border border-white font-medium py-[15px] text-[14px] font-montserratalternates">
                {t("Our Instagram")}
              </button>
              <button className="w-full rounded-full border border-white font-medium py-[15px] text-[14px] font-montserratalternates">
                {t("Our Telegram")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-[50px] sm:pt-[100px] pb-[50px]">
        <div
          className="absolute inset-0 bg-cover bg-center -z-[999]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5)),url("../photos/22-C.jpg")`,
          }}
        ></div>
        <div className="w-full flex justify-center">
          <div className="container ">
            <div className="xl:px-44 lg:px-10 sm:px-0 px-5 flex lg:flex-row flex-col justify-between">
              <div className="max-w-full lg:max-w-[500px] text-white">
                <h3 className="font-oswal text-[32px] uppercase font-semibold mb-[10px]">
                  {t("Feel the new taste with Taqvo")}
                </h3>
                <p className="text-[15px] font-montserratalternates">
                  {t("Feel the new taste with Taqvo text")}
                </p>
                <p className="text-[15px] mt-[30px] font-montserratalternates">
                  {t("Our contact phone numbers:")}
                </p>
                <div className="text-[15px] mt-[5px] space-y-[5px] font-montserratalternates">
                  <p>
                    <a href="tel:+998957724444">Tel: +998957724444</a>
                  </p>
                  <p>
                    <a href="tel:+998996440101">Tel: +998996440101</a>
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleSubmit((d) => {
                  if (serviceType === t("Select a service type")) {
                    d.seviceType = t("Product");
                  }
                  d.seviceType = serviceType;
                  const token =
                    "7756947041:AAF0exwc0-WQMougfhgLi5CpavKLZBmve10";
                  const chatId = 1936754751;
                  const url = `https://api.telegram.org/bot${token}/sendMessage`;
                  const message = `${t("Your name")} ${d.name} \n${t(
                    "Your surname"
                  )} ${d.surname}\n${t("Your phone number")} ${
                    d.phoneNumber
                  } \n${t("Telegram username")} ${d.telegramUsername} \n${t(
                    "Region"
                  )} ${d.region} \n${t("Select a service type")} ${
                    d.seviceType
                  } \n${t("Message")} ${d.message}`;
                  const data = {
                    chat_id: chatId,
                    text: message,
                  };
                  axios
                    .post(url, data)
                    .then(() => {
                      reset();
                      dispatch(setIsClose(true));
                      setServicetype(t("Select a service type"));
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                })}
                className="space-y-6"
              >
                <div className="flex gap-4 w-full">
                  <div className="w-full font-montserratalternates">
                    <input
                      required
                      {...register("name")}
                      type="text"
                      placeholder={t("Your name")}
                      className="w-full pl-0 sm:pl-2 text-[14px] sm:text-[16px] p-2 mt-2 bg-transparent border-b border-white outline:none focus:outline-none text-white placeholder:text-white"
                    />
                  </div>
                  <div className="w-full font-montserratalternates">
                    <input
                      required
                      {...register("surname")}
                      type="text"
                      placeholder={t("Your surname")}
                      className="w-full pl-0 sm:pl-2 text-[14px] sm:text-[16px] p-2 mt-2 bg-transparent border-b border-white outline:none focus:outline-none text-white placeholder:text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="w-full font-montserratalternates">
                    <input
                      required
                      {...register("phoneNumber")}
                      type="tel"
                      placeholder={t("Your phone number")}
                      className="w-full pl-0 sm:pl-2 text-[14px] sm:text-[16px] p-2 mt-2 bg-transparent border-b border-white outline:none focus:outline-none text-white placeholder:text-white"
                    />
                  </div>
                  <div className="w-full font-montserratalternates">
                    <input
                      required
                      {...register("telegramUsername")}
                      type="text"
                      placeholder={t("Telegram username")}
                      className="w-full pl-0 sm:pl-2 text-[14px] sm:text-[16px] p-2 mt-2 bg-transparent border-b border-white outline:none focus:outline-none text-white placeholder:text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="w-full font-montserratalternates">
                    <input
                      required
                      {...register("region")}
                      type="text"
                      placeholder={t("Region")}
                      className="w-full pl-0 sm:pl-2 text-[14px] sm:text-[16px] p-2 mt-2 bg-transparent border-b border-white outline:none focus:outline-none text-white placeholder:text-white"
                    />
                  </div>
                  <div className="w-full font-montserratalternates">
                    <div
                      onClick={() => {
                        setIsClick(!isClick);
                      }}
                      className="relative w-full pl-0 sm:pl-2 text-[14px] sm:text-[16px] p-2 mt-2 bg-transparent border-b border-white outline:none focus:outline-none text-white placeholder:text-white cursor-pointer flex justify-between items-center"
                    >
                      <p>{serviceType}</p>
                      {isClick ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      <div
                        className={clsx(
                          "bg-white absolute text-black top-11 w-full right-0.5 rounded-md",
                          { "hidden ": !isClick },
                          { "block ": isClick }
                        )}
                      >
                        <p
                          onClick={() => {
                            setServicetype("Mahsulot");
                            setIsClick(false);
                          }}
                          className="font-montserratalternates pl-2 py-2 rounded-md hover:bg-[#e5e7eb]"
                        >
                          {t("Product")}
                        </p>
                        <p
                          onClick={() => {
                            setServicetype("Franshiza");
                            setIsClick(false);
                          }}
                          className="font-montserratalternates pl-2 py-2 rounded-md hover:bg-[#e5e7eb]"
                        >
                          {t("Franchise")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    placeholder={t("Message")}
                    className="w-full p-2 mt-2 text-14px sm:text-[16px] resize-none bg-transparent border border-white outline-none focus:outline-none rounded-md h-[120px] placeholder:text-white font-montserratalternates text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 mt-4 bg-[#e67e22] font-medium text-white rounded-md font-montserratalternates"
                >
                  {t("Send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="w-full flex justify-center bg-cover bg-center pt-20 sm:pt-32"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5)),url("../photos/caruosel 7.jpg")`,
          }}
        >
          <div className="container relative z-10">
            <div className="flex flex-col items-center pb-20 xl:px-44 lg:px-10 sm:px-0 px-5">
              <h3 className="uppercase font-oswal font-medium mb-5 text-3xl text-white">
                {t("Our Certificates")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {sertificates.map((src, index) => (
                  <img src={src} alt={`sertificat ${index}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-red-800 pb-10 pt-20">
        <div className="flex justify-center w-full">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-y-5 text-white">
              <p className="font-montserratalternates max-w-[564px] text-center">
                {t("Ad")}
              </p>
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
      </footer>
      {/* Modal */}
      <Modal />
    </div>
  );
};

export default Mainpage;
