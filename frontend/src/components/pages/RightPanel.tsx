import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import logo from "/logo.png";
import star from "/star.png";
import { validateByRegex } from "@/lib/validate";
import { emailRegex } from "@/constant/regex";
import { cx } from "class-variance-authority";
import CountdownTimer from "./CountdownTimer";

interface RightPanelProps {
  sendEmail: (email: string, name: string) => void;
  focusEmailField: React.RefObject<(() => void) | null>;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  isFocused: boolean;
}

export const RightPanel: React.FC<RightPanelProps> = ({
  sendEmail,
  focusEmailField,
  setIsFocused,
  isFocused,
}) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidated, setIsValidated] = useState(true);

  useEffect(() => {
    focusEmailField.current = () => {
      emailRef.current?.focus();
      setIsFocused(true);
    };
  }, [focusEmailField]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidated) {
      return;
    }
    sendEmail(email, name);
    setName("");
    setEmail("");
  };

  // const handleMouseEnter = () => {
  //   document.body.style.overflow = "hidden";
  // };

  // const handleMouseLeave = () => {
  //   document.body.style.overflow = "";
  // };

  return (
    <div
      className={cx(
        "rounded-lg border-[1px] border-[#fdb508] ml-auto bg-[#121111] sticky top-14 w-full md:w-3/4",
        isFocused
          ? "shadow-[0_0_70px_rgba(253,181,8,0.8)]"
          : "shadow-[0_0_70px_rgba(253,181,8,0.5)]"
      )}
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="Logo" className="h-16 w-16 mr-4" />
          <p className="text-white text-lg md:text-2xl">
            Bắt đầu hành trình chinh phục Forex từ con số 0!
          </p>
        </div>
      </header>
      <div className="bg-[#424243] w-full h-2 mb-5"></div>
      <main>
        <div className="flex flex-row items-center justify-center">
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src={star} alt="Star" className="w-7 h-7 mr-2.5" />
          ))}
        </div>
        <div>
          <form
            className="flex flex-col justify-center px-6 py-4"
            onSubmit={handleSubmit}
          >
            <label className="text-white text-lg mb-2">Tên:</label>
            <input
              type="text"
              placeholder="Tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-[5px] p-2 mb-4 w-full bg-white text-black"
            />
            <label className="text-white text-lg mb-2">Email:</label>
            <input
              ref={emailRef}
              onBlur={() => {
                setIsFocused(false);
              }}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value === "") {
                  setIsValidated(true);
                  return;
                }
                if (!validateByRegex(e.target.value, emailRegex)) {
                  setIsValidated(false);
                  return;
                } else {
                  setIsValidated(true);
                }
              }}
              className="rounded-[5px] p-2 mb-4 w-full bg-white text-black"
            />
            {!isValidated && (
              <p className="text-red-500 text-base mb-4">
                Giá trị email nhập vào không hợp lệ
              </p>
            )}
            <div className="flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#fdb508] via-[#ffe87c] to-[#fdb508] text-black text-lg md:text-xl font-bold p-6 cursor-pointer rounded-full hover:bg-blue-700 transition duration-300"
              >
                ĐĂNG KÝ HỌC MIỄN PHÍ!
              </Button>
            </div>
          </form>
        </div>
      </main>
      <footer
        className="bg-gradient-to-r from-[#fdb508] via-[#ffe87c] to-[#fdb508] w-full rounded-b-lg mt-8"
        // style={{
        //   background:
        //     "linear-gradient(to right, #fdb508 0%, #ffe87c 20%, #fdb508 100%)",
        // }}
      >
        <div className="flex flex-col justify-center p-2 gap-y-2 md:gap-y-4 items-center">
          <p className="text-black font-bold text-3xl md:text-4xl mt-2">
            Kết thúc sau
          </p>
          <div className="w-full">
            <CountdownTimer />
          </div>
        </div>
      </footer>
    </div>
  );
};
