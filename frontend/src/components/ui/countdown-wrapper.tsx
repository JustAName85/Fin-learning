import { useEffect, useState } from "react";

interface CountdownWrapperProps {
  digit: string;
  prevDigit: string;
  index: number;
}

export function CountdownWrapper({ digit, prevDigit }: CountdownWrapperProps) {
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit !== prevDigit) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setFlipping(false);
      }, 500); // duration of flip animation
      return () => clearTimeout(timeout);
    }
  }, [digit, prevDigit]);

  return (
    <div className="w-10 h-14 md:w-16 md:h-24 perspective-600">
      <div
        className={`w-full h-full text-3xl md:text-5xl font-bold flex items-center justify-center bg-black text-white rounded ${
          flipping ? "animate-flip" : ""
        }`}
      >
        {digit}
      </div>
    </div>
  );
}
