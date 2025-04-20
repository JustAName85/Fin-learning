import { Star } from "lucide-react";
import React from "react";

interface LessonProps {
  id: number;
  title: string;
  key: number;
  viewed: number;
  focusEmailField: React.RefObject<(() => void) | null>;
}

export const Lesson: React.FC<LessonProps> = ({
  id,
  title,
  viewed,
  focusEmailField,
}) => {
  return (
    <div
      className="border-[1px] border-[#fdb508] bg-[#222222] rounded-lg cursor-pointer hover:bg-gradient-to-r from-[#fdb508] via-[#ffe87c] to-[#fdb508] transition-all duration-500 ease-in-out"
      onClick={() => {
        focusEmailField.current?.();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className="text-white hover:text-black">
        <div className="flex flex-col md:flex-row p-4 gap-x-3">
          <img
            className="w-full h-fit md:w-52 md:h-32"
            src={`/video/${id}.jpg`}
          />
          <div className="flex flex-col gap-y-4">
            <p className="text-lg md:text-xl font-bold min-h-[3.5rem]">
              {title}
            </p>
            <div className="w-full md:w-fit">
              <div className="bg-red-600 w-fit p-2">
                <div className="flex flex-row gap-x-3">
                  <Star className="text-white fill-current" />
                  <span className="text-white text-base md:text-lg font-bold">
                    {viewed} người đã học
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
