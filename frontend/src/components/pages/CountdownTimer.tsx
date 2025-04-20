import { useEffect, useState } from "react";
import { CountdownWrapper } from "../ui/countdown-wrapper";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(4733);
  const [prevTime, setPrevTime] = useState(4733);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(() => timeLeft);
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return {
      hours: [hours[0], hours[1]],
      minutes: [minutes[0], minutes[1]],
      seconds: [secs[0], secs[1]],
    };
  };

  const formatPrevTime = formatTime(prevTime);
  const formatCurrentTime = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2 md:gap-8">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            {formatCurrentTime.hours.map((digit, index) => (
              <CountdownWrapper
                key={`hour-${index}`}
                digit={digit}
                prevDigit={formatPrevTime.hours[index]}
                index={index}
              />
            ))}
          </div>
          <div className="mt-2 text-lg font-bold text-center">GIỜ</div>
        </div>

        {/* Separator */}
        <div className="flex flex-col items-center justify-center h-16 md:h-24 mb-7">
          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2d2d2d] rounded-full mb-2 md:mb-3"></div>
          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2d2d2d] rounded-full"></div>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            {formatCurrentTime.minutes.map((digit, index) => (
              <CountdownWrapper
                key={`minute-${index}`}
                digit={digit}
                prevDigit={formatPrevTime.minutes[index]}
                index={index}
              />
            ))}
          </div>
          <div className="mt-2 text-lg font-bold text-center">PHÚT</div>
        </div>

        {/* Separator */}
        <div className="flex flex-col items-center justify-center h-16 md:h-24 mb-7">
          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2d2d2d] rounded-full mb-2 md:mb-3"></div>
          <div className="w-1 h-1 md:w-2 md:h-2 bg-[#2d2d2d] rounded-full"></div>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            {formatCurrentTime.seconds.map((digit, index) => (
              <CountdownWrapper
                key={`second-${index}`}
                digit={digit}
                prevDigit={formatPrevTime.seconds[index]}
                index={index}
              />
            ))}
          </div>
          <div className="mt-2 text-lg font-bold text-center">GIÂY</div>
        </div>
      </div>
    </div>
  );
}
