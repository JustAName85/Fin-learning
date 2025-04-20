import { Button } from "@/components/ui/button";
import logo from "/logo.png";

interface HeaderProps {
  focusEmailField: React.RefObject<(() => void) | null>;
}

export const Header: React.FC<HeaderProps> = ({ focusEmailField }) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center justify-between mt-3 mx-5">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      <Button
        onClick={() => {
          focusEmailField.current?.();
        }}
        className="bg-gradient-to-r from-[#fdb508] via-[#ffe87c] to-[#fdb508] text-black text-base font-bold py-2 px-4 mr-7 cursor-pointer rounded-full transition duration-300"
      >
        ĐĂNG KÝ HỌC NGAY
      </Button>
    </header>
  );
};
