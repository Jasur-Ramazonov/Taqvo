import clsx from "clsx";
import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { RootState } from "./utils/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsClose } from "./utils/mySlice";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";

export type Message = {
  name: string;
  surname: string;
  phoneNumber: string;
  telegramUsername: string;
  region: string;
  seviceType: string;
  message?: string;
};

const Modal = () => {
  const { t } = useTranslation();
  const [isClick, setIsClick] = useState(false);
  const [serviceType, setServicetype] = useState(t("Select a service type"));
  let isForm = 0;
  const isClose = useSelector((state: RootState) => state.myReducer.isClose);
  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm<Message>();

  return (
    <div
      onClick={() => {
        isForm += 1;
        if (isForm % 2 === 1) {
          dispatch(setIsClose(true));
        }
      }}
      className={clsx(
        "fixed top-0 w-full h-full bg-black/30 -z-[-9999]",
        {
          "hidden ": isClose,
        },
        { "block ": !isClose }
      )}
    >
      <div
        onClick={() => {
          isForm += 1;
        }}
        className="absolute bg-red-800 rounded-md pt-10 pb-8 px-4 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10"
      >
        <form
          onSubmit={handleSubmit((d) => {
            if (serviceType === t("Select a service type")) {
              d.seviceType = t("Product");
            }
            d.seviceType = serviceType;
            const token = "7756947041:AAF0exwc0-WQMougfhgLi5CpavKLZBmve10";
            const chatId = 1936754751;
            const url = `https://api.telegram.org/bot${token}/sendMessage`;
            const message = `${t("Your name")} ${d.name} \n${t(
              "Your surname"
            )} ${d.surname}\n${t("Your phone number")} ${d.phoneNumber} \n${t(
              "Telegram username"
            )} ${d.telegramUsername} \n${t("Region")} ${d.region} \n${t(
              "Select a service type"
            )} ${d.seviceType} \n${t("Message")} ${d.message}`;
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
        <IoIosCloseCircleOutline
          onClick={() => {
            dispatch(setIsClose(true));
          }}
          className="absolute top-2 text-2xl right-2 hover:scale-105 cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default Modal;
