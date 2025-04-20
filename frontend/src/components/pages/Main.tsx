import { api } from "@/api/sendEmail";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import React from "react";
import Banner from "./Banner";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainProps {
  focusEmailField: React.RefObject<(() => void) | null>;
}

export const Main: React.FC<MainProps> = ({ focusEmailField }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const isMobile = useIsMobile();

  const sendEmail = (email: string, name: string) => {
    api
      .post("sendEmail", {
        email,
        name,
      })
      .then((response) => {
        console.log("Email sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <main className="flex flex-col-reverse justify-center mx-5 p-5 gap-5 md:gap-0 md:flex-row md:justify-between md:mx-24 md:p-14">
      {isMobile ? (
        <>
          <div className="w-full">
            <div className="mt-5">
              <Banner />
            </div>
            <LeftPanel focusEmailField={focusEmailField} />
          </div>
          <div className="w-full">
            <RightPanel
              sendEmail={sendEmail}
              focusEmailField={focusEmailField}
              setIsFocused={setIsFocused}
              isFocused={isFocused}
            />
          </div>
        </>
      ) : (
        <>
          <div className={`w-1/2 ${isFocused ? "opacity-35" : "opacity-100"}`}>
            <Banner />
            <LeftPanel focusEmailField={focusEmailField} />
          </div>
          <div className="w-1/2">
            <RightPanel
              isFocused={isFocused}
              sendEmail={sendEmail}
              focusEmailField={focusEmailField}
              setIsFocused={setIsFocused}
            />
          </div>
        </>
      )}
    </main>
  );
};
